import React, {useState, useEffect} from "react";
import HangnamCanvas  from "./HangnamCanvas";
import './HangnamGame.css';

const words =["REACT","JS","DEVELOPER","HANGNAM","COMPONENT"];

const HangnamGame = () =>{
  const [word,setWord] = useState(" ");
  const [guessedLetters,setGuessedLetters] = useState([]);
  const [mistakes,setMistakes] = useState(0);
  
  useEffect(()=>{
    resetGame();
  },[]);

  const chooseRandomWord = () =>{
    const randomIndex = Math.floor(Math.random()*words.length);
    return words[randomIndex].toUpperCase();
  };

  const handleGuess = (letter)=>{
    if(!guessedLetters.includes(letter)){
      setGuessedLetters([...guessedLetters,letter]);
      if(!words.includes(letter)){
        setMistakes(mistakes+1);
      }
    }
  };

  const isGameWon =() =>{
    return word.split("").every((letter)=>guessedLetters.includes(letter));
  }

  const isGameLost = () =>{
    return mistakes >=6;
  }

  const resetGame = () =>{
    setWord(chooseRandomWord());
    setGuessedLetters([]);
    setMistakes(0);
  }

  return(
    <div className="hangnam-container">
      <h1>Hangnam Game</h1>
      <h5>Hangman is a word-guessing game. Start a new game, guess letters
                to reveal the word, and avoid drawing the hangman by making
                incorrect guesses. Win by guessing the word before the hangman
                is complete. Have fun!</h5>
      <HangnamCanvas  mistakes={mistakes}/>
      <div className="word-display">
        {
          word.split("").map((letter,index)=>{
            <span key={index} className="letter">
              {guessedLetters.includes(letter)? letter: "_"}
            </span>
          })
        }
      </div>

        <div className="keyboard">
          {Array.from(Array(26)).map((_,index)=>(
            <button 
            key={index} onClick={
              ()=> handleGuess(String.fromCharCode(65+index))}
            disabled={guessedLetters.includes(String.fromCharCode(65+index))}
            >
              {String.fromCharCode(65+index)}
            </button>
          ))}
        </div>


        {isGameWon() && <p className="result_message">You won!</p>}
        {isGameLost() && (<p className="result_message">You lost! The word : {word}</p>)}
        <button className="new-game-button" onClick={resetGame}>New game</button>
    </div>

  );
};

export default HangnamGame;
