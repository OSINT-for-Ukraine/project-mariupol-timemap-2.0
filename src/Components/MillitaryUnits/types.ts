import { TupleOfTwoNumbers } from "Components/Space/types";

export type MillitaryUnit = {
  coordinates: TupleOfTwoNumbers;
  name: string;
  type:
    | "regiment"
    | "brigade"
    | "battalion"
    | "army"
    | "akhmat"
    | "storm-z"
    | "storm-v"
    | "division";
};
