import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import Header from '../Header';
import Menu from '../Menu/Menu';
import Menu_client from '../Menu/Menu_client';
import {
  Grid, 
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';

import axios from 'axios';


const styles = makeStyles({

})

function Home  ()  {
  const classes = styles();

  const [
    liste_client,
    setclient
  ] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:1337/clients/').then(function (response){
      
      setclient(response.data);
      console.log(liste_client)
    })
    .catch(function(error){
      console.log(error);
    })
  
  })

  const [
    todo,
    setTodo
  ] = useState('');

  const [
    user,
    setUser
  ] = useState('');

  const [
    message,
    setMessage
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

  
    axios.post('http://localhost:1337/contacts',{
        message:message,    
    user:user,
   
   
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
        <Header/>
        <Menu/>
        
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
           <br></br>
        
          <Typography 
            variant='h5'
          >
           Contacter
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
           <br></br>
        
                <div className="form-group">
                <input className="form-control" placeholder="Message"
                onChange={(e) => {setMessage(e.target.value);}}
                />

                </div>
                 <select class="form-control custom-select"  onChange={(e) => {setUser(e.target.value);}}>
                 
                 <option >liste client</option> 
                 {
                 liste_client.map((element,idx) => (
                 <option key={idx}>{element.nom}</option>
                 
        ))
      }
               </select>
          
            
        
         
          <Button onClick={() => {
            addTodo();
            
          }}
          type="button" class="btn btn-block btn-info btn-flat"
                style={{margin:10,marginLeft:1}}
                
                className={classes.loginButton}
              >
                ENVOYER
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


