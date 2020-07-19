import React from 'react';
import ResetvationTemeplate from '../components/Reservation/ReservationTemplate';
import ReservationContainer from '../containers/Reservation/ReservationContainer';

const ReservationPage = () => {
  return (
    <>
    <ResetvationTemeplate>
      <ReservationContainer/>
    </ResetvationTemeplate>
    </>
  )
}

export default ReservationPage;