import Alert from "@/component-library/Alert";
import Button from "@/component-library/Button";
import Icons from "@/component-library/Icons";
import InputText from "@/component-library/InputText";
import { AlertMessage } from "@/types/auth";
import type { HandleSelectedPet, Pet, PetStatus } from "@/types/pet";
import { API_ENDPOINTS } from "@/utils/constants";
import axios from "axios";
import React, { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";

interface PetEditorForm {
  name: string;
  status: PetStatus | "";
}

export default function PetEditor({
  pet,
  handleSelectedPet,
}: {
  pet: Pet;
  handleSelectedPet: HandleSelectedPet;
}): React.ReactElement {
  const [name, setName] = useState<string>(pet.name);
  const [status, setStatus] = useState<PetStatus>(pet.status);
  const [alert, setAlert] = useState<AlertMessage | undefined>(undefined);

  const handleUpdate = () => {
    if (name.length > 0) {
      updatePet({ name, status });
    } else {
      setAlert({
        message: "Pet name is required",
        variant: "warning",
      });
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "available" || value === "pending" || value == "sold") {
      setStatus(value);
    }
  };

  const updatePet = async ({
    name,
    status,
  }: {
    name: string;
    status: PetStatus;
  }): Promise<void> => {
    try {
      const response = await axios.put(`${API_ENDPOINTS.updatePet}`, {
        ...pet,
        name: name,
        status: status,
      });
      if (response.status === 200) {
        setAlert({
          message: "Pet Updated",
          variant: "success",
        });
      } else if (response.status === 404 || response.status === 400) {
        setAlert({
          message: "Pet not found",
          variant: "warning",
        });
      } else {
        console.error(response?.data?.message);
      }
    } catch (err) {
      console.error("Could not fetch Pets");
    }
  };

  return (
    <div className="w-72">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 py-4 sm:py-16">
          <Button
            variant="white"
            className=""
            onClick={() => {
              handleSelectedPet({ pet: undefined });
            }}
          >
            <Icons size="xl">
              <HiOutlineArrowLeft />
            </Icons>
            Back
          </Button>
        </div>
        <div className="col-span-12">
          <label htmlFor="petName" className="block text-sm mb-2">
            Pet Name
          </label>
          <InputText
            id="petName"
            type="text"
            label="Pet Name"
            name="Pet Name"
            className="rounded-xl"
            value={name}
            onChange={handleName}
          ></InputText>
        </div>
        <div className="col-span-12">
          <label htmlFor="petStatus" className="block text-sm mb-2">
            Status
          </label>
          <select
            id="petStatus"
            className="w-full py-3 px-4 pe-9 block border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            value={status}
            onChange={handleStatus}
          >
            <option value={""}>Pet status</option>
            <option value={"available"}>Availabe</option>
            <option value={"pending"}>Pending</option>
            <option value={"sold"}>Sold</option>
          </select>
        </div>

        <div className="col-span-12">
          <Button variant="black" className="w-full" onClick={handleUpdate}>
            Update
          </Button>
        </div>
        <div className="col-span-12">
          {alert?.message !== undefined && alert.message.length > 0 && (
            <Alert
              variant={alert.variant}
              className="mt-4"
              message={alert.message}
            />
          )}
        </div>
      </div>
    </div>
  );
}
