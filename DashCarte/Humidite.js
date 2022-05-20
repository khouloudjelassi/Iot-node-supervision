import React, { useState, useEffect, Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Temperature from "../tempereture";
import Header from '../Header';
import Menu from '../Menu/Menu';
const Dashboard = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
  
    let hum = [];
    let createAt =[];
   



    axios
      .get("http://localhost:1337/data/")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          hum.push(parseInt(dataObj.hum));
          let date = dataObj.createdAt;
          createAt.push(date.slice(0,10)+" "+date.slice(11,19)); 
          console.log(dataObj.createdAt)
          console.log(createAt);
        }
        setChartData({
          labels: createAt,
          datasets: [
            {
              label: "Humidité",
              data: hum,
              backgroundColor: ["rgb(243, 113, 92)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(hum);
 
  };

  useEffect(() => {
    chart();
    
  }, []);
  
  const telecharge = () => 
  axios({
    method: "get",
    url: "http://localhost:1337/data/",
    responseType: "arraybuffer"
 })
 .then((response) => {
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(
       new Blob([response.data], {
          type: "application/octet-stream"
       })
    );
    link.download = "dataHumidity.doc";

    document.body.appendChild(link);

    link.click();
    setTimeout(function() {
       window.URL.revokeObjectURL(link);
    }, 200);
 })
 .catch((error) => {});
 
  return (
  
    
   <div className="wrapper">
     <div className="content-wrapper">

     <div className="content">
      <div className="row">
    <div className="col-lg-3 col-6">
 <Header/>
 <Menu/>
      {/* small box */}
      <div className="small-box bg-info">
        <div className="inner">
          <h3>Passerelle</h3>
          <p>192.168.1.68</p>
        </div>
 
      </div>
    </div>
    {/* ./col */}
    <div className="col-lg-3 col-6">
      {/* small box */}
     
    </div>
    {/* ./col */}
    <div className="col-lg-3 col-6">
      {/* small box */}
      <div className="small-box bg-warning">
        <div className="inner">
          <h3>Noeud Iot</h3>
          <p>192.168.1.175</p>
        </div>
       
      </div>
    </div>
    {/* ./col */}
    
  </div></div>
       <div className="content">
         <div className="container-fluid">
           
           <div className="row">
             
             <div className="col-lg-6">
               <div className="card">
                 <div className="card-header border-0">
                   <div className="d-flex justify-content-between">
                   
                     <h3 className="card-title"> <i class="fa fa-thermometer-empty mr-1" aria-hidden="true"></i>Température</h3>
                     <div className="card-tools">
                     <button type="button" class="btn btn-success">ON</button>   <button type="button" class="btn btn-danger">OFF</button>

                    </div>
                  </div>
                 </div>
                 <div className="card-body">

                 
                     <Temperature/>
         
        
       
              </div>
               </div>
               {/* /.card */}
               
             </div>
             {/* /.col-md-6 */}
             <div className="col-lg-6">
               <div className="card">
                 <div className="card-header border-0">
                   <div className="d-flex justify-content-between">
                 
                     <h3 className="card-title"><i class="fa fa-tint mr-1" aria-hidden="true"></i>Humidité</h3>
                     
                     <div className="card-tools">
                     <button type="button" class="btn btn-success">ON</button>   <button type="button" class="btn btn-danger">OFF</button>

     </div>
                   </div>
                 </div>
                 <div className="card-body">
                   <div className="d-flex">
                    
                   </div>
               
                   <div className="d-flex flex-row justify-content-end">
                     
              <Line
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
                   </div>
                   <p></p>
                   <div><center><button   value="Etat Humidité"><i class="fas fa-eye"> Etat Temperature</i></button>  <button onClick={telecharge}> <i class="fas fa-download"> Télecharger</i></button></center></div>

                 </div>
               </div>
               
               {/* /.card */}
              </div>
             {/* /.col-md-6 */}
           </div>
           {/* /.row */}
         </div>
         {/* /.container-fluid */}
       </div>
       {/* /.content */}
     </div>
     
     {/* /.content-wrapper */}
     {/* Control Sidebar */}
     <aside className="control-sidebar control-sidebar-dark">
       {/* Control sidebar content goes here */}
     </aside>
     {/* /.control-sidebar */}
     {/* Main Footer */}

   </div>
  
 
 
  );
};

export default Dashboard;