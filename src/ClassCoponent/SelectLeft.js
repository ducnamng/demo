import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Component } from "react";

class SelectLeft extends Component {
  constructor(props) {
    super(props);
    this.state = { age: "" };
  }
  handleChange = (event) => {
    this.setState({ ...this.state, age: event.target.value });
  };
  render() {
    return (
      <Box sx={{ m: 1, width: 710, textAlign: "left" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {this.props.title}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.age}
            label={this.props.title}
            onChange={this.handleChange}
          >
            {this.props.data.map((item) => {
              return <MenuItem value={item.value}>{item.label}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    );
  }
}

export default SelectLeft;
