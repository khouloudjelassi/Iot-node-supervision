import React, { 
    useContext 
  } from "react";
  import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
  import {
    observer 
  } from "mobx-react-lite";
  
  import DashCarte from './DashCarte/Humidite'
  import Dash from './DashCart/Carte2'
  import Dashboard from './DashCarte/Humidite'
  import User from './User/User'
  import Ajout from './Ajout/Carte'
  import Ajoutu from './Users/users'
  import Header from './Header';
  import Menu from './Menu/Menu';
  import Footer from './Footer';
  import Login from './Login/Login';
  import Login_c from './Login/Login_c';
  import Carte from './Liste_carte/Cartes'
  import AuthStore from './stores/auth';
  import AuthStore_c from './stores/Auth_client';
  import Temperature from './tempereture';
  import { makeStyles } from "@material-ui/core";
  
  const styles = makeStyles({
    root: {
      marginTop: 70,
      width: '-webkit-fill-available'
    }
  });
  
  const Layout = () => {
    const classes = styles();
  
    const authStore = useContext(AuthStore);
    const authStore_c = useContext(AuthStore_c)
    if (!authStore.user.email) {
      return <Login />;
    }
    else{
      if (!authStore_c.user.email) 
        return <Login_c />;
      
      }
  
    return (
      <React.Fragment>
    <Header/>
    <Menu/>
    <Menu_client/>
        <div>
       <BrowserRouter>
            <Switch>
            <Route 
                exact 
                path="/"
              >
                <Login/>
              </Route>
           
              <Route 
                exact 
                path="/"
              >
                <Login_c/>
              </Route>
             
             
  
            </Switch>
          </BrowserRouter>
  
        </div>
      </React.Fragment>
    );
  }
  
  export default observer(
    Layout
  );
  