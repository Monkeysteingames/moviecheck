import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import MovieCheckApi from './movieCheckApi';
import UserContext from './UserContext';
import jwt from "jsonwebtoken";
import localStorage from './hooks/localStorage';
import 'bootstrap/dist/css/bootstrap.min.css';


export const TOKEN_STORAGE_ID = "mc-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = localStorage(TOKEN_STORAGE_ID);

  // When we update our token, we want to get updated info of our current user
  useEffect(function fetchUserWhenMounted() {

  async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          MovieCheckApi.token = token;
          let currentUser = await MovieCheckApi.getUser(username);
          setCurrentUser(currentUser);
        } catch (e) {
          console.error(e);
          setCurrentUser(null);
        };
      };
    };
    getCurrentUser();
    }, [token]);

  // take form data from login form and authenticate user in DB and retrieve token
  // set the current user with our retrieved token if validated

  async function login(user) {
    try {
      const res = await MovieCheckApi.authenticate(user);
      setToken(res);
    } catch (e) {
      console.error(e);
    };
  };

  // clear toke and current user when we log out

  function logout() {
    setCurrentUser(null);
    setToken(null);
  };

  // take form data from sign up form and register new user

  async function signup(newUser) {
    try {
      const res = await MovieCheckApi.register(newUser);
      setToken(res);
    } catch (e) {
      console.error(e);
    };
  };

  // take form data from movie search bar to look up movie by direct name
  
  async function getMoviesByQuery(query) {
    try {
      const res = await MovieCheckApi.getMoviesByQuery(query);
      return res;
    } catch (e) {
      console.error(e);
    };
  };


  return (       
  <BrowserRouter>
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <div className='App'>
        <NavBar logout={logout} />
        <Routes login={login} signup={signup} getMoviesByQuery={getMoviesByQuery} />    
      </div>
    </UserContext.Provider>    
  </BrowserRouter>
  );
}

export default App;