import React, { useEffect, useState } from "react";
import { Typography, TextField, Box, FormControl, Button } from "@mui/material";

export const FormComponent = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();

    let isValid = true;

    if (Name === "") {
      setNameErr(true);
      isValid = false;
    } else {
      setNameErr(false);
    }

    if (Email === "") {
      setEmailErr(true);
      isValid = false;
    }

    if (Age === "") {
      setAgeErr(true);
      isValid = false;
    } else if (isNaN(Age)) {
      setAgeErr(true);
      isValid = false;
    } else {
      setAgeErr(false);
    }

    if (isValid) {
      alert("Registered successfully!");
      setName("");
      setEmail("");
      setAge("");
    }

    console.log(Name, Email, Age);
  };

  useEffect(() => {
    if (Name !== "") {
      setNameErr(false);
    }
    if (Email !== "") {
      setEmailErr(false);
    }
    if (Age !== "") {
      setAgeErr(false);
    }
  }, [Name, Email, Age]);

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "0 auto",
        padding: 4,
        borderRadius: 2,
        backgroundColor: "yellow",
        color: "#333",
        border: "1px solid #ccc",
        boxShadow: "0 4px 10px rgba(0, 0, 0,0.4)",
      }}
    >
      <Typography variant="h4" gutterBottom align="center" color="primary">
        User Details
      </Typography>
      <form onSubmit={formHandler}>
        <FormControl fullWidth margin="normal">
          <TextField
            value={Name}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {nameErr && (
            <Typography
              sx={{ color: "red", textAlign: "center", marginTop: 2 }}
              variant="body1"
              gutterBottom
              align="center"
            >
              Name is required!
            </Typography>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            placeholder="Enter your email"
          />
          {emailErr && (
            <Typography
              sx={{ color: "red", textAlign: "center" }}
              variant="body1"
              gutterBottom
              align="center"
            >
              Email is required and must be valid!
            </Typography>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            value={Age}
            onChange={(e) => setAge(e.target.value)}
            id="outlined-basic"
            label="Age"
            variant="outlined"
          />
          {ageErr && (
            <Typography
              sx={{ color: "red", textAlign: "center" }}
              variant="body1"
              gutterBottom
              align="center"
            >
              Age must be a number and is required!
            </Typography>
          )}
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{
            marginTop: 2,
            padding: "10px 0",
            fontSize: "1rem",
            textTransform: "none",
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};
