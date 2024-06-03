import Icons from "@/component-library/Icons";
import type {
  HandleSelectedPet,
  Pet,
  PetStatus,
  PetTag,
} from "@/types/pet";
import React from "react";
import { HiCheckCircle, HiExclamationCircle, HiXCircle } from "react-icons/hi2";

export default function PetList({
  petList,
  handleSelectedPet,
}: {
  petList: Pet[];
  handleSelectedPet: HandleSelectedPet;
}): React.ReactElement {
  const PetTags = ({ tagList }: { tagList: PetTag[] }): React.ReactElement => {
    return (
      <div className="flex gap-2">
        {tagList.map((tag: PetTag, key: number) => {
          return (
            <p className="bg-gray-100 w-fit py-1 px-4 rounded-full">
              {tag.name}
            </p>
          );
          return;
        })}
      </div>
    );
  };

  const PetStatus = ({ status }: { status: PetStatus }): React.ReactElement => {
    if (status === "available") {
      return (
        <Icons size="xl" className="text-2xl text-green-400">
          <HiCheckCircle />
        </Icons>
      );
    }
    if (status === "pending") {
      return (
        <Icons size="xl" className="text-2xl text-gray-600">
          <HiExclamationCircle />
        </Icons>
      );
    } else {
      return (
        <Icons size="xl" className="text-2xl text-red-400">
          <HiXCircle />
        </Icons>
      );
    }
  };

  const PetCard = ({ pet }: { pet: Pet }): React.ReactElement => {
    return (
      <div
        id={pet.id}
        className="col-span-12 sm:col-span-4 border p-4 rounded-xl cursor-pointer hover:shadow-xl"
        onClick={() => {
          handleSelectedPet({ pet });
        }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between py-6">
            <div>
              <p className="text-2xl font-medium">{pet.name}</p>
            </div>
            <div>
              <PetStatus status={pet.status} />
            </div>
          </div>
          <p className="bg-gray-100 w-fit py-1 px-4 rounded-full">
            {pet.category.name}
          </p>

          <PetTags tagList={pet.tags} />
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {petList.length > 0 ? (
        <>
          {petList.map((pet: Pet, key: number) => {
            return <PetCard key={key} pet={pet} />;
          })}
        </>
      ) : (
        <div className="col-span-12 py-8">
          <p className="text-4xl text-gray-200">Browse pet inventory</p>
        </div>
      )}
    </div>
  );
}
