import React from 'react';
import { KeyProp } from '../../interfaces';
import '../App/app.scss';
import Key from '../Key/Key';

let keySound: KeyProp ={
  sound: "C4",
  soundLength: "8n",
};

function App() {

  return (
    <div className="app">
      <div className='keyBoard'>
        <Key 
          sound={keySound.sound} 
          soundLength={keySound.soundLength}
        />
        <Key 
          sound={"D4"} 
          soundLength={keySound.soundLength}
        />
        <Key 
          sound={"E4"} 
          soundLength={keySound.soundLength}
        />
        <Key 
          sound={"F4"} 
          soundLength={keySound.soundLength}
        />
        <Key 
          sound={"G4"} 
          soundLength={keySound.soundLength}
        />
        <Key 
          sound={"A4"} 
          soundLength={keySound.soundLength}
        />
        <Key 
          sound={"B4"} 
          soundLength={keySound.soundLength}
        />
        <Key 
          sound={"C5"} 
          soundLength={keySound.soundLength}
        />
      </div>
    </div>
  );
}

export default App;
