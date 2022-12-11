import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Eventra from "../assets/Eventra logo.png"

const Header = ({setShow}) => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={Eventra} alt="my logo img" style={{width: "100px"}} />
      </NavLink>
      <Nav setShow={setShow} />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;