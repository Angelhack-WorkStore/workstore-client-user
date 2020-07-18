import React from 'react';
import styled from 'styled-components';
import { BsX } from "react-icons/bs";
import { useHistory } from 'react-router-dom';
const HeaderContainer = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:74px;
  font-weight:bold;
  border-bottom:1px solid ${({theme}) => theme.strokeColor};
  .x {
    position:absolute;
    top:0;
    right:0;
    font-size:24px;
    margin:23px 26px 0 0;
    cursor:pointer;
  }
`
const Header = () => {

  const history = useHistory();

  return (
    <HeaderContainer>
      <h4>공간상세</h4>
      <span onClick={() => history.go(-1)} className="x"><BsX/></span>
    </HeaderContainer>
  )
}

export default Header;