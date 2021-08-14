export type turn = {
  num: number;
  set: React.Dispatch<React.SetStateAction<number>>;
};

export type name = {
  name: string;
  setState: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

export type formState = {
  setState: React.Dispatch<React.SetStateAction<JSX.Element>>;
};
