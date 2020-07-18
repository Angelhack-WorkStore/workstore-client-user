import React from 'react';
import styled from 'styled-components';


const ModalContainer = styled.div`
  position:fixed;
  display:flex;
  justify-content:center;
  overflow:auto;
  top:0;
  bottom:0;

  width:100%;
  z-index:12;
  background:rgba(0,0,0,.3);
  
`

type ModalProps = {
  children: React.ReactNode;
}
const ModalTemplate = ({children}:ModalProps) => {
  return (
    <ModalContainer >
      {children}
    </ModalContainer>
  )
}

export default ModalTemplate;