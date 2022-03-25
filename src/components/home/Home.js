import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import User from "../user/User";
const Home = ({ users, singleData, handleClick }) => {
  const { id, profile, avatar, Bio, jobTitle } = singleData;
  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: 8,
        textAlign: "center",
      }}
    >
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box
          sx={{ bgcolor: "lightblue", width: "60%", p: 2, mx: "auto", mb: 2 }}
        >
          <Typography
            sx={{
              fontSize: "18px",
            }}
          >
            USERS LISTS!
          </Typography>
        </Box>
        {users.map((user) => (
          <User handleClick={handleClick} key={user.id} user={user}></User>
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{
          mt: 8,
        }}
      >
        {id && (
          <Box
            sx={{
              textAlign: "left",
              px: 10,
              mx: 6,
              boxShadow: "0px 0px 5px lightgray",
              borderRadius: "15px",
              pt: 2,
              pb: 4,
            }}
          >
            <Box
              sx={{
                bgcolor: "lightblue",
                width: "50%",
                p: 2,
                mx: "auto",
                mb: 2,
                borderRadius: "15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                }}
              >
                USERS DETAILS!
              </Typography>
            </Box>

            {avatar ? (
              <Box
                sx={{
                  width: "30%",
                  mx: "auto",
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
            ) : (
              <Typography>Data not Found</Typography>
            )}
            {profile ? (
              <Typography
                sx={{
                  textAlign: "center",
                }}
              >
                @{profile?.username}
              </Typography>
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                }}
              >
                Data Not Found
              </Typography>
            )}
            {Bio ? (
              <Typography
                sx={{
                  mt: 1,
                  bgcolor: "lightgrey",
                  // mx: 10,
                  px: 2,
                  textAlign: "left",
                  border: "1px solid gray",
                  fontSize: "14px",
                }}
              >
                {Bio}
              </Typography>
            ) : (
              <Typography
                sx={{
                  mt: 1,
                  bgcolor: "lightgrey",
                  // mx: 10,
                  px: 2,
                  textAlign: "left",
                  border: "1px solid gray",
                  fontSize: "14px",
                }}
              >
                Data Not Found
              </Typography>
            )}

            {profile ? (
              <Box>
                <Typography
                  sx={{
                    mt: 3,
                    fontSize: "15px",
                  }}
                >
                  Full Name
                </Typography>
                <Typography
                  sx={{
                    // fontWeight: "700",
                    fontSize: "14px",
                    border: "1px solid gray",
                    bgcolor: "lightgrey",
                    p: 0.5,
                    // mb: 2,
                    // mt: 1,
                  }}
                >
                  Name : {profile?.firstName} {profile?.lastName}
                </Typography>
              </Box>
            ) : (
              <Typography
                sx={{
                  mt: 3,
                  fontSize: "15px",
                }}
              >
                Data Not Found
              </Typography>
            )}
            {jobTitle ? (
              <Box>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: "15px",
                  }}
                >
                  Job Title
                </Typography>
                <Typography
                  sx={{
                    // fontWeight: "700",
                    fontSize: "14px",
                    border: "1px solid gray",
                    bgcolor: "lightgrey",
                    mb: 2,
                    p: 0.5,
                    // mt: 1,
                  }}
                >
                  {jobTitle}
                </Typography>
              </Box>
            ) : (
              <Typography
                sx={{
                  mt: 3,
                  fontSize: "15px",
                }}
              >
                Data Not Found
              </Typography>
            )}
            {profile ? (
              <Box>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: "15px",
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    // fontWeight: "700",
                    fontSize: "14px",
                    border: "1px solid gray",
                    bgcolor: "#DBDBDB",
                    p: 0.5,
                    mb: 2,
                    // mt: 1,
                  }}
                >
                  {profile?.email}
                </Typography>
              </Box>
            ) : (
              <Typography
                sx={{
                  mt: 3,
                  fontSize: "15px",
                }}
              >
                Data Not Found
              </Typography>
            )}
            {/* {jobTitle && <input type="text" defaultValue={jobTitle} />} */}
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
