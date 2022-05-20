import { 
    createContext 
  } from 'react';
  import { 
    decorate, 
    observable
  } from 'mobx';
  
  export class Auth_client {
    loading = false;
    error = null;
    user = {email: 'mohamed'};
  
    login_c = async (email, password) => {
      try {
        if (
          email === 'mohamd' &&
          password === '123456'
        ) {
          this.user = {
            firstName: 'Dave',
            lastName: 'Test',
            email: 'mohamed',
          }
        }
         else {
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
  
  decorate(Auth_client, {
    loading: observable,
    error: observable,
    user: observable,
  })
  
  export default createContext(
    new Auth_client()
  );