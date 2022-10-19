import { Component } from "react";
import NavButton from "./Nav";
import StepPer from "./StepPer";
import "../App.css";
import SelectLeft from "./SelectLeft";
import styled from "styled-components";
import { Box, Grid } from "@mui/material";
import { STRINGS } from "./strings";
import InputLeft from "./InputLeft";
import SelectTime from "./SelectTime";
import SelectRight from "./SelectRight";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "react-draft-wysiwyg";


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


class Render extends Component {
  nameJobs = [
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
  render() {
    return (
      <div>
        <NavButton />
        <StepPer />
        <ContainerSelect>
          <ContainerSelectLeft>
            <h2>Thông tin chính</h2>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <InputLeft title={STRINGS.input.names} />
              <SelectTime />
              <SelectRight
                title={STRINGS.select.customer}
                data={this.nameJobs}
              />
              <SelectLeft title={STRINGS.select.jobs} data={this.nameJobs} />
              <SelectLeft
                title={STRINGS.select.prioritized}
                data={this.nameJobs}
              />
              <InputLeft
                title={STRINGS.input.describe}
                className="selectField"
              />
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
                // onEditorStateChange={this.onEditorStateChange}
              />
            </Grid>
          </ContainerSelectRight>
        </ContainerSelect>
      </div>
    );
  }
}

export default Render;
