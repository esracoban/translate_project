import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/actions/userActions';
import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage';
import './style.scss';


function App() {
  return (
    <>
      <MainPage/>
    </>
  )
}

export default App;
