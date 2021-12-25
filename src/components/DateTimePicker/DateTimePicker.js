import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./date-time-picker.css";

const DateTimePicker = ({
  selectedDate,
  onChange,
  isClearable = false,
  showPopperArrow = false,
  ...props
}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      isClearable
      placeholderText="I have been cleared!"
    />
  );
};

export default DateTimePicker;
