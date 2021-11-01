import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, Route, Switch } from "react-router-dom";
import { Users } from "./Users";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6" className={classes.title}>
            <Link to="/" style={{color:'white'}}>Home</Link>
          </Typography>
          <Typography color="white" variant="h6" className={classes.title}>
            <Link to="/users" style={{color:'white'}}>Users</Link>
          </Typography>
         
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/users">
          <Users />
        </Route>

        <Route exact path="/create-user">
          <CreateUser />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/photos">
          <Photos />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to Crud Task 1</h1>
      <p>
        This app is going to perform CRUD operation on MOCAPI.
      </p>
    </div>
  );
}

function CreateUser() {
  return (
    <div>
      <h1>Create User</h1>
    </div>
  );
}

function Photos() {
  return (
    <div>
      <h1>Welcome to Crud Task 1 Photos section</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Welcome to Crud Task 1 Contact section</h1>
    </div>
  );
}

export default App;
