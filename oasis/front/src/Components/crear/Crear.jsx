import React, { useState } from "react";
import Axios from "axios";
import { Button, Grid } from "@mui/material";

const Crear = () => {
  const [name, setName] = useState("");
  const [seniority, setSeniority] = useState("");
  const [mainStack, setMainStack] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [rate, setRate] = useState('');
  const [english, setEnglish] = useState('');
  const [remote, setRemote] = useState("");

  //call mongoose api to create user with name, seniority, main stack, skills, location, rate, english and remote
  const createUser = () => {
    Axios.post("/users/register", {
      name: name,
      seniority: seniority,
      mainStack: mainStack,
      skills: skills,
      location: location,
      rate: rate,
      english: english,
      remote: remote,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(name)
  return (
    <>
      <Grid >
        <Grid item xs={12} >
          <h1>Crear</h1>
          <div style={{display: 'flex', flexDirection: 'column'}}> 
        <label>NOMBRE</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <label>Seniority</label>
          <input
            type="text"
            name="seniority"
            value={seniority}
            onChange={(e) => setSeniority(e.target.value)}
            />
            <label>Main Stack</label>
          <input
            type="text"
            name="mainStack"
            value={mainStack}
            onChange={(e) => setMainStack(e.target.value)}
          />
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            />
            <label>Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
            <label>Rate</label>
          <input
            type="text"
            name="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            />
            <label>English</label>
          <input
            type="text"
            name="english"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            />
            <label>Remote</label>
          <input
            type="text"
            name="remote"
            value={remote}
            onChange={(e) => setRemote(e.target.value)}
            />

            </div>
          <Button onClick={createUser}>Crear </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Crear;
