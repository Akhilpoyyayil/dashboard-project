import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { dashboardDataLoading } from "../pages/dashboard/redux/action";
import { alpha, makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { indigo } from "@material-ui/core/colors";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SyncAltOutlinedIcon from "@material-ui/icons/SyncAltOutlined";
import ShuffleOutlinedIcon from "@material-ui/icons/ShuffleOutlined";
import Elaenia from "./image/elania.png";
import bitcoin from "../images/bitcoin.png";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    paddingLeft: theme.spacing(3),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${theme.spacing(7) + 1}px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${theme.spacing(9)}px)`,
    },
    boxShadow: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: ".1em",
    borderBottomColor: "#41416b",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  profileButton: {
    backgroundColor: "#7b6fff",
    textTransform: "none",
    borderRadius: "20px",
    height: "44px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    marginLeft: theme.spacing(2),
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menus: {
    marginTop: theme.spacing(9),
    color: indigo[50],
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.dark,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    backgroundColor: theme.palette.primary.dark,
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(9),
    },
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    color: indigo[50],
  },
  contentShift: {
    marginLeft: "167px",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  imageIcons: {
    width: "15px",
    height: "15px",
  },
  criptoName: {
    marginRight: theme.spacing(1),
    flexGrow: "1!important",
  },
  paperUl: {
    paddingLeft: 0,
    listStyle: "none",
    display: "inline",
  },

  paperLi: {
    display: "inline-flex",
    alignItems: "center",
    background: "#423a6f",
    padding: "8px 15px 8px 22px",
    color: "#7b6fff",
    borderRadius: "30px 0 0 30px",
    border: "1px solid #423a6f",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  paperLi2: {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 15px 8px 22px",
    color: "#ffffff",
    borderRadius: "0 30px 30px 0",
    border: "1px solid #423a6f",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const AdminLayout = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = useState({});
  const fetchUserData = useSelector((state) => state.dashboardReducer.userData);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    dispatch(dashboardDataLoading());
  }, []);
  useEffect(() => {
    if (fetchUserData) {
      setUserData(fetchUserData);
      console.log("fetchUserData: ", fetchUserData);
    }
  }, [fetchUserData]);
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          variant="contained"
          color="primary"
          className={classes.profileButton}
          endIcon={<ArrowDropDownIcon />}
          onClick={handleProfileMenuOpen}
        >
          {userData.name}
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <img
            src={Elaenia}
            alt={"Elaenia"}
            className={classes.logo}
            onClick={handleDrawerOpen}
          />
          <div className={classes.grow} />
          <div>
            <ul className={classes.paperUl}>
              <li className={classes.paperLi}>
                <div className={classes.criptoName}>
                  <span>0.002</span>
                </div>
                <img src={bitcoin} className={classes.imageIcons} />
              </li>
              <li className={classes.paperLi2}>
                <div className={classes.criptoName}>
                  <span>19.93 USD</span>
                </div>
              </li>
            </ul>
          </div>
          <div className={classes.sectionDesktop}>
            <Button
              variant="contained"
              color="primary"
              className={classes.profileButton}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleProfileMenuOpen}
            >
              {userData.name}
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.menus}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardOutlinedIcon style={{ color: indigo[400] }} />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SyncAltOutlinedIcon style={{ color: indigo[400] }} />
              </ListItemIcon>
              <ListItemText primary={"Accounts"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon style={{ color: indigo[400] }} />
              </ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ShuffleOutlinedIcon style={{ color: indigo[400] }} />
              </ListItemIcon>
              <ListItemText primary={"Settings"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div>{props.children}</div>
      </main>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
export default AdminLayout;
