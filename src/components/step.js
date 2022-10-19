import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepLabel } from "@mui/material";

const steps = [
  "Công việc mới",
  "Đang thực hiện",
  "Đã hoàn thành",
  "Chậm tiến độ",
  "Công việc hủy",
  "Không thực hiện",
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleClick = (e) => {
    const text = e.target.innerText;
    const click = steps.findIndex((item) => item.includes(text));
    if (click >= 0) {
      setActiveStep(click);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} padding={"30px 8px"}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel color="inherit" onClick={handleClick}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
