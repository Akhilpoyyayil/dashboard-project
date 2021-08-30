import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  paper3: {
    padding: theme.spacing(1, 2, 1, 2),
    alignItems: "center",
    background: "#423a6f",
    borderRadius: "15px",
    marginBottom: "15px",
    color: "#ffffff",
    textAlign: "center",
  },
  cripto: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  title: {
    fontSize: "16px",
    margin: theme.spacing(2, 0, 0, 0),
    color: "#8c87c2",
  },
}));
const ChartStatusPaper = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper className={classes.paper3}>
        <p className={classes.title}>{props.title}</p>
        <h5 className={classes.cripto}>{props.cripto}</h5>
      </Paper>
    </Grid>
  );
};
export default ChartStatusPaper;
