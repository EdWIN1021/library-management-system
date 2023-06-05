"use client";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";

import { DatePickerProps } from "./type";

const DatePicker: React.FC<DatePickerProps> = ({ dateRange, setDateRange }) => {
  return (
    <DateRange
      rangeColors={["#ff8a00"]}
      ranges={[dateRange]}
      date={new Date()}
      onChange={(value) => setDateRange(value.selection)}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
    />
  );
};

export default DatePicker;
