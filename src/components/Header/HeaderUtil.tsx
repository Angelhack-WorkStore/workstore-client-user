import React from 'react';
import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";
import {useSelector} from 'react-redux';
import mainLogo from '../../lib/mainLogo.png';
import Avatar from '@material-ui/core/Avatar';
import {RootState} from '../../store/modules';
import {Link} from 'react-router-dom';

const UtilContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  width:1200px;
  height:100%;
  margin:0 auto;
  h3 {
    font-size:33px;
    font-weight:bold;
    cursor:pointer;
  }
  .logo_box {
    position:relative;
    display:flex;
    align-items:center;
    width:164px;
    height:70px;
    a {
      position:absolute;
      display:flex;
      align-items:center;
      width:100%;
      height:100%;
      overflow:hidden;
    }
    .logo {
      position:absolute;
      display:block;
      width:100%;
    }
  }
`

const UtilRightBox = styled.div`
  display:flex;
  align-items:center;
  .profile_box {
    display:flex;
    align-items:center;
    span {
      margin-left:3px;
    }
  }
  .icon {
    font-size:20px;
    cursor:pointer;
  }
  .vertical_line {
    width:1px;
    height:24px;
    background:${({theme}) => theme.strokeColor}; 
  }
  span {
    margin-left:24px;
    font-size:15px;
    color:${({theme}) => theme.grayColor8};
    cursor:pointer;
  }
  span.auth_text {
    color:${({theme}) => theme.grayColor7};
  }
`
const HeaderUtil = () => {

  const {name, imageUrl} = useSelector((state:RootState) => state.authentication);

  return (
    <UtilContainer>
      <div className="logo_box">
        <Link to="/">
          <img className="logo" src={mainLogo} alt="LOGO"/>
        </Link>
      </div>
      <UtilRightBox>
        <BsSearch className="icon"/>
        <div>
          <span>문의사항</span>
          <a href='http://localhost:3000/'>
            <span>공간 등록하기</span>
          </a>
        </div>
        <span className="vertical_line"></span>
        {
          name ?
           <div className="profile_box"><Avatar src={imageUrl}></Avatar> <span>{name}</span></div>
          :
          <div>
            <Link to="/auth/login"><span className="auth_text">로그인</span></Link>
            <Link to="/auth/signup"><span className="auth_text">회원가입</span></Link>
          </div>
        }
      </UtilRightBox>
    </UtilContainer>

  )
}

export default HeaderUtil;