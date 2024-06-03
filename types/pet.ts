export interface PetCategory {
  id: number;
  name: string;
}

export interface PetTag {
  id: number;
  name: string;
}

export interface Pet {
  id: string;
  name: string;
  category: PetCategory;
  status: PetStatus;
  photoUrls: string[];
  tags: PetTag[];
}

export type PetStatus = "available" | "pending" | "sold";

export type HandlePetListFunction = ({ petList }: { petList: Pet[] }) => void;
export type HandleAlertMessageFunction = ({
  message,
}: {
  message: string;
}) => void;
export type HandleSelectedPet = ({ pet }: { pet: Pet | undefined }) => void;
