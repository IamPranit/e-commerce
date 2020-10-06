import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  goldenColor: {
    color: "#FFD700",
  },
}));

const divStyle = {
  paddingTop: "10px",
};

const Rating = ({ rating }) => {
  const classes = useStyles();

  return (
    <div style={divStyle}>
      <span>
        {rating >= 1 ? (
          <StarIcon className={classes.goldenColor} />
        ) : rating >= 0.5 ? (
          <StarHalfIcon className={classes.goldenColor} />
        ) : (
          <StarBorderIcon className={classes.goldenColor} />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <StarIcon className={classes.goldenColor} />
        ) : rating >= 1.5 ? (
          <StarHalfIcon className={classes.goldenColor} />
        ) : (
          <StarBorderIcon className={classes.goldenColor} />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <StarIcon className={classes.goldenColor} />
        ) : rating >= 2.5 ? (
          <StarHalfIcon className={classes.goldenColor} />
        ) : (
          <StarBorderIcon className={classes.goldenColor} />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <StarIcon className={classes.goldenColor} />
        ) : rating >= 3.5 ? (
          <StarHalfIcon className={classes.goldenColor} />
        ) : (
          <StarBorderIcon className={classes.goldenColor} />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <StarIcon className={classes.goldenColor} />
        ) : rating >= 4.5 ? (
          <StarHalfIcon className={classes.goldenColor} />
        ) : (
          <StarBorderIcon className={classes.goldenColor} />
        )}
      </span>
    </div>
  );
};

export default Rating;
