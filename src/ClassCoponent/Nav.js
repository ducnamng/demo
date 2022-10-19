import { Component } from "react";
import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
const NavStyled = styled.div`
  background-color: #757de8;
  height: 60px;
  color: #fff;

  .header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 20px;
  }
  Button {
    height: 35px;
    width: 50px;
    color: #fff;
    border: 1px solid #fff;
  }
  h2 {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavStyled>
        <div className="header">
          <h2>
            <ClearOutlinedIcon />
            Cập nhật công việc / dự án
          </h2>
          <Button variant="outlined">Lưu</Button>
        </div>
      </NavStyled>
    );
  }
}

export default Nav;
