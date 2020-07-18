import React,{useState} from 'react';
import styled from 'styled-components';
import {PrimaryButton,SubButton} from '../Common/CustomButton';
import {Input} from '../Common/CustomInput';
import {device} from '../../styles/MediaHoc';

const BlockCotainer = styled.div`
  position:absolute;
  background:white;
  width:424px;
  height:425px;
  top:90px;
  right:150px;
  border-radius:8px;
  padding:32px;
  box-shadow: 0px 2px 5px ${({theme}) => theme.grayColor3};
  @media ${device.laptopL} {
    position:relative;
    right:0;
    top:20px;
    margin:0 auto;
  }
  h4 {
    font-size:18px;
  }
  .toggle_btn {
    display:flex;
    width:100%;
    height:48px;
    border-radius:8px;
    margin:12px 0 24px;
    cursor:pointer;
    border:1px solid ${({theme}) => theme.grayColor3};
    .btn {
      flex:1;
      display:flex;
      color:${({theme}) => theme.grayColor5};
      justify-content:center;
      align-items:center;
      transition:background .3s;
    }
    .active {
      border-radius:8px;
      background:${({theme}) => theme.grayColor2};
      color:${({theme}) => theme.boldColor};
      font-weight:bold;
    }
  }
`

const Btn = styled(SubButton)`
  margin:12px 0 48px;
  border:1px solid ${({theme}) => theme.strokeColor};
  background:white;
  transition:background .3s;
  &.active {
    border:none;
    background:${({theme}) => theme.strokeColor};
  }
  & + & {
    margin-left:8px;
  }
`

const CustomInput = styled(Input)`
  margin:12px 0 24px;
`
const SearchBlock = () => {


  const [type, setType] = useState('Month');
  const [address, setAddress] = useState('');
  const [personnel, setPersonnel] = useState(1);

  const handleTypeClick = (type:string) => {
    setType(type)
  }

  const handleAddressChange = (event:any) => {
    const {value} = event.target;
    setAddress(value);
  }

  const handlePersonnelClick = (value:number) => {
    setPersonnel(value)
  }

  return (
    <BlockCotainer>
      <h4>기간</h4>
      <div className="toggle_btn">
        <div onClick={() => handleTypeClick('Month')} className={`btn ${type === 'Month' && 'active' }`}>1개월 이상 대여</div>
        <div onClick={() => handleTypeClick('Day')} className={`btn ${type === 'Day' && 'active' }`}>1일 대여</div>
      </div>
      <h4>지역</h4>
      <div>
        <CustomInput value={address} onChange={handleAddressChange} name={"어느지역을 찾으시나요?"}/>
      </div>
      <h4>인원</h4>
      <div className="button_group">
        <Btn onClick={() => handlePersonnelClick(1)}  className={`${personnel === 1 && 'active'}`} width={'136px'}>1명</Btn>
        <Btn onClick={() => handlePersonnelClick(10)} className={`${personnel === 10 && 'active'}`}  width={'136px'}>10명 이하</Btn>
        <Btn onClick={() => handlePersonnelClick(30)} className={`${personnel === 30 && 'active'}`}  width={'136px'}>30명 이하</Btn>
      </div>
      <PrimaryButton style={{margin:0}} width={'424px'}>공간 찾기</PrimaryButton>
    </BlockCotainer>
  )
}

export default SearchBlock;