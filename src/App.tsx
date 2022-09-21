import React, { JSXElementConstructor } from 'react';
import './App.scss';
import { AppHeader } from './Components/AppHeader/AppHeader';
import { Router } from './Router';


export const App: JSXElementConstructor<any> = () => {
  return (
    <>
      <AppHeader />
      <Router />
    </>
  );
};

