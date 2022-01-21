import React from 'react';
//import { useTranslation } from 'react-i18next';

import '../App.css';
import { Note } from '../components/note/layout';
import { LeftMenu } from '../components/LeftMenu';

function Home() {
  //const {t} = useTranslation();

  return (
    <div>
      <LeftMenu />
      <div className="home">
        <div className="main">
          <div className="container">
            a
          </div>
        </div><div className="note-viewer">
          <div className="container">
            <Note />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
