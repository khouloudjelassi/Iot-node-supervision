import React, { 
    useState, 
    useContext 
  } from 'react';
  import {
    Grid, 
    Typography,
    Card,
    makeStyles,
    TextField,
    Button,
    InputAdornment,
    IconButton
  } from '@material-ui/core';
  import {
    Visibility,
    VisibilityOff
  } from '@material-ui/icons';
  import { 
    observer 
  } from 'mobx-react-lite';
  
  import logo from './logo.png';
  import AuthStore from '../stores/auth';
  
  const styles = makeStyles({
    padding: {
      padding: 20
    },
    marginTop: {
      marginTop: 40
    },
    largeMarginTop: {
      marginTop: 4
    },
    loginButton: {
      textTransform: 'none',
      
    },
    errorText: {
      color: 'red',
      fontSize: 10,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    loginCardContainer: {
      display: 'flex',
    },
    loginCard: {
      margin: 'auto',
      height: 'max-content'
    },
    logo: {
      width: 'auto',
      height: 100,
      margin: '0 auto'
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    },
    container: {
      backgroundImage: 'radial-gradient(#18354e, #61adc8)',
      height:753
    }
  });
  
  const Login = () => {
    const classes = styles();
  
    const authStore = useContext(AuthStore);
  
    const [
      email,
      setEmail
    ] = useState('');
  
    const [
      password,
      setPassword
    ] = useState('');
  
    const [
      showPassword,
      setShowPassword
    ] = useState(false);
  
    return (
      <div >
      <Grid
        container
        justify='center'
        className={classes.container}
        
      >
        <Grid 
          item 
          xs={12}
          sm={8}
          md={4}
          lg={30}
          xl={20}
          className={classes.loginCardContainer}
        >
  
          <Card 
          style={{marginTop:210}}
            className={classes.loginCard}
          >
            <Grid 
              container 
              className={classes.padding}
            >
              <Grid 
                item 
                xs={12}
                className={classes.titleContainer}
              >
  
                <img
                  src={logo}
                  alt='Logo'
                  className={classes.logo}
                />
                
                <Typography
                  color='primary'
                  variant='h5'
                >
                  Connexion
                </Typography>
  
              </Grid>
              <Grid 
                item 
                xs={12}
                className={classes.largeMarginTop}
              >
  
                <TextField 
                  fullWidth
                  label='Utilisateur'
                  variant='outlined'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
  
              </Grid>
              <Grid 
                item 
                xs={12}
                className={classes.marginTop}
              >
  
                <TextField 
                  fullWidth
                  label='Mot de passe'
                  variant='outlined'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type={
                    showPassword ? 
                    'text' : 
                    'password'
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment 
                        position='end'
                      >
                        <IconButton
                          onClick={() => {
                            setShowPassword(
                              !showPassword
                            );
                          }}
                        >
                          {
                            showPassword ? 
                            <Visibility /> : 
                            <VisibilityOff />
                          }
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
  
              </Grid>
              <Grid 
                item 
                xs={12}
                className={classes.marginTop}
              >
  
                <Button 
                  variant='contained' 
                 
                  class="btn btn-block btn-info btn-flat"
                  fullWidth
                  onClick={() => {
                    authStore.login(
                      email, 
                      password
                    );
                  }}
                  className={classes.loginButton}
                >
                  Connexion
                </Button>
  
              </Grid>
              {
                authStore.error &&
                <Grid
                  item
                  xs={12}
                  className={classes.marginTop}
                >
  
                  <Typography 
                    className={classes.errorText}
                    variant='body1'
                  >
                    {authStore.error.message}
                  </Typography>
  
                </Grid>
              }
            </Grid>
  
          </Card>
  
        </Grid>
      </Grid>
      </div>
    )
  }
  
  export default observer(
    Login
  );