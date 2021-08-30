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
  },
  cripto: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  title: {
    fontSize: "16px",
    margin: theme.spacing(2, 0, 0, 0),
    color: "#8c87c2",
  },
  imageIcons: {
    width: "20px",
    height: "20px",
  },
  criptoName: {
    marginLeft: theme.spacing(1),
    flexGrow: "1!important",
  },
  criptoNameText: {
    color: "#8c87c2",
    fontSize: "15px",
  },
  paperUl: {
    paddingLeft: 0,
    listStyle: "none",
  },
  paperLi: {
    display: "flex!important",
    alignItems: "center",
  },
  percent: {
    marginLeft: "20px",
    fontSize: "12px",
  },
}));
const FollowPaper = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={6} lg={12}>
      <Paper className={classes.paper3}>
        <ul className={classes.paperUl}>
          <li className={classes.paperLi}>
            <img src={props.image} className={classes.imageIcons} />
            <div className={classes.criptoName}>
              <span className={classes.criptoNameText}>{props.title}</span>
            </div>
          </li>
        </ul>
        <h5 className={classes.cripto}>
          {props.cripto}
          <span className={classes.percent}>{props.percent}</span>
        </h5>
      </Paper>
    </Grid>
  );
};
export default FollowPaper;
