import React, {Component} from 'react' 


export default class Menu_client extends Component{
    render (){
        return(
            <div>


<div>
  <aside className="main-sidebar sidebar-dark-primary elevation-20 " style={{backgroundColor:"#595959"}}>
  
    <a href="/dashboard" className="brand-link">
      <img src="dist/img/llogo.png"   width="100%" height="100%" />
    </a>
 
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">client</a>
        </div>
      </div>
      <nav className="mt-2" >
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu_client" data-accordion="false">
          
          <li className="nav-item has-treeview " >
            <a href="/DashCarte" className="nav-link active" style={{backgroundColor:"#61adc8"}}>
              <i className="nav-icon fas fa-tachometer-alt" />
              <p >
                Dashboard
               
              </p>
            </a>
        

          <li className="nav-item has-treeview menu_client-open" >
            <a href="/Carte" className="nav-link active" style={{backgroundColor:"#595959"}}>
              <i className=" fa fa-server nav-icon " />
              <p >
              Liste Capteurs
              </p>
            </a>
            </li>

            <li className="nav-item has-treeview menu_client-open" >
            <a href="/Ajout" className="nav-link active" style={{backgroundColor:"#595959"}}>
              <i class=" fa fa-microchip nav-icon" aria-hidden="true" />
          
              <p >
              Ajouter capteur
            
              </p>
            </a>
            </li>
            
            
          
</li>

         
          
          
         
        </ul>
      </nav>
     
    </div>
  
  </aside>
</div>

            </div>
        )
    }
}
