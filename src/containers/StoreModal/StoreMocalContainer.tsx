import React, {useState} from 'react';
import Header from '../../components/StoreModal/Header';
import styled,{css} from 'styled-components';
import {useLocation, useHistory} from 'react-router-dom';
import DatePickers from '../../components/StoreModal/DatePickers';
import {PrimaryButton} from '../../components/Common/CustomButton';
import {putDate} from '../../store/modules/reservation';
import {useDispatch} from 'react-redux';
import svg20 from './amenityImage/Frame.svg';
import svg1 from './amenityImage/Frame-1.svg';
import svg2 from './amenityImage/Frame-2.svg';
import svg3 from './amenityImage/Frame-3.svg';
import svg4 from './amenityImage/Frame-4.svg';
import svg5 from './amenityImage/Frame-5.svg';
import svg6 from './amenityImage/Frame-6.svg';
import svg7 from './amenityImage/Frame-7.svg';
import svg8 from './amenityImage/Frame-8.svg';
import svg9 from './amenityImage/Frame-9.svg';
import svg10 from './amenityImage/Frame-10.svg';
import svg11 from './amenityImage/Frame-11.svg';
import svg12 from './amenityImage/Frame-12.svg';
import svg13 from './amenityImage/Frame-13.svg';
import svg14 from './amenityImage/Frame-14.svg';
import svg15 from './amenityImage/Frame-15.svg';
import svg16 from './amenityImage/Frame-16.svg';
import svg17 from './amenityImage/Frame-17.svg';
import svg18 from './amenityImage/Frame-18.svg';
import svg19 from './amenityImage/Frame-19.svg';
import checkSvg2 from './armenityHover/Pictogram-02.svg';
import checkSvg3 from './armenityHover/Pictogram-03.svg';
import checkSvg4 from './armenityHover/Pictogram-04.svg';
import checkSvg5 from './armenityHover/Pictogram-05.svg';
import checkSvg6 from './armenityHover/Pictogram-06.svg';
import checkSvg7 from './armenityHover/Pictogram-07.svg';
import checkSvg8 from './armenityHover/Pictogram-08.svg';
import checkSvg9 from './armenityHover/Pictogram-09.svg';
import checkSvg10 from './armenityHover/Pictogram-10.svg';
import checkSvg11 from './armenityHover/Pictogram-11.svg';
import checkSvg12 from './armenityHover/Pictogram-12.svg';
import checkSvg13 from './armenityHover/Pictogram-13.svg';
import checkSvg14 from './armenityHover/Pictogram-14.svg';
import checkSvg15 from './armenityHover/Pictogram-15.svg';
import checkSvg16 from './armenityHover/Pictogram-16.svg';
import checkSvg17 from './armenityHover/Pictogram-17.svg';
import checkSvg18 from './armenityHover/Pictogram-18.svg';
import checkSvg19 from './armenityHover/Pictogram-19.svg';
import checkSvg20 from './armenityHover/Pictogram-20.svg';
import checkSvg21 from './armenityHover/Pictogram-21.svg';

