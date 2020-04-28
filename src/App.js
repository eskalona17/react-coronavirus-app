// import React, { Component, useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import DataList from "./DataList";
import "./App.css";


  //asi se crearia SIN HOOKS
// class App extends Component {

  // state = {
  //   deaths: null,
  //   confirmed: null,
  //   recovered: null,
  //   loading: true,
  // };

//   async componentDidMount() {
//     try {
//       const response = await fetch(
//         "https://enrichman.github.io/covid19/world/full.json"
//       );
//       const data = await response.json();
//       this.setState({
//         deaths: data.deaths,
//         confirmed: data.confirmed,
//         recovered: data.recovered,
//         loading: false,
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   render() {
  // if(this.state.loading) {
  //   return <div>Cargando los datos de hoy...</div>
  // }
  // return(
  //   <>
  //     <DataList
  //     confirmed={confirmed}
  //     deaths={deaths}
  //     recovered={recovered}
  //   />
  //   </>
  // )
   
// }
// }

//CON HOOKS
const App = () => {

  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://enrichman.github.io/covid19/world/full.json"
        );
        const data = await response.json();
        setLoading(false)
        setDeaths(data.deaths)
        setConfirmed(data.confirmed)
        setRecovered(data.recovered)
      } catch (e) {
        console.log(e);
      }
    }
    fetchData()
  
  },[])


  if (loading) {
    return <div>Cargando los datos de hoy...</div>;
  }
  return (
    
    <DataList
      confirmed={confirmed}
      deaths={deaths}
      recovered={recovered}
    />
    
  );
}


export default App;
