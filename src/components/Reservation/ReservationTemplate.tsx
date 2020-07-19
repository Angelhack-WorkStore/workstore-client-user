import React from 'react';
import styled from 'styled-components';
import Footer from '../../containers/Footer/FooterContainer';

const ReservationContainer = styled.main`
  position:relative;
  height:auto;
  padding-bottom:165px;
  width:100%;
  min-height:100vh;
  .header {
    display:flex;
    justify-content:center;
    align-items:center;
    height:216px;
    h2 {
      font-size:40px;
    }
  }
      hr {
        height:1px;
        background:${({theme}) => theme.strokeColor};
        border:none;
        margin-bottom:60px;
      }
`

const ReservationTemeplate = ({children}:any) => {

  return (
    <ReservationContainer>
      <div className="header">
        <h2>예약하기</h2>
      </div>
        <hr/>
      {children}
      <Footer/>
    </ReservationContainer>
  )
}

export default ReservationTemeplate;