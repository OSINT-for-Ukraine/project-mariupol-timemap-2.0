import { redirect } from "react-router-dom";
import {
  calculateDateFromMonthsAgo,
  currentDate,
  getIsoDate,
} from "./date-utils";

export const loader = async () => {
  return redirect(
    `/date/${calculateDateFromMonthsAgo(1)}__${getIsoDate(currentDate)}`
  );
};
