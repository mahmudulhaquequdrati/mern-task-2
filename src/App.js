import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import Home from "./components/home/Home";
import "./App.css";
import { CircularProgress } from "@mui/material";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [singleData, setsingleData] = useState({});
  const handleClick = (user) => {
    setsingleData(user);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 12,
          }}
          className=""
        >
          <CircularProgress color="success"> </CircularProgress>
        </Box>
      ) : (
        <Box
          sx={{
            mt: 12,
          }}
        >
          <Home
            users={users}
            handleClick={handleClick}
            setsingleData={setsingleData}
            singleData={singleData}
          />
        </Box>
      )}
    </div>
  );
}

export default App;
