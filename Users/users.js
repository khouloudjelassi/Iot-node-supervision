import React, { useState } from 'react';
import {
  Grid, 
  Typography,
 
  Paper,
  makeStyles,
  InputBase,
 
  Button
} from '@material-ui/core';
import { Save } from '@material-ui/icons';

import axios from 'axios';

const styles = makeStyles({
  root: {
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
 
  
})

const Home = () => {
  const classes = styles();

  const [
    todo,
    setTodo
  ] = useState('');

  const [
    utilisateur,
    setUtilisateur
  ] = useState('');

  const [
    adresse,
    setAdresse
  ] = useState('');
  
  const [
    numeroVal,
    setNumeroVal
  ] = useState('');

  const [
    Siret,
    setSiret
  ] = useState('');

  const [
    Identifiant,
    setIdentifiant
  ] = useState('');

  const [
    Motdp,
    setMotdp
  ] = useState('');

  const [
    Cmotdp,
    setCmotdp
  ] = useState('');

  const [
    Role,
    setRole
  ] = useState([]);
  
  const [
    todos,
    setTodos
  ] = useState([]);





  const addTodo = () => {
    setTodos(
      [
        ...todos,
        todo
      ]
    );



    axios.post('http://localhost:1337/users',{nom:utilisateur,
    adresse:adresse,
    numeroVal:numeroVal,
    SIRET:Siret,
    identifiant:Identifiant,
    motdepasse:Motdp,
    confirmemdp:Cmotdp,
    role:Role
  
  }).then(function(response){
    console.log(response);
  }).catch(function(erreur){
    console.log(erreur);
  })
    setTodo('');
  };

  return (
    <React.Fragment>
      <Grid
        container
        justify='center'
      >
        <Grid 
          item 
          xs={12}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className={classes.marginTop}
        >

          <Typography 
            variant='h5'
          >
            Remplir ce formulaire
          </Typography>

        </Grid>
      </Grid>
      <Grid
        container
        justify='center'
      >
        <Grid 
          item 
          xs={12}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className={classes.marginTop}
        >

          <Paper 
            className={classes.root}
            style={{margin:10}}
          >

            <InputBase
              className={classes.input}
              placeholder="Utilisateur"
           
             onChange={(e) => {setUtilisateur(e.target.value);}}
            />


          </Paper>
          <Paper 
            className={classes.root}
            style={{margin:10}}
          >

            <InputBase
              className={classes.input}
              placeholder="Adresse"
              onChange={(e) => {setAdresse(e.target.value);}}
            />
            
            </Paper>
         

            

        
          <Paper 
            className={classes.root}
            style={{margin:10}}
          >

            <InputBase
              className={classes.input}
              placeholder="numero Val"
              onChange={(e) => {setNumeroVal(e.target.value);}}
            />
            
          

          </Paper>
          <Paper 
            className={classes.root}
            style={{margin:10}}
          >

            <InputBase
              className={classes.input}
              placeholder="siret"
              onChange={(e) => {setSiret(e.target.value);}}
            />
          
          </Paper>
          <Paper 
            className={classes.root}
            style={{margin:10}}
          >

            <InputBase
              className={classes.input}
              placeholder="Identifiant*"
              onChange={(e) => {setIdentifiant(e.target.value);}}
            />
            
          
          </Paper>
          <Paper 
            className={classes.root}
            style={{margin:10}}
            
          >

            <InputBase
              className={classes.input}
              placeholder="mot de passe"
              onChange={(e) => {setMotdp(e.target.value);}}
            />
            
          
          </Paper>
          <Paper 

            className={classes.root}
            style={{margin:10}}
            
          >

            <InputBase
              className={classes.input}
              placeholder="Confirmer mot de passe"
              onChange={(e) => {setCmotdp(e.target.value);}}
            />
            
          

          </Paper>
          <Paper 
            className={classes.root}
            style={{margin:10}}
          >

            <InputBase
              className={classes.input}
              placeholder="Role"
              onChange={(e) => {setRole(e.target.value);}}
            />
            
          
          </Paper>
          <Button onClick={() => {
            addTodo();
          }}
          type="button" class="btn btn-block btn-outline-info btn-sm"
                style={{margin:10}}
                className={classes.loginButton}
              >
                Sauvgarder
              </Button>


 
        </Grid>
       
      </Grid>
      <Grid
        container
        justify='center'
      >
        

      </Grid>
    </React.Fragment>
  )
}

export default Home;


