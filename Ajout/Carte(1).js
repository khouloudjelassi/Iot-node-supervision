import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

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
    type,
    setType
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

  
    axios.post('http://localhost:1337/Capteurs',{nom:nom,
    adresse:adresse,
  
    type:type,
   
  
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

          <div className="form-group">

                      <input className="form-control"
                    
                        placeholder="nom"
                    
                      onChange={(e) => {setNom(e.target.value);}}
                      />
          </div>
          

          <div className="form-group">

                <input className="form-control"
                
                  placeholder="Adresse"
                  onChange={(e) => {setAdresse(e.target.value);}}
                />
                
            </div>
         

           
        
      
                <select class="form-control custom-select"  onChange={(e) => {setType(e.target.value);}}>
                 
                  <option >liste client</option> 
                  <option >1</option> 
                  <option>2</option>
                  <option >3</option>
                </select>
          
            
         <a href="/Carte">
         
          <Button onClick={() => {
            addTodo();
            
          }}
          type="button" class="btn btn-block btn-info btn-flat"
                style={{margin:10,marginLeft:1}}
                
                className={classes.loginButton}
              >
                Sauvgarder
              </Button>
              </a>
            
 
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


