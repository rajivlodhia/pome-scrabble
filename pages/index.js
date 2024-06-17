import { useState } from "react";
import Head from "next/head";
import scrabble from "@nosweat/scrabble"; //use scrabble.find(letters)
import { getWordScore } from "../utils/word-score";

/* 
TODO:
- rewrite parts of the JSX to sort words by wordscore (highest scoring at the top)
*/

export default function Index() {
  const [letters, setLetters] = useState("cyigjuw");
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>Pome scrabble</h1>
          <p>Cheat to win!</p>
          <input
            type="text"
            value={letters}
            maxLength={7}
            onChange={(e) => {
              setLetters(e.target.value);
            }}
          />
          <ul>
            {letters.length > 2 &&
              scrabble.find(letters).map((word, index) => {
                return (
                  <li key={index}>
                    {word} ({getWordScore(word)})
                  </li>
                );
              })}
          </ul>
        </main>
      </div>
    </div>
  );
}
