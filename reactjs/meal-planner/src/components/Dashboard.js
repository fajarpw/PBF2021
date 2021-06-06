import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Footer from "./Footer";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Dashboard() {
  const classes = useStyles();

  const [mealData, setMealData] = useState(null);
  const [randomMData, setRandomMealData] = useState(null);
  const [calories, setCalories] = useState(0);
  const [query, setQuery] = useState("");

  function handleChangeCalorie(e) {
    setCalories(e.target.value);
  }

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  function getMealData() {
    fetch(
      //`https://api.spoonacular.com/mealplanner/generate/?apiKey=fdcbbbb7109049a89e0e44ac2778b54d&timeFrame=day&targetCalories=${calories}`
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=fdcbbbb7109049a89e0e44ac2778b54d&query=${query}&minCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("Error");
      });
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Diet The Real Thing
            </Typography>
            <hr></hr>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              A healthy diet is essential for good health and nutrition. It
              protects you against many chronic noncommunicable diseases, such
              as heart disease, diabetes and cancer.
            </Typography>
            <hr></hr>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs="6">
              <TextField
                id="standard-full-width"
                label="Search By Calorie"
                placeholder="eg: 2000"
                fullWidth
                margin="normal"
                type="number"
                onChange={handleChangeCalorie}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs="6">
              <TextField
                id="standard-full-width"
                label="Search By Recipe"
                placeholder="eg: Bluberry"
                fullWidth
                margin="normal"
                type="text"
                onChange={handleChangeQuery}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs="12">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={getMealData}
              >
                Get Meal
              </Button>
            </Grid>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Recipe
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
