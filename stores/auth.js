import { 
    createContext 
  } from 'react';
  import { 
    decorate, 
    observable
  } from 'mobx';
  
  export class Auth {
    loading = false;
    error = null;
    user = {email: 'mohamed'};
  
    login = async (email, password) => {
      try {
        if (
          email === 'admin' &&
          password === 'admin'
        ) {
          this.user = {
            firstName: 'Dave',
            lastName: 'Test',
            email: 'mohamed',
            
          }
        } else {
          throw Error('utilisateur ou mot de passe invalide');
        }
      } catch (err) {
        this.error = err;
        this.loading = false;
      }
    }
  
    logout = () => {
      this.user = {};
    }
  }
  
  decorate(Auth, {
    loading: observable,
    error: observable,
    user: observable,
  })
  
  export default createContext(
    new Auth()
  );