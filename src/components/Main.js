import "../App.css";
import HorizontalNonLinearStepper from "./step";
import NavButton from "./nav";
import SelectRight from "./SelectRight";
import styled from "styled-components";
import SelectLeft from "./SelectLeft";
import InputLeft from "./InputLeft";
import { STRINGS } from "./strings";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SelectTime from "./SelectTime";
import { Box } from "@mui/material";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "react-draft-wysiwyg";
import { Grid } from "@mui/material";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
  box-sizing: border-box;

  h2 {
    text-align: left;
    margin-left: 20px;
  }
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;

const ContainerSelectRight = styled.div``;
const ContainerSelectLeft = styled.div`
  .SelectRight {
    .selectField {
      margin-top: 0;
    }
  }
`;

function Main() {
  const nameJobs = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
  ];

  return (
    <div>
      <NavButton />
      <HorizontalNonLinearStepper />
      <ContainerSelect>
        <ContainerSelectLeft>
          <h2>Thông tin chính</h2>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <InputLeft title={STRINGS.input.names} />
            <SelectTime />
            <SelectRight title={STRINGS.select.customer} data={nameJobs} />
            <SelectLeft title={STRINGS.select.jobs} data={nameJobs} />
            <SelectLeft title={STRINGS.select.prioritized} data={nameJobs} />
            <InputLeft title={STRINGS.input.describe} className="selectField" />
          </Box>
        </ContainerSelectLeft>

        <ContainerSelectRight>
          <Information>
            <h2>Thông tin người tham gia</h2>
            <AddPhotoAlternateOutlinedIcon />
          </Information>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <SelectRight title={STRINGS.select.title} />
            <SelectRight title={STRINGS.select.viewers} />
            <SelectRight title={STRINGS.select.personInCharge} />
            <SelectRight title={STRINGS.select.supporter} />
            <SelectRight title={STRINGS.select.approvalGroup} />
            <SelectRight title={STRINGS.select.approver} />
          </Box>
          <Grid sx={{ m: 1 }}>
            <h2>MÔ TẢ CHI TIẾT</h2>
            <Editor
              editorState={EditorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
            />
          </Grid>
        </ContainerSelectRight>
      </ContainerSelect>
    </div>
  );
}

export default Main;
