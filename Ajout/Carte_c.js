import React, { 
    useState, 
    useContext ,
    useEffect
  } from 'react';
  import {
    Grid, 
    Typography,
    Card,
    makeStyles,
    TextField,
    Button,
    Paper,
    InputBase,
    Divider,
  } from '@material-ui/core';
  
  import { 
    observer 
  } from 'mobx-react-lite';
  
  
  import axios from 'axios';
  
  
  
  const User = () => {
    const classes = styles();
  
    const [
      users,
      setUser
    ] = useState([]);
    
    const [
      isLoaded,
      setIsLoaded
    ] = useState(false);
  
  
  const [
    nom,
    setNom
  ] = useState('');
  
  const [
    toUpdate,
    setToUpdate
  ] = useState(false);
  
    const getAllUser = () => {
      axios.get('http://localhost:1337/Clients/').then(function (response){
        console.log(response.data);
        setUser(response.data);
      })
      .catch(function(error){
        console.log(error);
      })
    }
      
    useEffect(()=>{
      if(isLoaded == false)
      {
        getAllUser()
        setIsLoaded(true)
      }
  
    })
   
  
 
}
  export default observer(
    
  ); 