import React from 'react';
//import { useTranslation } from 'react-i18next';

import '../App.css';
import { Note } from '../components/note/layout';

function Home() {
  //const {t} = useTranslation();

  return (
    <div className="Home">
      <header className="App-header">
        <Note />
      </header>
    </div>
  );
}

export default Home;