const StoreMocalContainer = () => {


  function getFormatDate(date:any){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '-' + month + '-' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }
  
  
  let dateP = new Date();
  (dateP as any) = getFormatDate(dateP);

  const location = useLocation();
  const {data} = (location as any).state;
  const [personnel, setPersonnerl] = useState(1);
  const [date, setDate] = useState(dateP);
  

  const DumyAmenities = [
    'TV/프로젝터', '인터넷/와이파이', '복사/인쇄기', '화이트보드','음향/마이크','취사시설','음식물반입가능',
    '주류반입가능','샤워시설','주차','금연','반려동물가능','PC/노트북','의자/테이블','내부화장실','탈의실',
    '테라스/루프탑','공용라운지','전신거울','바베큐시설'
  ]

  const EngDumyAmenities = [
    'TV','WIFI','PRINTER','WHITEBOARD','SOUND','COOKING','FOOD','BEVERAGES','SHOWER','PARKING',
    'NO_SMOKE','PET','PC','TABLE','INTERNAL_TOILET','DRESS_ROOM','ROOFTOP','PUBLIC_ROUNGE','MIRROR','FAX','BARBECUE',
  ]

  const arr = [svg3,svg20,svg4,svg2,svg5,svg8,svg6,svg7,svg1,svg9,svg10,svg11,svg12,svg13,svg14,svg15,svg16,svg17,svg18,svg19]
  const checkArr = [
    checkSvg2,checkSvg3,checkSvg4,checkSvg5,checkSvg6,checkSvg7,checkSvg8,checkSvg9,checkSvg10,checkSvg11,
    checkSvg12,checkSvg13,checkSvg14,checkSvg15,checkSvg16,checkSvg17,checkSvg18,checkSvg19,checkSvg20,checkSvg21
  ]
  const history = useHistory();
  const dispatch = useDispatch();
  const handleAddClick = () => {
    if(personnel > 1)
    setPersonnerl(personnel - 1)
  }
  const handleminusClick = () => {
    setPersonnerl(personnel + 1)
  }

  const handleDateChange = (event:any) => {
    setDate(event.target.value)

  }
  const handleButtonClick = () => {
    dispatch(putDate(date,personnel))
    history.push(`/reservation/${data.id}`)
  }
  return (
    <ModalContainer>
      <Header/>
      <div className="Block">
        <ContentContainer>
          <h3 className="head_top">{data.name}</h3>
          <p className="head_content">{data.description}</p>
          <img src="/images/mainProduct2.png" alt=""/>
          <h4>공간 소개</h4>
          <p className="body_content">{data.content}</p>
          <hr/>
          <h4>편의 시설</h4>
          <ArmenityContainer>
            {
            DumyAmenities.map((dumy:string, index:number) => {
              return EngDumyAmenities.filter(value => value === data.amenities[index]).length ? 
                <div key={dumy} className="armenity_box">
                  <div className="armenity check">
                    <img src={checkArr[index]} alt="dumy"/>
                  </div>
                  <p>{dumy}</p>
                </div>
            :
              <div key={dumy} className="armenity_box">
                <div className="armenity">
                  <img src={arr[index]} alt="dumy"/>
                </div>
                <p>{dumy}</p>
              </div>
            })
          }
          </ArmenityContainer>
          <hr className="middle_line"/>
          <h4>공간 태그</h4>
          <div className="tag_container">
            {data.tags.map((tag:any) => {
              return (
                <div className="tag_box" key={tag.name}># {tag.name}</div>
              )
            })}
          </div>
          <hr className="line"/>
          <h4>유의 사항</h4>
          <div className="caution_box">
            {data.cautionNotes.map((caution:any) => {
              return (<p key={caution.caution} className="caution">{caution.caution}</p>)
            })}
          </div>
          <hr className="line"/>
          <h4>환불 정책</h4>
          <RefundContainer>
            <RefundRow>
              <span className="left">이용 8일 전</span>
              <span className="right">총 금액의 100% 환불</span>
            </RefundRow>
            <RefundRow>
              <span className="left">이용 7일 전 ~ 이용 전일</span>
              <span className="right">총 금액의 90% 환불</span>
            </RefundRow>
            <RefundRow>
              <span className="left">이용 당일</span>
              <span className="right">환불 불가</span>
            </RefundRow>
          </RefundContainer>
        </ContentContainer>
        <DialogContainer>
          <div className="dialog_box">
            <div className="dialog_head_box">
              <div className="dialog_head">
                {data.prices[0].price.amount.toLocaleString()}
                <span>원</span>
              </div>
              <p>
                하루 대여
              </p>
            </div>
            <hr/>
            <h4>이용 날짜</h4>
            <DatePickers change={handleDateChange}/>
            <h4>예약 인원</h4>
            <p>최대{data.prices[0].maxUsageDay}명</p>
            <CountInput>
              <LeftButton  onClick={handleAddClick}>-</LeftButton>
                <span>{personnel}명</span>
              <RightButton onClick={handleminusClick}>+</RightButton>
            </CountInput>
            <hr/>
            <PrimaryButton onClick={handleButtonClick} style={{marginTop:8}} width={'232px'} height={'48px'}>예약하기</PrimaryButton>
          </div>
        </DialogContainer>
      </div>
    </ModalContainer>
  )
}

