import React from 'react';
import styled from 'styled-components';


const ReservationContainer = styled.main`
  width:1200px;
  margin:0 auto;
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
    </ReservationContainer>
  )
}

export default ReservationTemeplate;