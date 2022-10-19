import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import styled from "styled-components";

const StyledSelectLeft = styled.div`
  h2 {
    left: 0;
    margin-left: 20px;
  }
`;

export default function SelectLeft({ title }) {
  return (
    <div>
      <StyledSelectLeft>
        <FormControl sx={{ m: 1, width: 710 }}>
          <InputLabel id="demo-multiple-chip-label">{title}</InputLabel>
          <OutlinedInput id="select-multiple-chip" label={title} />
        </FormControl>
      </StyledSelectLeft>
    </div>
  );
}
