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
  
  import Header from '../Header';
  import Menu from '../Menu/Menu';
import axios from 'axios';
  
  const styles = makeStyles({
    padding: {
      padding: 20
    },
    marginTop: {
      marginTop: 20
    },
    largeMarginTop: {
      marginTop: 40
    },
    loginButton: {
      textTransform: 'none'
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
      height: 120,
      margin: '0 auto'
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    },
    container: {
      backgroundImage: 'radial-gradient(#18354e, #060d13)',
    }
  });
  
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
    Client,
    setClient
  ] = useState('');

  const [
    todos,
    setTodos
  ] = useState([]);

  const [
    CurentElm,
    setCurentElm
  ] = useState([]);

  const [
    toUpdate,
    setToUpdate
  ] = useState(false);

    const getAllUser = () => {
      axios.get('http://localhost:1337/capteurs/').then(function (response){
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

    const dash= (element)=>{
      if(setType(element.type)==1)
      {
       return <div>khouloud</div>
      }

    }

   

    const clickButtonUpdate = (element) => {
      setToUpdate(true)
      setCurentElm(element)
      setNom(element.nom)
      setAdresse(element.adresse)
  
      setType(element.type)
      setClient(element.Client)
    
    }



    
    const updateTodo = () => {
      setTodos(
        [
          ...todos,
          todo
        ]
      );
  
      axios.put(`http://localhost:1337/capteurs/${CurentElm.id}`,{nom:nom,
      adresse:adresse,
    
     type:type,
    
     Client:Client
    
    }).then(function(response){
      console.log(response);
      setToUpdate(false)
      getAllUser()

      
    }).catch(function(erreur){
      console.log(erreur);
    })
      setTodo('');
    };


     const deleteTodo =(todoIndex) => {
     console.log("delete User");
     console.log(todoIndex)
     const newlists=users.filter(index => index.id !== todoIndex);
     setUser(newlists)
  
        axios.delete(`http://localhost:1337/associes/${todoIndex}`,)
        .then(function(response){
          console.log(response.data);
        })
        .catch(function (error)
        {
          console.log(error);
        }
   );
   } 

   const dashtodo =(todoIndex) => {
    
  }


    return (
      <Grid
        container
        justify='center'
       
      >
      
<Header/>
<Menu/>


{
  toUpdate == true
  ?
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
   
  >

    <Paper 
      className={classes.root}
      style={{width:"150%"}}
    >



<div className="form-group">
  <label htmlFor="user" >Nom</label>
  <input  className="form-control" id="nom" placeholder="nom"     value={nom}
    
      placeholder="Nom"
     onChange={(e) => {setNom(e.target.value);}}/>
</div>

  
    
<div className="form-group">
  <label htmlFor="type" >Client</label>
  <input  className="form-control" id="type" placeholder="Type"   value={type}
      placeholder="Type"
      
      onChange={(e) => {setType(e.target.value);}}/>
</div>


      

      
 <div className="form-group">
  <label htmlFor="Adresse" >Adresse</label>
  <input  className="form-control" id="Adresse" placeholder="Adresse"   value={adresse}
      placeholder="Adresse"
      
      onChange={(e) => {setAdresse(e.target.value);}}/>
</div>

    

   
    

   
    

   
   

  
 
    <Button onClick={() => {
    updateTodo();
  
  }}
  type="button" class="btn btn-block btn-outline-info btn-flat"
  
>
        Modifier
      </Button>
      </Paper>
  </Grid>
  
  </Grid>
  :

  <Grid
  container
  justify='center'
  style={{backgroundColor:"white"}}
>
<div className="card" style={{marginTop: 50,marginLeft: 200}}>
<div className="card-header">
    <h3 className="card-title" >Liste des Capteurs</h3>
  </div>
  <div className="card-body p-0"></div>
<div className="card-body p-0">
  <table className="table table-striped">
      <thead>
        <tr>
         
          <th style={{width: 200}}>Nom</th>
          <th style={{width: 200}}>Client</th>
          <th style={{width: 200}}>Adresse</th>
          <th style={{width: 200}}></th>
          <th style={{width: 400}}>Action</th>
        </tr>
      </thead>


     
     
    {
      
      
        users.map((element,idx) => (
          <tr key={idx}>
              
              <td  >{element.nom} </td> 
              <td  >{element.type}</td>
              <td  >{element.adresse}</td>
              <td  >{element.client}</td>
              <td >
             
             <button style={{width:"50%"}} onClick={()=>{clickButtonUpdate(element)}} class="btn btn-block btn-info btn-flat">Modifier</button>
             <button style={{width:"50%"}} onClick={()=>{deleteTodo(element.id)}} className="btn btn-block btn-outline-info btn-flat">Supprimer</button>
             
             <a href="/DashCarte">  <button style={{width:"50%"}}  class="btn btn-block btn-info btn-flat">Dashboard</button></a>

           </td>

         </tr>

          ))
    }
    
    </table>

    </div>
</div>

    </Grid>
}
      </Grid>
  
    )
  }
  
  export default observer(
    User
  );    