import Styled from "styled-components";

const StyledAnswer = Styled.li`
    width: 0.25em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    margin-right: 0.25em;
    background-color: green;
    listStyleType: none;
    display: inline;
    border-radius: 0.35em;
    pointer-events: auto;
    cursor: pointer;
    font-size: 1em;
`;

const StyledAnswerList = Styled.ul`
    margin-top: 0.2em;
    margin-bottom: 0.2em;
`;

const StyledWord = Styled.div`
    font-size: 1.25em;
`;

const Word = ({word, goToNextWord}) => {
    const blockClicking = () => {
        [...document.getElementsByTagName("li")].forEach(li => {
            li.style.pointerEvents = "none";
            li.style.cursor = "default";
        });
        setTimeout(() => {
            [...document.getElementsByTagName("li")].forEach(li => {
                li.style.pointerEvents = "auto";
                li.style.cursor = "pointer";
                li.style.color = "white";
            });
        }, 2500);
    };

    return (
        <>
            {word.guessed
                ? <StyledWord>{word.correct}</StyledWord>
                : <StyledWord>{word.gap}</StyledWord>
            }
            <StyledAnswerList>
                {
                    word.answers.map(answer => (
                        <StyledAnswer id={answer}
                                      key={answer}
                                      onClick={() => {
                                          blockClicking();
                                          goToNextWord(answer);
                                      }}
                        >{answer}</StyledAnswer>))
                }
            </StyledAnswerList>
        </>
    );
};

export default Word;
