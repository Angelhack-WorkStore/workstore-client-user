import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Banner from '../../components/Main/Banner';
import SearchBlock from '../../components/Main/SearchBlock';
import {PrimaryButton} from '../../components/Common/CustomButton';
import {device} from '../../styles/MediaHoc';
import {RootState} from '../../store/modules';
import {ManageInfoType} from '../../store/modules/registration';
import Product from '../../components/Main/Product';
import Footer from '../Footer/FooterContainer'; 

const MiddleContainer = styled.div`
  width:1200px;
  padding-top:130px;
  text-align:center;
  margin:0 auto;
  text {
    color:${({theme}) => theme.accentColor};
  }
  h2 {
    font-size:44px;
  }
  p {
    margin-top:32px;
  }
  hr {
    margin:59px 0 90px;
    border:none;
    height:1px;
    background:${({theme}) => theme.grayColor3};
  }
  .header_two {
    margin-bottom:100px;
  }
  @media ${device.laptopL} {
    width:100%;
  }
`

const ContentRow = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  height:390px;
  h4 {
    font-size:28px;
  }
  p {
    font-size:18px;
  }
  & + & {
    margin-top:100px;
  }
  .content_left {
    flex:1;
    text-align:left;
  }
  .content_right {
    flex:1;
    text-align:right;
  }
  @media ${device.laptopL} {
    display:block;
    height:auto;
    margin-top:40px;
    img {
      margin-top:40px;
    }
    .content_left {
      text-align:center;
    }
    .content_right {
      text-align:center;
      
    }
  }
  &.middle_row {
    flex-direction: row-reverse;
  }
`

const MiddleBanner = styled.div`
  display:flex;
  align-items:center;
  width:calc(100% - 160px);
  padding:61px 80px;
  margin-top:161px;
  margin-bottom:90px;
  background-image:url('/images/middleBanner.png');
  background-position:center center;
  background-size:cover;
  border-radius:8px;
  div {
    flex:1;
    height:100%;
  }
  .banner_left {
    text-align:left;
    h4 {
      font-size:28px;
    }
  }
  .banner_right {
    text-align:right;
  }
`

const BottomContent = styled.div`
  display:flex;
  width:100%;
`

const CustomButton = styled(PrimaryButton)`
  margin:0;
`

const MainContainer = () => {

  const {registData} = useSelector((state:RootState) => state.registration)

  return (
    <>
      <Banner/>
      <SearchBlock/>
      <MiddleContainer>
        <h2>업무 공간을<br/> <text>하루종일 마음껏</text> 이용하세요.</h2>
        <p>
          워크스토어는 <text>점포가 운영 되지 않는 시간에 공간을 공유</text>합니다.<br/>
          사무 업무 이용자만 예약하여 업무에 집중할 수 있습니다.<br/>
          가까운 워크스토어에서 공간을 예약해보세요.
        </p>
        <hr/>
        <h2 className="header_two">워크스토어의 좋은점</h2>
        <ContentRow>
          <div className="content_left">
            <h4><text>저렴한</text> 가격!</h4>
            <p>
              점포 미운영 시간에 유휴 공간을 사용할 수 있어<br/>
              다른 코워킹스페이스보다 저렴한 가격으로<br/>
              이용해보세요
            </p>
          </div>
          <div className="content_right">
            <img src="/images/mainContent1.png" alt="image"/>
          </div>
        </ContentRow>
        <ContentRow className="middle_row">
          <div className="content_right">
            <h4><text>제휴 공간별 즐거운</text> 혜택!</h4>
            <p>
              워크스토어에 등록된 모든 점포에서<br/>
             음료 할인, 사이드 메뉴 제공 등 다양한 혜택과 할인으로<br/>
              공간을 더욱 즐겁게 활용해보세요
            </p>
          </div>
          <div className="content_left">
            <img src="/images/mainpic.png" alt="image"/>
          </div>
        </ContentRow>
        <ContentRow>
          <div className="content_left">
            <h4><text>간편한</text> 이용절차</h4>
            <p>
              나에게 맞는 공간을 예약 후 점포 이용시,<br/>
              QR코드 확인을 통해 출입을 확인하여<br/> 
              간편하게 이용해보세요
            </p>
          </div>
          <div className="content_right">
            <img src="/images/mainContent3.png" alt="image"/>
          </div>
        </ContentRow>
        <MiddleBanner>
          <div className="banner_left">
            <h4>나에게 맞는 공간을<br/> 찾으러 가볼까요?</h4>
          </div>
          <div className="banner_right">
            <a href="http://localhost:3000/">
              <CustomButton width={'285px'}>나에게 맞는 공간 찾기</CustomButton>
            </a>
          </div>
        </MiddleBanner>
          <h2>이런 공간은 어떠세요?</h2>
        <BottomContent>
          {registData.map ((info:any,index:number) => {
            return <Product index={index} data={info} key={info.id}/>
          })}
        </BottomContent>
      </MiddleContainer>
      <Footer/>
    </>
  )
}

export default MainContainer;