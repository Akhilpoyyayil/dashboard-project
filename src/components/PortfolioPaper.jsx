import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  paper2: {
    padding: theme.spacing(1, 2, 1, 2),
    alignItems: "center",
    background: "#423a6f",
    borderRadius: "15px",
    marginBottom: "15px",
    color: "#ffffff",
  },
  portfolio: {
    padding: theme.spacing(0, 0, 0, 6),
  },
  balance: {
    fontSize: "14px",
    margin: theme.spacing(0, 0, 0, 0),
  },
  totalBalanceText: {
    margin: theme.spacing(0, 0, 4, 0),
  },
  imageIcons: {
    width: "25px",
    height: "25px",
  },
  criptoName: {
    marginLeft: theme.spacing(2),
    flexGrow: "1!important",
  },
  paperUl: {
    paddingLeft: 0,
    listStyle: "none",
  },
  paperLi: {
    display: "flex!important",
    alignItems: "center",
  },
  usd: {
    fontSize: "10px",
    color: "#8c87c2",
  },
}));
const PortfolioPaper = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper2}>
      <ul className={classes.paperUl}>
        <li className={classes.paperLi}>
          <img src={props.image} className={classes.imageIcons} />
          <div className={classes.criptoName}>
            <span>{props.title}</span>
          </div>
          <div>
            <p className={classes.balance}>{props.value}</p>
            <span className={classes.usd}>{props.usd}</span>
          </div>
        </li>
      </ul>
    </Paper>
  );
};
export default PortfolioPaper;
