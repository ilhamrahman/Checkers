
import React, { Component } from 'react';
import './Home.css';
import red from './redpiece.png';
import black from './blackpiece.png';

var taken = false;

export default class MainActivity extends Component {
  
  number=1;

  goUp = (cur_id) => {
    this.number++;
      if(cur_id==3){
        document.getElementById("3").style.backgroundColor ="#00ff00";
        document.getElementById("4").style.backgroundColor ="#ff0000";
      }
      
      if(cur_id==4){
        document.getElementById("4").style.backgroundColor ="#00ff00";
        document.getElementById("5").style.backgroundColor ="#ff0000";
      }
      
      if(cur_id==6){
        document.getElementById("6").style.backgroundColor ="#00ff00";
        document.getElementById("7").style.backgroundColor ="#ff0000";
      }
      if(cur_id==8){
        document.getElementById("8").style.backgroundColor ="#00ff00";
        document.getElementById("9").style.backgroundColor ="#ff0000";
      }
      else{
        console.log("Invalid");
      }
      
    }
  
  goRight = (cur_id) => {
    this.number++;
    if(cur_id==1){
      document.getElementById("1").style.backgroundColor ="#00ff00";
      document.getElementById("2").style.backgroundColor ="#ff0000";
    }
    if(cur_id==2){
      document.getElementById("2").style.backgroundColor ="#00ff00";
      document.getElementById("3").style.backgroundColor ="#ff0000";
    }
    if(cur_id==5){
      document.getElementById("5").style.backgroundColor ="#00ff00";
      document.getElementById("6").style.backgroundColor ="#ff0000";
    }
    if(cur_id==7){
      document.getElementById("7").style.backgroundColor ="#00ff00";
      document.getElementById("8").style.backgroundColor ="#ff0000";
    }
    if(cur_id==9){
      document.getElementById("9").style.backgroundColor ="#00ff00";
      document.getElementById("10").style.backgroundColor ="#ff0000";
      alert("You win!");
    }
    else{
      console.log("Invalid");
    }
    
  }

render() {
  return (
    <body>
    <div className="App">
      <div className="pictures" >
      <h2 style={{ color: '#00ffff', fontSize: "50px"}}> <em> ILHAM'S CHECKERS </em> </h2>
    </div>

      <header className="pictures">
      <button><button id="a1" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="a2" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="a3" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="a4" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="a5" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="a6" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="a7" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="a8" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      </header>

      <header className="pictures">
      <button><button id="b1" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="b2" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="b3" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="b4" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="b5" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="b6" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="b7" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="b8" className="whiteblocks" alt="whiteblocks" /></button>
      </header>

      <header className="pictures">
      <button><button id="c1" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="c2" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="c3" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="c4" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="c5" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="c6" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="c7" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="c8" style={{backgroundImage: 'url(' + black + ')' }} className="greyblocks" alt="greyblocks" /></button>
      </header>

      <header className="pictures">
      <button><button id="d1" className="greyblocks" alt="greyblocks" /></button>
      <button><button id="d2" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="d3" className="greyblocks" alt="greyblocks" /></button>
      <button><button id="d4" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="d5" className="greyblocks" alt="greyblocks" /></button>
      <button><button id="d6" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="d7" className="greyblocks" alt="greyblocks" /></button>
      <button><button id="d8" className="whiteblocks" alt="whiteblocks" /></button>
      </header>

      <header className="pictures">
      <button><button id="e1" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="e2" className="greyblocks" alt="greyblocks" /></button>
      <button><button id="e3" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="e4" className="greyblocks" alt="greyblocks" /></button>
      <button><button id="e5" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="e6" className="greyblocks" alt="greyblocks" /></button>
      <button><button id="e7" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="e8" className="greyblocks" alt="greyblocks" /></button>
      </header>

      <header className="pictures">
      <button><button id="f1" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="f2" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="f3" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="f4" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="f5" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="f6" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="f7" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="f8" className="whiteblocks" alt="whiteblocks" /></button>
      </header>

      <header className="pictures">
      <button><button id="g1" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="g2" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="g3" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="g4" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="g5" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="g6" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="g7" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="g8" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      </header>

      <header className="pictures">
      <button><button id="h1" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="h2" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="h3" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="h4" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="h5" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="h6" className="whiteblocks" alt="whiteblocks" /></button>
      <button><button id="h7" style={{backgroundImage: 'url(' + red + ')' }} className="greyblocks" alt="greyblocks" /></button>
      <button><button id="h8" className="whiteblocks" alt="whiteblocks" /></button>
      </header>
     
       </div>

       </body>
  );
  
}



}
