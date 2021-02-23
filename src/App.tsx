import { access } from 'fs';
// import React from 'react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import Routes from '../Routes';
import { accessToken, setAcessToken } from './accessToken';
import { useMeQuery } from './generated/graphql';
import { Login } from './Login';
import { MyHome } from './MyHome';
import { Register } from './Register';
// import { Login } from './Login';
// import { Register } from './Register';


interface Props {

}

export const App: React.FC<Props> = () => {
  const [ready, setLoading] = useState(true);


  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: "POST",
      credentials: "include"
    })
    .then(async x => {
      const {accessToken} = await x.json();
      setAcessToken(accessToken);
      console.log(accessToken)
      setLoading(false);
    })
  },[])
  if (ready) {
    return <div>loading</div>
  } else if (!accessToken) {
    return (
      <>
      <BrowserRouter>
          <Redirect to='/register' />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login}/>
          </Switch>
      </BrowserRouter>
    </>
    )
  }
    return (
      <MyHome />
    );
}