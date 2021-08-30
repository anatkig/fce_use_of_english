export type turn = {
  num: number;
  set: React.Dispatch<React.SetStateAction<number>>;
};

export type name = {
  name: string | null | undefined;
  setState: React.Dispatch<React.SetStateAction<string | null | undefined>>;
};

export type formState = {
  setState: React.Dispatch<React.SetStateAction<string | null | undefined>>;
};

export type ContextStore = {
  correctAnswersNumber: number;
  changeCorrectAnswersNumber: (num: number) => void;
  dummie: string;
  setDummie: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type isName = {
  setIsName: React.Dispatch<React.SetStateAction<boolean>>;
};
export type changeName = {
  setChangeName: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Name = {
  setIsName: React.Dispatch<React.SetStateAction<boolean>>;
  setChangeName: React.Dispatch<React.SetStateAction<boolean>>;
};
