import React, { useState, useEffect, Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import ReactJsAlert from "reactjs-alert";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ArrowRight } from "@material-ui/icons";

const Dashboard = () => {
  
  const [chartData2, setChartData2] = useState({});
 

  const chart = () => {
    let temp = [];
    let createAt =[];
    axios
      .get("http://localhost:1337/donnees/")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          temp.push(parseInt(dataObj.temp));
          let date = dataObj.createdAt;
          createAt.push(date.slice(0,10)+" "+date.slice(11,19)); 
          console.log(dataObj.createdAt)
          console.log(createAt);
     
        }

        setChartData2({
          labels: createAt,
          datasets: [
            {
              label: "Température",
              data: temp,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(temp);
  };
  
 
  const notify = () => 
  {
    let temp = [];
    let createAt =[];
    axios
      .get("http://localhost:1337/donnees/")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          temp.push(parseInt(dataObj.temp));
          let date = dataObj.createdAt;
          createAt.push(date.slice(0,10)+" "+date.slice(11,19)); 
          console.log(dataObj.createdAt)
          console.log(createAt);
          
          if(temp<=40  ){
            toast("Temerature trés elevé ! at date",createAt)}
           else
            toast("temperature ideal")

        }

      })
     
  };

  useEffect(() => {
    chart();
  }, []);
  
  const telecharge = () => 
  axios({
    method: "get",
    url: "http://localhost:1337/donnees/",
    responseType: "arraybuffer"
 })
 .then((response) => {
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(
       new Blob([response.data], {
          type: "application/octet-stream"
       })
    );
    link.download = "datatemperator.doc";

    document.body.appendChild(link);

    link.click();
    setTimeout(function() {
       window.URL.revokeObjectURL(link);
    }, 200);
 })
 .catch((error) => {});

  return (
  
    
   <div className="wrapper" >
  
                
                   <Line
                   
          data={chartData2}
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
          <div>
        <ToastContainer />
        <p></p>
        <div><center><button  onClick={notify} value="Etat Temperature"><i class="fas fa-eye"> Etat Temperature</i></button>  <button onClick={telecharge}> <i class="fas fa-download"> Télecharger</i></button></center></div>
        
        
      
 
      </div>
        
    
   </div>
  
 
 
  );
  
};

export default Dashboard;