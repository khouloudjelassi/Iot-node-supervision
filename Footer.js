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

import Dashboard from './DashCarte/Humidite'
import User from './User/User'
import Ajout from './Ajout/Carte'
import Ajoutu from './Users/users'
import Header from './Header';
import Menu from './Menu/Menu';
import Login from './Login/Login'
import Login_c from './Login/Login_c'
import Carte from './Liste_carte/Cartes'
import AuthStore from './stores/auth';
import AuthStore_c from './stores/Auth_client';
import Temperature from './tempereture';
import Contacter from './Contacter/Contacter';

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
  const authStore_c = useContext(AuthStore_c);
  if (!authStore.user.email) 
    return <Login />;
  
  else{
  if (!authStore_c.user.email) 
    return <Login_c />;
  
  }
  return (
    <React.Fragment>

  

      <div 
      
      >
     <BrowserRouter>
          <Switch>
          <Route 
              exact 
              path="/login"
            >
              <Login/>
            </Route>

            <Route 
              exact 
              path="/login_c"
            >
              <Login_c/>
            </Route>
        
       
           
            <Route 
              exact 
              path="/"
            >
               <Dashboard/>
            </Route>

            <Route 
              exact 
              path="/Ajout"
            >
               <Ajout/>
            </Route>


            <Route 
              exact 
              path="/Users"
            >
               <Ajoutu/>
            </Route>


            <Route 
              exact 
              path="/DashCarte"
            >
               <DashCarte/>
            </Route>

       

            <Route 
              exact 
              path="/Contacter"
            >
               <Contacter/>
            </Route>
            <Route 
              exact 
              path="/Carte"
            >
               <Carte/>
            </Route>

            <Route 
              exact 
              path="/Temperature"
            >
               <Temperature/>
            </Route>
            
           
            
            <Route 
              exact 
              path="/User"
            >
               <User/>
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
