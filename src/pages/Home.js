import { Box, Typography } from "@mui/material";
import React from "react";
import { Header } from "../components";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const [auth, , user] = useAuth();

  return (
    <div className="home-page">
      <Header activePage="Home" />
      <Box className="text-center mt-10">
        <Typography className="font-bold " variant="h3">
          Welcome to my simple App
        </Typography>
        <p className="mt-4 text-xl">
          {auth && user
            ? `You are logged in as ${user.employeeName}`
            : "You are not authorized"}
        </p>
      </Box>
    </div>
  );
}
