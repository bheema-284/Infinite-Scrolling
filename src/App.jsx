import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [mockData, setMockData] = useState([]);


  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = () => {
    //console.log("res")
    axios.get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {console.log(res.data)})
      .catch((er) => {
        console.log(er);
      });
  };
 // console.log(mockData);
  return (
    <div className="App">
      
    </div>
  )
}

export default App
