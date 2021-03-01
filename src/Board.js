import Word from "./Word";
import {useState} from "react";
import Styled from "styled-components";

const StyledScore = Styled.div`
    font-size: 0.3em;
`;

const StyledMsg = Styled.div`
    font-size: 0.75em;
`;

const Board = ({words}) => {
        let [currentCount, setCurrentCount] = useState(0);
        let [msg, setMsg] = useState(<StyledMsg>Zgadnij &#128512;</StyledMsg>);
        let [word, setWord] = useState({...words[0], guessed: false});
        let [score, setScore] = useState(0);
        let [wrong, setWrong] = useState(0);

        const goToNextWord = (answer) => {
            if (word.gap.slice().replace("_", answer) === word.correct) {
                document.getElementById(answer).style.color = "yellow";
                setWord({...word, guessed: true});
                setScore(++score);
                setMsg(<StyledMsg>Dobrze &#128077;</StyledMsg>)
            } else {
                let correctAns = word.answers.filter(ans => word.gap.slice().replace("_", ans) === word.correct);
                document.getElementById(answer).style.color = "red";
                document.getElementById(correctAns).style.color = "yellow";
                setWrong(++wrong);
                setMsg(<StyledMsg>Ups &#128579;</StyledMsg>)
            }

            setTimeout(() => {
                setMsg(<StyledMsg>Zgadnij &#128512;</StyledMsg>);

                if (currentCount < words.length - 1) {
                    setWord({...words[currentCount + 1], guessed: false});
                    setCurrentCount(++currentCount);
                } else {
                    setWord({...words[0], guessed: false});
                    setCurrentCount(0);
                    setScore(0);
                    setWrong(0);
                }

            }, 2500);
        };

        return (
            <>
                {<Word word={word} goToNextWord={goToNextWord}/>}
                {words.length - score - wrong !== 0
                    ? <StyledScore>Wynik: {score}/{words.length} (pozostało: {words.length - score - wrong})</StyledScore>
                    : <StyledScore>Wynik końcowy: {score}/{words.length}</StyledScore>
                }
                {msg}
            </>
        );
    }
;

export default Board;
