import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./User.css";

const User = ({ user, handleClick }) => {
  const { profile } = user;
  const { firstName, lastName } = profile;
  return (
    <div id="custom">
      <Box
        onClick={() => handleClick(user)}
        sx={{
          mb: 1,
          display: "flex",
          alignItems: "center",
          py: 2,
          borderRadius: "15px",
          px: 3,
          gap: 4,
          backgroundColor: "lightgray",
        }}
      >
        <Box
          sx={{
            width: "10%",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
        </Box>
        <Box>
          {firstName && lastName ? (
            <Typography>
              {firstName} {lastName}
            </Typography>
          ) : (
            <Typography>Data Not Found</Typography>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default User;
