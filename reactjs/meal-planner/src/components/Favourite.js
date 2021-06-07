import React, { useState, useEffect } from "react";
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
import Header from "./Header";
import Footer from "./Footer";
import app from "../firebase";
import firebase from "firebase";

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

export default function Favourite() {
  const classes = useStyles();
  const [mealData, setMealData] = useState();
  const [key, setKey] = useState();

  useEffect(() => {
    const recipeRef = firebase.database().ref("test");
    recipeRef.on("value", (snapshot) => {
      const recipes = snapshot.val();
      const recipeList = [];
      for (let id in recipes) {
        recipeList.push({ id, ...recipes[id] });
      }
      console.log(recipeList);
      setMealData(recipeList);
    });
  }, []);

  const handleDeleteFavourite = (id) => {
    const recipeRef = firebase.database().ref("test").child(id);
    recipeRef.remove();
  };
  return (
    //Return Something
    <Container disableGutters>
      <CssBaseline />
      <Header />
      <div className={classes.heroContent}>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Here Are Your Favourite Recipe
        </Typography>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {mealData ? (
            <>
              {mealData &&
                mealData.map((recipe) => (
                  <Grid item key={recipe.fid} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={recipe.fimage}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {recipe.ftitle}
                        </Typography>
                        {recipe.fsummary}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => {
                            handleDeleteFavourite(recipe.id);
                          }}
                        >
                          Delete
                        </Button>
                        <Button size="small" color="primary" href={recipe.furl}>
                          Full Recipe
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
            </>
          ) : (
            <>
              <Grid item xs="12">
                <h6 style={{ textAlign: "center" }}>No recipe found.</h6>
                <p style={{ textAlign: "center" }}>
                  You can start adding by recipe by adding it from recipe
                  details
                </p>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
      <Grid container spacing={4}></Grid>
      <Footer />
    </Container>
  );
}
