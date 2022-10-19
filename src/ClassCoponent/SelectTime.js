import { Grid, Stack, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Component } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

class SelectTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: dayjs("2022-08-18T21:11:54"),
      value1: dayjs("2022-08-18T21:11:54"),
    };
  }
  handleChange = (newValue) => {
    this.setState({ ...this.state, value: newValue });
  };
  handleChange1 = (newValue) => {
    this.setState({ ...this.state, value1: newValue });
  };
  render() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <Grid display={"flex"} justifyContent={"space-between"}>
            <DateTimePicker
              label="NGÀY BẮT ĐẦU"
              value={this.state.value}
              onChange={this.handleChange}
              renderInput={(params) => (
                <TextField {...params} required sx={{ width: "50%", m: 1 }} />
              )}
              ampm={false}
            />

            <DateTimePicker
              label="NGÀY KẾT THÚC"
              value={this.state.value1}
              onChange={this.handleChange1}
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
}

export default SelectTime;
