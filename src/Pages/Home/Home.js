import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Home.css";
import Categories from "../../Data/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}> Quiz Settings</span>

        <div className="settings_select">
          {error && <ErrorMessage>Please fill all the fileds</ErrorMessage>}
          <TextField
            label="Enter your name"
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            select
            variant="outlined"
            label="Select Category"
            style={{ marginBottom: 25 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            variant="outlined"
            label="Select difficulty"
            style={{ marginBottom: 25 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="/quiz.svg" alt="quiz img" className="banner" />
    </div>
  );
};

export default Home;
