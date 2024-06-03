import Icons from "@/component-library/Icons";
import type {
  HandleAlertMessageFunction,
  HandlePetListFunction,
  PetStatus,
} from "@/types/pet";
import { API_ENDPOINTS } from "@/utils/constants";
import axios from "axios";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function SearchOptions({
  handlePetList,
  handleAlertMessage,
}: {
  handlePetList: HandlePetListFunction;
  handleAlertMessage: HandleAlertMessageFunction;
}): React.ReactElement {
  const [petStatus, setPetStatus] = useState<PetStatus | "">("");
  const [petId, setPetId] = useState<string | undefined>(undefined);

  const handlePetStatusChange = (e): void => {
    const value = e.target.value;
    setPetStatus(value);
    if (value.length > 0) {
      findPetByStatus({ status: value });
    } else if (value === "") {
      handlePetList({ petList: [] });
    }
  };

  const handlePetIdChange = (e): void => {
    const value = e.target.value;
    setPetId(value);
  };

  const handlePetIdSearch = (): void => {
    if (petId !== undefined) {
      setPetStatus("");
      findPetById({ id: petId });
    }
  };

  const findPetByStatus = async ({
    status,
  }: {
    status: PetStatus;
  }): Promise<void> => {
    try {
      const response = await axios.get(API_ENDPOINTS.findPetByStatus, {
        params: {
          status: status,
        },
      });
      if (response.status === 200) {
        handlePetList({ petList: response?.data });
      } else {
        console.error(response?.data?.message);
      }
    } catch (err) {
      console.error("Could not fetch Pets");
    }
  };

  const findPetById = async ({ id }: { id: string }): Promise<void> => {
    try {
      const response = await axios.get(`${API_ENDPOINTS.findPetById}/${id}`);
      if (response.status === 200) {
        handlePetList({ petList: [response?.data] });
      } else {
        console.error("Something went wrong");
      }
    } catch (err) {
      if (err.response.status == 404 || err.response.status === 400) {
        handlePetList({ petList: [] });
        handleAlertMessage({ message: "Invalid Pet Id" });
      }
      console.error("Could not fetch Pets");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-8 p-4  shadow-md border rounded-xl">
      <select
        className="py-3 px-4 pe-9 block w-fit border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        value={petStatus}
        onChange={handlePetStatusChange}
      >
        <option value={""}>Pet status</option>
        <option value={"available"}>Availabe</option>
        <option value={"pending"}>Pending</option>
        <option value={"sold"}>Sold</option>
      </select>
      <div className="flex">
        <label
          htmlFor="hs-trailing-button-add-on-with-icon-and-button"
          className="sr-only"
        >
          Label
        </label>
        <div className="relative flex rounded-lg shadow-sm">
          <input
            type="number"
            id="hs-trailing-button-add-on-with-icon-and-button"
            name="hs-trailing-button-add-on-with-icon-and-button"
            className="py-3 px-8 ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter Pet Id"
            onChange={handlePetIdChange}
            value={petId}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <Icons size="xl">
              <HiOutlineSearch />
            </Icons>
          </div>
        </div>
        <button
          type="button"
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
          onClick={handlePetIdSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
