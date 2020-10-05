import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
});

const ProductCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch();

  const {
    name,
    image,
    productId,
    maker,
    price,
    rating,
    category,
    description,
    inStock,
  } = props;

  const handleClick = (e) => {
    history.push(`${match.url}/${productId}`);
  };
  return (
    <Card className={classes.root} xs={12}>
      <CardActionArea onClick={() => handleClick(productId)}>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography component="p">{name}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add
        </Button>
        <Button size="small" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
