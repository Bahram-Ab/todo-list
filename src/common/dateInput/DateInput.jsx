import React, { useState } from "react";
import "react-day-picker/lib/style.css";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import purple from "@material-ui/core/colors/purple";

const DateInput = ({ setSelectedValue, preSelected = new Date() }) => {
  const [selectedDate, setSelectedDate] = useState(preSelected);
  const handleDateChange = (e) => {
    setSelectedDate(e);
    setSelectedValue(e);
  };

  const materialTheme = createTheme({
    palette: {
      primary: purple,
    },
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: purple[900],
        },
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          // backgroundColor: purple.A200,
          // color: "white",
        },
      },
      MuiPickersDay: {
        day: {
          color: purple[900],
        },
        daySelected: {
          backgroundColor: purple[100],
        },
        dayDisabled: {
          color: purple["100"],
        },
        current: {
          color: purple["300"],
        },
      },
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={materialTheme}>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          animateYearScrolling={false}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
