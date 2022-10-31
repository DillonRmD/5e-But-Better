import { Grid } from "@mui/material";
import "./App.css"

const App = () => {

  let player = {
    "Name": "Arthak",
    "Lvl": 5,
    Spells: [
      "Acid Arrow",
      "Moonbeam",
    ],
    Skills: {
      "Strength": [14, 2],
      "Dexterity": [13, 1],
      "Constitution": [13, 1],
      "Intelligence": [12, 1],
      "Wisdom": [14, 2],
      "Charisma": [10, 0]
    }
  };



  return (
    <Grid container direction="row" style={{ width: "50%" }} className={"border"}>
      <Grid container direction="row" className={"border"}>
        <Grid item xs={6} className={"border"}>
          <h2>Character Name: {player.Name}</h2>
        </Grid>
        <Grid item xs={6} className={"border"}>
          <h2>Character Level: {player.Lvl}</h2>
        </Grid>
      </Grid>

      <Grid container className={"border"}>
        <Grid container className={"border"}>
          <Grid item className={"border"}>
            {Object.keys(player.Skills).map((key, index) => (
              <h2>{key} with {player.Skills[key][0]} + {player.Skills[key][1]}</h2>
            ))} 
          </Grid>
        </Grid>
        <Grid container className={"border"}>
        </Grid>
        <Grid container className={"border"}>
        </Grid>
        <Grid container className={"border"}>
        </Grid>
      </Grid>

    </Grid>

  );
}

export default App;
