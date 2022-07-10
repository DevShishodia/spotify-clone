import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import { useEffect, useState } from 'react';

function App() {
   const [data, setData] = useState([]);

   const fetchCall = async() => {
    const res = await  fetch('https://api.napster.com/v2.1/tracks/top?apikey=');
    const data = await res.json();
    console.log(data);
   }

   useEffect(()=>{
     fetchCall();
    console.log('hello')
       },[])
       
  return (
  <>
  <Home/>
  </>
  );
}

export default App;
