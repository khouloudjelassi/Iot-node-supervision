import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import Header from '../Header';
import Menu from '../Menu/Menu';
import {
  Grid,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';

import axios from 'axios';


const styles = makeStyles({

})

const Home = () => {
  const classes = styles();

  const [
    todo,
    setTodo
  ] = useState('');

  const [
    nom,
    setNom
  ] = useState('');

  const [
    adresse,
    setAdresse
  ] = useState('');

  const [
    mdp,
    setMdp
  ] = useState('');

  const [
    prenom,
    setPrenom
  ] = useState('');

  const [
    nbrcap,
    setNbrcap
  ] = useState('');





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


    axios.post('http://localhost:1337/Clients/', {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      mdp: mdp,
      nbrcap: nbrcap


    }).then(function (response) {
      console.log(response);
    }).catch(function (erreur) {
      console.log(erreur);
    })
    setTodo('');
  };


  return (
    <React.Fragment>
      <Header/>
      <Menu/>
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
          <p></p>


          <div className="form-group">

            <input className="form-control"

              placeholder="nom"

              onChange={(e) => { setNom(e.target.value); }}
            />
          </div>

          <div className="form-group">

            <input className="form-control"

              placeholder="Prenom"

              onChange={(e) => { setPrenom(e.target.value); }}
            />
          </div>


          <div className="form-group">

            <input className="form-control"

              placeholder="Adresse"
              onChange={(e) => { setAdresse(e.target.value); }}
            />

          </div>


          <div className="form-group">

            <input className="form-control"

              placeholder="mot de passe"

              onChange={(e) => { setMdp(e.target.value); }}
            />
          </div>
          <div className="form-group">

            <input className="form-control"

              placeholder="nombre capteur"

              onChange={(e) => { setNbrcap(e.target.value); }}
            />
          </div>


         

            <Button onClick={() => {
              addTodo();

            }}
              type="button" class="btn btn-block btn-info btn-flat"
              style={{ margin: 10, marginLeft: 1 }}

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


