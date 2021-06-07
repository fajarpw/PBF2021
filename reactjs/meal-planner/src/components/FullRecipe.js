import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import app from "../firebase";
import firebase from "firebase";

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
    marginTop: 50,
    marginBottom: 100,
  },
  media: {
    height: 250,
  },
});
export default function FullRecipe(recipeID) {
  const classes = useStyles();
  const id = useParams();
  const [detailMealData, setDetailMealData] = useState([]);
  const [recipeFavourite, setRecipeFavourite] = useState([]);

  let fid, ftitle, fimage, furl, fsummary;

  function getFullRecipeInfo({ recipeID }) {
    const url = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=79d97ba478aa49179f66679cec14d16d&includeNutrition=false`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDetailMealData(data);
        console.log(data);
        console.log(url);
      })
      .catch(() => {
        console.log("Error");
      });
  }
  useEffect(() => {
    getFullRecipeInfo(id);
  }, []);

  const addToFavourite = () => {
    const recipeRef = app.database().ref("test");
    recipeRef.push(detailMealData);
  };

  return (
    <Container disableGutters>
      <Header />
      <Grid container spacing={2} justify="center">
        {detailMealData &&
          Object.keys(detailMealData).map((item, i = 1) => (
            <>
              <Grid item key={detailMealData["id"]}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={detailMealData["image"]}
                    title="Image Title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {detailMealData["title"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {detailMealData["summary"]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={addToFavourite}
                    >
                      Add to Favourite
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => {
                        window.open(
                          detailMealData["spoonacularSourceUrl"],
                          "_blank"
                        );
                      }}
                    >
                      Full Recipe
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ))}
      </Grid>
      <Footer />
    </Container>
  );
}
