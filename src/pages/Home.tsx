import React from 'react';
import { useTranslation } from 'react-i18next';

import '../App.css';
import WriteText from "../components/WriteText";

function Home() {
  const {t} = useTranslation();

  return (
    <div className="Home">
      <header className="App-header">
        <p>
          <code><WriteText text={t('title')}></WriteText></code>
        </p>
      </header>
    </div>
  );
}

export default Home;
