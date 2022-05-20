import React, { 
  useContext 
} from "react";

import {
  observer 
} from "mobx-react-lite";
import { 
  Button,
  makeStyles,
  Tooltip
} from "@material-ui/core";
import { 
  ExitToApp 
} from "@material-ui/icons";

import AuthStore from './stores/auth'
import AuthStore_c from './stores/Auth_client'

const styles = makeStyles({
  logoutButton: {
    position: 'fixed',
    right: 0,
    color: 'white'
  }
 
})


const Header = () => {
  const classes = styles();

  const authStore = useContext(AuthStore)
  const authStore_c = useContext(AuthStore_c)

  return (
  
 <div>
    <div >
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
     <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="/login" role="button"><i className="fas fa-bars" /></a>
      </li>
      <li>
        <a className="nav-link" href="/contacter" role="text"><i className=	"fas fa-paper-plane" /> contacter</a>
      </li>
     </ul>

            <Tooltip  title='Déconnecter' >
              <Button style={{background:"#61adc8"}}
                onClick={() => {
                  authStore.logout();
                }}
                className={classes.logoutButton}
              >
                <ExitToApp />
              </Button>
            </Tooltip>

          <Tooltip title='Déconnecter' >
              <Button style={{background:"#61adc8"}}
                onClick={() => {
                  authStore_c.logout();
                }}
                className={classes.logoutButton}
              >
                <ExitToApp />
              </Button>
            </Tooltip> 
          <a href="/login_c"> client </a>
       
       </nav>
    </div>


  </div>
  );
}

export default observer(
  Header
);
