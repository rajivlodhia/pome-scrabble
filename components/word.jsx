import Letter from "./letter";
import { getLetterScore } from "../utils/word-score";

const Word = ({ word, size = '' }) => {
    // Split the word into an array of letters
    const letters = word.split("")
    const letterScores = letters.map((letter) => getLetterScore(letter))

    return (
        <div className="">
            <ul className="space-x-6 flex flex-row">
                {letters.map((letter, index) => {
                    return (
                        <Letter key={index} letter={letter} score={letterScores[index]} size={size} />
                    )
                })}
            </ul>

            {/* Addition of the scores */}
            <div className="flex flex-row justify-start mt-8 tracking-widest text-[32px] text-shadow-pome">
                =
                {letterScores.map((score, index) => {
                    return (
                        <>
                            <p key={index}>{score}</p>
                            {index !== letterScores.length - 1 && <p>+</p>}
                        </>
                    )
                })}
            </div>

            {/* Score result */}
            <p className="text-left text-[38px] text-shadow-pome">= <span className="text-[#8C30F5] font-bold">{letterScores.reduce((a, b) => a + b, 0)}</span></p>
        </div>
    )
}

export default Word;
