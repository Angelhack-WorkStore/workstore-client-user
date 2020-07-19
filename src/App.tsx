import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, useLocation ,Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {globalTheme} from './styles/GlobalTheme';
import Header from './containers/Header/HeaderContainer';
import {MainPage,LoginPage,OAuth2RedirectPage,SignupPage,StoreModalPage,ReservationPage} from './pages';
import {getCurrentUserAPI} from './store/apis/auth';
import {getCurrentUser} from './store/modules/authentication';
import {getRegistDataThunk} from './store/modules/registration';
import {RootState} from './store/modules'
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUserAPI()
    .then((res) => {
      const {email, nickname, imageUrl} = res;
      dispatch(getCurrentUser(email,nickname, imageUrl));
    })
    .catch((err:Error) => {
      console.log(err);
      localStorage.removeItem('accessToken');
    })

    dispatch(getRegistDataThunk());
  },[])

  return (
    <div className="App">
      <ThemeProvider theme={globalTheme}>
        <Router>
          <AppSwitch/>
        </Router>
      </ThemeProvider>
    </div>
  );
}

function AppSwitch() {
  const {name} = useSelector((state:RootState) => state.authentication);
  const location = useLocation();
  const background = (location as any).state && (location as any).state.background;
  
  return (
    <>
      <Header/>
      <Switch location={background || location}>
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/auth/login" component={LoginPage}>
          {name ? <Redirect to="/"/> : null}
        </Route>
        <Route path="/auth/signup" component={SignupPage}>
          {name ? <Redirect to="/"/> : null}
        </Route>
        <Route path="/oauth2/redirect" component={OAuth2RedirectPage}></Route>
        <Route path="/reservation/:id" component={ReservationPage}/>
      </Switch>
      {background && <Route path="/store/:id" component={StoreModalPage}/> }
    </>
  )
}

export default App;
