import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {useParams } from 'react-router-dom';
import {RootState} from '../../store/modules'


const Container = styled.div`
  width:1200px;
`

const ReservationContainer = () => {

  const {registData} = useSelector((state:RootState) => state.registration);
  const [product, setProduct] = useState();
  const params = useParams();
  
  useEffect(() => {
    console.log(registData[0])
    const text = registData.filter((data:any) => data.id === (params as any)?.id)
    setProduct(text)
  },[registData])
  console.log(product)
  return (
    <Container>
    </Container>
  )
}

export default ReservationContainer;