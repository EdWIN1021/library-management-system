import * as React from "react";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Range {
  borrowDate: Dayjs;
  returnDate: Dayjs;
}

export interface DateRangePickerProps {
  dateRange: Range;
  disabled: boolean;
  setDateRange: React.Dispatch<React.SetStateAction<Range>>;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  dateRange,
  disabled,
  setDateRange,
}) => {
  const handleOnChange = (value: Dayjs | null, type: string) => {
    setDateRange({ ...dateRange, [type]: value });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          disabled={disabled}
          disablePast
          label="borrow date"
          value={dateRange?.borrowDate}
          onChange={(value) => handleOnChange(value, "borrowDate")}
        />
        <DatePicker
          disabled={disabled}
          disablePast
          label="return date"
          value={dateRange?.returnDate}
          onChange={(value) => handleOnChange(value, "returnDate")}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
