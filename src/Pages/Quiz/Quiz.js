import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";

const Quiz = ({ name, score, questions, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);
  console.log(questions);

  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome,{name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues]?.category}</span>
            <span>Score: {score}</span>
          </div>

          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            score={score}
            setScore={setScore}
            options={options}
            correct={questions[currQues]?.correct_answer}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          size={150}
          thickness={1}
          color="inherit"
        />
      )}
    </div>
  );
};

export default Quiz;
