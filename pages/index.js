import { useState } from "react";
import scrabble from "@nosweat/scrabble"; //use scrabble.find(letters)
import { getWordScore } from "../utils/word-score";
import Word from "../components/word";
import { Nanum_Pen_Script } from '@next/font/google'

/* 
- rewrite parts of the JSX to sort words by wordscore (highest scoring at the top)
*/

const nanumPenScript = Nanum_Pen_Script({subsets: 'latin', weight: '400'})

export default function Index() {
  const [letters, setLetters] = useState("cyigjuw");

  // Scrabble.find returns an array of words that can be made with the given letters.
  // We sort the array by the word score.
  let foundWords = [];
  if (letters.length >= 2) {
    foundWords = scrabble.find(letters).sort((a, b) => getWordScore(b) - getWordScore(a));
  }

  return (
    <div className="pb-24">
      {/* Hero section */}
      <section className="mx-auto text-center bg-[#F2F7FF] pt-12 pb-10">
        <h1 className="font-extrabold text-[#18191F] text-[72px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0)] text-shadow-pome">Pome Scrabble</h1>
        <p className={nanumPenScript.className + " text-[55px] text-[#8C30F5] text-shadow-pome"}>cheat to win!</p>
        <input
          className="w-full max-w-lg text-[29px] rounded-full border mt-10 py-3 px-8 border-gray-300 shadow-[rgba(50,50,93,0.25)_0px_0px_3px_-3px,_rgba(0,0,0,0.3)_0px_5px_3px_-3px]"
          type="text"
          value={letters}
          maxLength={7}
          onChange={(e) => {
            setLetters(e.target.value);
          }}
        />
        {foundWords.length > 0 && (
          <div className="pt-20 mx-auto sm:w-fit">
            <p className="mb-5 text-2xl text-shadow-pome">Top hit</p>
            {/* Get the first word of the arary as the "Top hit" */}
            <Word word={foundWords[0]} />
          </div>
        )}
      </section>

      {/* Other words section */}
      <section className="max-w-6xl mx-auto mt-12">
        {foundWords.length > 1 ? (
          <>
            <p className="text-center mb-10 text-[23px]">Other words...</p>
            <div className="grid sm:grid-cols-2 gap-12">
                {/* Render the rest of the words. Using Slice to remove the first element before mapping. */}
                {foundWords.slice(1).map((word, index) => {
                  return (
                    <span key={index} className="bg-[#F3F2FF] rounded-[21px] px-8 py-6 space-y-4">
                      <p className="font-bold text-xl uppercase">{word}</p>
                      <Word key={index} word={word} size='small' />
                    </span>
                  );
                })}
            </div>
          </>
        ) : (foundWords.length == 1 ? (
          // If only one word is found, display an appropriate message
          <p className="text-center mt-10 text-2xl">No other words...</p>
        ) : (
          // If no words are found, display an appropriate message
          <p className="text-center mt-10 text-2xl">No words found :(</p>
        ))}
      </section>
        
    </div>
  );
}
