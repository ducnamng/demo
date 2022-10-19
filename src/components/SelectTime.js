import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Grid } from "@mui/material";

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(dayjs("2022-08-18T21:11:54"));
  const [value1, setValue1] = React.useState(dayjs("2022-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (newValue) => {
    setValue1(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <Grid display={"flex"} justifyContent={"space-between"}>
          <DateTimePicker
            label="NGÀY BẮT ĐẦU"
            value={value}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField {...params} required sx={{ width: "50%", m: 1 }} />
            )}
            ampm={false}
          />

          <DateTimePicker
            label="NGÀY KẾT THÚC"
            value={value1}
            onChange={handleChange1}
            renderInput={(params) => (
              <TextField {...params} required sx={{ width: "50%", m: 1 }} />
            )}
            ampm={false}
          />
        </Grid>
      </Stack>
    </LocalizationProvider>
  );
}
