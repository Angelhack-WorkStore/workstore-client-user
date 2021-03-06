import React from 'react';
import styled from 'styled-components';
import {PrimaryButton} from '../Common/CustomButton';
import {Link} from 'react-router-dom';

const BannerContainer = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:500px;
  overflow:hidden;
  .banner {
    position:absolute;
    display:block;
    z-index:-2;
  }
  .content_box {
    width:100%;
    text-align:left;
    margin:0 0 0 151px;
    color:white;
    .text {
      position:relative;
      .accent.bottom {
        top:100px;
      }
      .accent.top {
        top:30px;
      }
    }
    .accent {
      position:absolute;
      width:96px;
      z-index:-1;
      height:32px;
      background:${({theme}) => theme.accentColor};
    }
    
    h3 {
      font-size:48px;
      font-weight:bold;
    }
    p {
      font-size:18px;
      margin-top:24px;
    }
  }
`
const Banner = () => {
  return (
    <BannerContainer>
      <div className="content_box">
        <div className="text">
          <h3>착한 공간,<br/>착한 가격</h3>
          <div className="accent top"></div>
          <div className="accent bottom"></div>
        </div>
        <p>영업이 끝난 동네 점포에서 저렴한 가격으로<br/>마음 편히 업무에 집중해보세요!<br/> 나에게 맞는 공간을 찾아볼까요?</p>
      </div>
      <img className="banner" src='/images/main.png' alt="banner"/>
    </BannerContainer>
  )
}

export default Banner;