export default StoreMocalContainer;

const ModalContainer = styled.div`
  width:1000px;
  height: fit-content;
  padding-bottom:100px;
  background:white;
  margin-top:46px;
  border-radius:8px;
  .Block {
    display:flex;
    justify-content:center;
    padding-top:32px;
    height:auto;
  }
`
const ContentContainer = styled.div`
  width:590px;
  .head_top {
    margin:0;
  }
  h3 {
    font-size:28px;
    margin-top:32px;
  }
  .head_content {
    font-size:18px;
    margin-top:8px;
  }
  img {
    width:100%;
    margin:48px 0 25px;
  }
  .body_content {
    margin-top:12px;
    margin-bottom:77px;
    line-height: 22px;
    font-size:15px;
  }
  hr {
    margin-bottom:32px;
    height:1px;
    background:${({theme}) => theme.strokeColor};
    border:none;
  }
  .middle_line {
    margin-top:20px;
  }
  .tag_container {
    display:flex;
    .tag_box {
      padding:14px 16px;
      background:${({theme}) => theme.strokeColor};
      margin-right:8px;
      margin-top:12px;
      border-radius:8px;
      font-size:15px;
    }
  }
  .line {
    margin:32px 0 32px;
  }
  .caution_box {
    margin-top:12px;
    .caution {
      font-size:15px;
      margin-bottom:3px;

    }
  }
`

const DialogContainer = styled.div`
  position:sticky;
  display:block;
  padding-top:24px;
  box-shadow: 0px 6px 16px 1px rgba(0,0,0,.1);
  top:60px;
  width:280px;
  height:450px;
  background:black;
  margin-left:24px;
  border-radius:8px;
  background:${({theme}) => theme.grayColor1};
  .dialog_box {
    width:232px;
    margin:0 auto;
    p {
      font-size:13px;
      color:${({theme}) => theme.grayColor7};
    }
    h4 {
      margin:24px 0 8px;
    }
    hr {
      margin-top:16px;
      height:1px;
      border:none;
      background:${({theme}) => theme.grayColor7};
    }
    .dialog_head_box {
      text-align:right;
      
      .dialog_head {
        text-align:right;
        font-weight:bold;
        font-size:18px;
        text {
          color:${({theme}) => theme.grayColor7};
        }
      }
    }
  }
`

const ArmenityContainer = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  margin-top:12px;
  .armenity_box {
    text-align:center;
    width:95px;
    margin-right:20px;
    
    .armenity {
      display:flex;
      justify-content:center;
      align-items:center;
      width:100%;
      height:95px;
      border:1px solid ${({theme}) => theme.strokeColor};
      border-radius:8px;
      img {
        width:62px;
        height:40px;
        margin:0;
      }
    }
    p {
      font-size:12px;
      color:${({theme}) => theme.grayColor7};
      margin-top:4px;
      margin-bottom:16px;
    }
    .check {
      img {
        width:100%;
        height:100%;
      }
    }
  }
  
`

const RefundContainer = styled.div`
  width:100%;
  height:157px;
  background:#F5F7F8;
  border-radius:8px;
  padding:32px 0 0 32px;
  margin-top:16px;
`

const RefundRow = styled.div`
  .left {
    display:inline-block;
    width:50%;
    font-weight:bold;
  }
  .right {
    width:50%;
  }
  & + & {
    margin-top:24px;
  }
`
export const CountInput = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:16px;
  width:100%;
  height:48px;
  border:1px solid #E3E6E8;
  border-radius:8px;
  span {
    font-size:15px;
  }
`
const buttonCss = css`
  width:48px;
  height:48px;
  color:#585B67;
  font-size:24px;
  background:#ECEFF1;
  margin:0; 
`

export const LeftButton = styled(PrimaryButton)`
  ${buttonCss}
  border-top-right-radius:0;
  border-bottom-right-radius:0;
`
export const RightButton = styled(PrimaryButton)`
  ${buttonCss}
  border-top-left-radius:0;
  border-bottom-left-radius:0;
`