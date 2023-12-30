import React from "react";
import { Home, Settings } from "../assets";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrapper>
        <img src={Home} alt="" />
        <Title> Routines </Title>
        <img src={Settings} alt="" />
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.section`
  background-color: #182545;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h4`
  color: white;
`;
