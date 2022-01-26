import React from 'react';
//import { useTranslation } from 'react-i18next';

import '../App.css';
import { NewNote } from '../components/note/NewNote';
import { LeftMenu } from '../components/LeftMenu';
// eslint-disable-next-line
import { NoteList } from './../components/NoteList';
import { Board } from '../components/boardDnd/layout';

function Home() {
  //const {t} = useTranslation();

  return (
    <div>
      <LeftMenu />
      <div className="home">
        <div className="main">
          <div className="container">
            <Board />
          </div>
        </div><div className="note-viewer">
          <div className="container">
            <NewNote />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
