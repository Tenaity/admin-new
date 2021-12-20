import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./date-time-picker.css";

const DateTimePickerRes = ({
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
      locale="pt-BR"
      showTimeSelect
      timeFormat="p"
      timeIntervals={15}
      dateFormat="Pp"
    />
  );
};

export default DateTimePickerRes;
