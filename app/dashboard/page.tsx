"use client";
import Alert from "@/component-library/Alert";
import { useUser } from "@/components/auth/UserContext";
import PetEditor from "@/components/dashboard/PetEditor";
import PetList from "@/components/dashboard/PetList";
import SearchOptions from "@/components/dashboard/SearchOptions";
import type { Pet } from "@/types/pet";
import { PAGE_URL } from "@/utils/constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Dashboard(): React.ReactElement {
  const router = useRouter();
  const { user } = useUser();
  const [petList, setPetList] = useState<Pet[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | undefined>(undefined);
  const [alertMessage, setAlertMessage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    setPetList([]);
  }, [selectedPet]);

  useEffect(() => {
    if (user === undefined) {
      router.push(PAGE_URL.auth);
    }
  }, [user]);

  useEffect(() => {
    import("preline");
  }, []);

  const handlePetList = ({ petList }: { petList: Pet[] }): void => {
    setPetList(petList);
    if (petList.length > 0) {
      handleAlertMessage({ message: undefined });
      setSelectedPet(undefined);
    }
  };

  const handleSelectedPet = ({ pet }: { pet: Pet | undefined }): void => {
    setSelectedPet(pet);
  };

  const handleAlertMessage = ({
    message,
  }: {
    message: string | undefined;
  }): void => {
    setAlertMessage(message);
  };

  return (
    <div className="py-4 sm:py-10 px-4 lg:px-32 xl:px-44 2xl:px-60">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <p className="text-xl sm:text-5xl font-bold py-8">
            Pet Store
          </p>
        </div>
        {selectedPet === undefined && (
          <>
            <div className="col-span-12">
              <SearchOptions
                handlePetList={handlePetList}
                handleAlertMessage={handleAlertMessage}
              />
            </div>
            <div className="col-span-12">
              <PetList
                petList={petList}
                handleSelectedPet={handleSelectedPet}
              />
            </div>
          </>
        )}
        {selectedPet !== undefined && (
          <div className="col-span-12">
            <PetEditor
              pet={selectedPet}
              handleSelectedPet={handleSelectedPet}
            />
          </div>
        )}
        <div className="col-span-12">
          {alertMessage !== undefined && alertMessage.length > 0 && (
            <Alert variant="warning" className="mt-4" message={alertMessage} />
          )}
        </div>
      </div>
    </div>
  );
}
