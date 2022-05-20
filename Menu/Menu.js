import React, {Component} from 'react' 


export default class Menu extends Component{
    render (){
        return(
            <div>


<div>
  <aside className="main-sidebar sidebar-dark-primary elevation-20 " style={{backgroundColor:"#595959"}}>
    {/* Brand Logo */}
    <a href="/dashboard" className="brand-link">
      <img   width="100%" height="100%" />
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Admin</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2" >
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview " >
            <a href="/DashCarte" className="nav-link active" style={{backgroundColor:"#61adc8"}}>
              <i className="nav-icon fas fa-tachometer-alt" />
              <p >
                Dashboard
               
              </p>
            </a>
        

          <li className="nav-item has-treeview menu-open" >
            <a href="/Carte" className="nav-link active" style={{backgroundColor:"#595959"}}>
              <i className=" fa fa-server nav-icon " />
              <p >
              Liste Capteurs
              </p>
            </a>
            </li>

            <li className="nav-item has-treeview menu-open" >
            <a href="/Ajout" className="nav-link active" style={{backgroundColor:"#595959"}}>
              <i class=" fa fa-microchip nav-icon" aria-hidden="true" />
          
              <p >
              Ajouter capteur
            
              </p>
            </a>
            </li>
            
            <li className="nav-item has-treeview menu-open" >
            <a href="/User" className="nav-link active" style={{backgroundColor:"#595959"}}>
              <i class="fa fa-plus-circle nav-icon" aria-hidden="true" />
          
              <p >
              Ajouter Utilisateurs
              </p>
            </a>
            </li>
          
</li>

         
          
          
         
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

            </div>
        )
    }
}
