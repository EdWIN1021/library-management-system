import { Range } from "react-date-range";

export interface DatePickerProps {
  dateRange: Range;
  setDateRange: React.Dispatch<React.SetStateAction<Range>>;
}
