import { Component } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepLabel } from "@mui/material";

class StepPer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        "Công việc mới",
        "Đang thực hiện",
        "Đã hoàn thành",
        "Chậm tiến độ",
        "Công việc hủy",
        "Không thực hiện",
      ],
      activeStep: 0,
    };
  }
  handleClick = (e) => {
    const text = e.target.innerText;
    const click = this.state.steps.findIndex((item) => item.includes(text));
    if (click >= 0) {
      this.setState({
        ...this.state,
        activeStep: click,
      });
    }
  };
  render() {
    return (
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={this.state.activeStep} padding={"30px 8px"}>
          {this.state.steps.map((label) => (
            <Step key={label}>
              <StepLabel color="inherit" onClick={this.handleClick}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }
}

export default StepPer;
