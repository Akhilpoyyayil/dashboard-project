import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dashboardDataLoading } from "./redux/action";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { indigo } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import bitcoin from "../../images/bitcoin.png";
import PortfolioPaper from "../../components/PortfolioPaper";
import DashboardChart from "../../components/DashboardChart";
import ChartStatusPaper from "../../components/ChartStatusPaper";
import FollowPaper from "../../components/FollowPaper";

const useStyles = makeStyles((theme) => ({
  greeting: {
    padding: theme.spacing(2, 0, 0, 0),
    margin: theme.spacing(4, 0, 0, 0),
  },
  welcomMsg: {
    color: "#7b6fff",
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 6, 0, 6),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: "18px",
    alignItems: "center",
    background: "#423a6f",
    borderRadius: "15px",
    marginBottom: "15px",
  },
  control: {
    padding: theme.spacing(2),
  },
  cardHeading: {
    padding: theme.spacing(0, 0, 0, 2),
    marginBottom: "0px",
  },
  cardSubHeading: {
    padding: theme.spacing(0, 0, 0, 2),
    fontSize: "12px",
    marginBottom: "0px",
    marginTop: "0px",
    color: "#42b154",
  },
  totalBalanceDiv: {
    textAlign: "center",
  },
  totalBalance: {
    margin: theme.spacing(4, 0, 0, 0),
  },
  totalBalanceText: {
    margin: theme.spacing(0, 0, 4, 0),
  },
  follows: {
    margin: theme.spacing(2, 0, 0, 0),
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const fetchUserData = useSelector((state) => state.dashboardReducer.userData);
  console.log("fetchUserData: ", fetchUserData);
  useEffect(() => {
    dispatch(dashboardDataLoading());
  }, []);
  useEffect(() => {
    if (fetchUserData) {
      setUserData(fetchUserData);
      console.log("fetchUserData: ", fetchUserData);
    }
  }, [fetchUserData]);
  const portfolio = [
    { title: "Bitcoin", value: "0.097876 BTC", usd: "0.125 USD" },
    { title: "Litecoin", value: "0.097876 LTC", usd: "0.125 USD" },
    { title: "Ripple", value: "0.097876 XRP", usd: "0.125 USD" },
    { title: "Dosh", value: "0.097876 XRP", usd: "0.125 USD" },
  ];
  const chartStatus = [
    { title: "24Hr Volume", cripto: "$1236548.325" },
    { title: "Market Cap", cripto: "19B USD" },
    { title: "24Hr Volume", cripto: "$1236548.325" },
    { title: "Market Cap", cripto: "19B USD" },
    { title: "24Hr Volume", cripto: "$1236548.325" },
    { title: "Market Cap", cripto: "19B USD" },
    { title: "24Hr Volume", cripto: "$1236548.325" },
    { title: "Market Cap", cripto: "19B USD" },
  ];
  const follows = [
    {
      title: "Bitcoin",
      value: "0.097876 BTC",
      cripto: "USD 1254.36",
      percent: "0.6%",
    },
    {
      title: "Litecoin",
      value: "0.097876 LTC",
      cripto: "USD 1254.36",
      percent: "0.6%",
    },
    {
      title: "Ripple",
      value: "0.097876 XRP",
      cripto: "USD 1254.36",
      percent: "0.6%",
    },
    {
      title: "Dosh",
      value: "0.097876 XRP",
      cripto: "USD 1254.36",
      percent: "0.6%",
    },
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h5 className={classes.greeting}>
            <span className={classes.welcomMsg}>Welcome Back, </span>
            {userData.name}
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <h3 className={classes.cardHeading}>Your Potfolio</h3>
          <div className={classes.totalBalanceDiv}>
            <h3 className={classes.totalBalance}>$63574.00</h3>
            <p className={classes.totalBalanceText}>Total Balance</p>
          </div>
          {portfolio.map((item) => {
            return (
              <PortfolioPaper
                title={item.title}
                image={bitcoin}
                value={item.value}
                usd={item.usd}
              />
            );
          })}
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <h3 className={classes.cardHeading}>254856 USD</h3>
          <h5 className={classes.cardSubHeading}>125648 USD (20%)</h5>
          <DashboardChart />
          <Grid container spacing={1}>
            {chartStatus.map((item) => {
              return (
                <ChartStatusPaper title={item.title} cripto={item.cripto} />
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <h3 className={classes.cardHeading}>Follow</h3>
          <Grid container spacing={1} className={classes.follows}>
            {follows.map((item) => {
              return (
                <FollowPaper
                  title={item.title}
                  image={bitcoin}
                  cripto={item.cripto}
                  percent={item.percent}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
