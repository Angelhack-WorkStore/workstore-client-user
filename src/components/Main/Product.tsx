import React from 'react';
import styled from 'styled-components';
import {Link,useLocation} from 'react-router-dom';

const ProductContainer = styled.div`
  text-align:left;
  margin-top:60px;
  border:1px solid ${({theme}) => theme.strokeColor};
  border-radius:8px;
  .margin {
    padding-left:20px;
    padding-bottom:10px;
  }
  img {
    width: 387px;
    height:289px;
    margin-bottom:24px;
  }
  &:nth-child(2), &:nth-child(3) {
    margin-left:20px;
  }
  h5 {
    font-size:18px;
  }
  .address {
    margin-top:12px;
    color:${({theme}) => theme.grayColor5};
  }
  span {
    color:18px;
    font-weight:bold;
    p {
      display:inline-block;
      font-size:13px;
      margin-left:4px;
      color:${({theme}) => theme.grayColor7};
    }
  }
  .personnel {
    font-size:13px;
    color:${({theme}) => theme.grayColor7};
    margin-top:8px;
  }
`

const images = ['/images/mainpi.png','/images/thumbnail1.png','/images/thumbnail2.png']

const Product = ({data,index}:any) => {

  const location = useLocation();
  
  if (index >=3) return null;
  console.log(data.prices[0].price.amount)
  return (
    <ProductContainer>
      <Link to={{pathname:`/store/${data.id}`, state:{background:location, data}}}>
        <img src={images[index]} alt=""/>
      </Link>
      <div className="margin">
      <h5>{data.name}</h5>
      <p className="address">{data.address.address1}</p>
      <span>{data.prices[0].price.amount.toLocaleString()}<p>원 / 하루</p></span>
      <div className="personnel">{data.seatInfo.minPersonnelCount}인 ~ {data.seatInfo.maxPersonnelCount}인</div>
      </div>
    </ProductContainer>
  )
}

export default Product;