import React from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../logo.svg';
import '../App.css';
import WriteText from "../components/WriteText";

function Home() {
  const {t} = useTranslation();

  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code><WriteText text={t('title')}></WriteText></code>
          <div className="test"></div>
        </p>
      </header>
    </div>
  );
}

export default Home;
