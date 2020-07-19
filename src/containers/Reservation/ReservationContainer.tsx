import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {useLocation,useParams } from 'react-router-dom';
import {RootState} from '../../store/modules'
import {Input} from '../../components/Common/CustomInput';
import {CheckBox} from '../../components/Common/CustomCheckBox';
import {PrimaryButton} from '../../components/Common/CustomButton';
import queryString from 'query-string';

const Container = styled.div`
  width:1200px;
  margin:0 auto;
  display:flex;
  justify-content:center;
  padding-bottom:165px;
`
const ContentContainer = styled.div`
  width:590px;
  margin-right:122px;
  .content_head {
    display:flex;
    img {
      width:285px;
      height:213px;
      margin-right:20px;
    }
    p {
      font-size:18px;
      margin-top:24px;
      word-break: keep-all;
    }
  }
  hr {
    height:1px;
    border:none;
    background:${({theme}) => theme.strokeColor};
    margin:60px 0;
  }
  h3 {
    margin-bottom:12px;
  }
  h2 {
    margin-bottom:32px;
  }
  p.caution {
    margin-bottom:3px;
  }
  .pay_content {
    font-size:13px;
    color:${({theme}) => theme.grayColor7};
  }
  .pay {
    margin-top: 24px;
  }
  .middle_head {
    margin-bottom:8px;
  }
`


const DialogContainer = styled.div`
  position:sticky;
  top:50px;
  width:488px;
  height:446px;
  background:${({theme}) => theme.grayColor1};
  box-shadow: 0px 6px 16px 1px rgba(0,0,0,.1);
  padding-top:48px;
  border-radius:8px;
  .dialog_box {
    width:392px;
    margin:0 auto;
    h4 {
      font-size:28px;
      margin-top:16px;
      margin-bottom:32px;
      font-weight:normal;
    }
    .flex_box {
      display:flex;
      align-items:center;
      font-weight:bold;
      justify-content:space-between;
      h5 {

        font-size:18px;
      }
      span {
        font-size:28px;
        p {
          display:inline-block;
          color:${({theme}) => theme.grayColor7};
          font-size:18px;
          margin-left:8px;
        }
      }
    }
  }
`

const CustomInput = styled(Input)`
  margin-bottom:32px;
`

const ServiceBox = styled.div`
  hr {
    margin:25px 0 16px;
  }
  .policy_box {
    .policy_flex {
      display:flex;
      justify-content:space-between;
      span {
        text-decoration:underline;
        cursor:pointer;
      }
    }
    .block {
      display:block;
      margin-top:14px;
      margin-left:0;
    }
  }
`
const ReservationContainer = () => {
  const {registData} = useSelector((state:RootState) => state.registration);

  const [product, setProduct] = useState<any>('');

  const location = useLocation();
  const {query} = queryString.parseUrl(location.search)
  const params = useParams();

  useEffect(() => {
    if(registData.length){
      let text = registData.filter((data:any) => data.id == (params as any).id);
      setProduct(text[0])
    }
  },[registData,params])
  console.log("sss")
  if(!product) return null
  
  return (
    <Container>
      <ContentContainer>
        <div className="content_head">
          <img src="/images/mainpi.png" alt=""/>
          <div>
            <h3>{product.name}</h3>
            <p>{product.address.address1}{product.address.address2}</p>
          </div>
        </div>
        <hr/>
        <h2>예약자 정보</h2>
        <h3>예약자 성함</h3>
          <CustomInput name="홍길동"/>
        <h3>연락처</h3>
          <CustomInput name="010-0000-0000"/>
        <h3>이메일</h3>
          <CustomInput name="ex. workstore@email.com"/>
        <h3>사용 목적</h3>
          <CustomInput name="공간을 어떤 용도로 사용하실지 작성해주세요"/>
        <h2>유의 사항</h2>
        {product.cautionNotes.map((caution:any) => {
          return (
            <p className="caution" key={caution.caution}>{caution.caution}</p>
          )
        })}
        <hr/>
        <h2 className="middle_head">결제 방법</h2>
        <p className="pay_content">카카오 페이 결제만 가능합니다.</p>
        <img className="pay" src="/images/kakaopay.png" alt="kakaopay"/>
        <hr/>
        <h2>서비스 이용 동의</h2>
        <ServiceBox>
          <CheckBox>
            <input id="all" type="checkbox" name="seat"/>
            <label htmlFor="all">전체 약관에 동의합니다.</label>
          </CheckBox>
            <hr/>
          <div className="policy_box"> 
            <div className="policy_flex">
              <CheckBox className="block">
                <input id="policy1" type="checkbox" name="seat"/>
                <label htmlFor="policy1">서비스 이용약관</label>
              </CheckBox>
              <span>보기</span>
            </div>
            <div className="policy_flex">
            <CheckBox className="block">
              <input id="policy2" type="checkbox" name="seat"/>
              <label htmlFor="policy2">개인정보 처리방침</label>
            </CheckBox>
            <span>보기</span>
            </div>
            <div className="policy_flex">
            <CheckBox className="block">
              <input id="policy3" type="checkbox" name="seat"/>
              <label htmlFor="policy3">위 공간의 예약조건 확인 및 결제 진행 동의</label>
            </CheckBox>
            <span>보기</span>
            </div>
          </div>
        </ServiceBox>
      </ContentContainer>
      <DialogContainer>
        <div className="dialog_box">
          <p>이용 날짜</p>
          <h4>{query.date}</h4>
          <p>예약 인원</p>
          <h4>{query.personnel}명</h4>
          <hr/>
          <div className="flex_box">
            <h5>결제 예정 금액</h5>
            <span>{(product.prices[0].price.amount * Number(query.personnel)).toLocaleString()}<p>원</p></span>
          </div>
          <PrimaryButton width={'100%'} height={'48px'}>결제 하기</PrimaryButton>
        </div>
      </DialogContainer>
    </Container>
  )
}

export default ReservationContainer;