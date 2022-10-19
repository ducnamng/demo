import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Component } from "react";
import styled from "styled-components";

const StyledSelectLeft = styled.div`
  h2 {
    left: 0;
    margin-left: 20px;
  }
`;

class InputLeft extends Component {
  render() {
    return (
      <div>
        <StyledSelectLeft>
          <FormControl sx={{ m: 1, width: 710 }}>
            <InputLabel id="demo-multiple-chip-label">
              {this.props.title}
            </InputLabel>
            <OutlinedInput id="select-multiple-chip" label={this.props.title} />
          </FormControl>
        </StyledSelectLeft>
      </div>
    );
  }
}

export default InputLeft;
