import React from 'react';
import styled from 'styled-components';




const FootContainer = styled.footer`
  position:absolute;
  bottom:0;
  width:100%;
  height:165px;
  background:${({theme}) => theme.grayColor1};
  img {
    width:110px;
    height:150px;
    margin-left:150px;  
  }
`
const FooterContainer = () => {
  return (
    <FootContainer>
      <img src="/images/mainLogo.png" alt="wortstore"/>
    </FootContainer>
  )
}

export default FooterContainer;