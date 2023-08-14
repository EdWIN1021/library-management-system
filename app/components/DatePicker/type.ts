import { Dayjs } from "dayjs";

interface Range {
  borrowDate: Dayjs;
  returnDate: Dayjs;
}

export interface DateRangePickerProps {
  dateRange: Range;
  disabled: boolean;
  setDateRange: React.Dispatch<React.SetStateAction<Range>>;
}
