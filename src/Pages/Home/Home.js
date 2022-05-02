import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import "./Home.css";
import Categories from "../../Data/Categories";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}> Quiz Settings</span>

        <div className="settings_select">
          <TextField
            label="Enter your name"
            variant="outlined"
            style={{ marginBottom: 25 }}
          />
          <TextField
            select
            variant="outlined"
            label="Select Category"
            style={{ marginBottom: 25 }}
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

          <Button variant="contained" color="primary" size="large">
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="/quiz.svg" alt="quiz img" className="banner" />
    </div>
  );
};

export default Home;
