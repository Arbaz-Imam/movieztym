import React from 'react';
import axios from 'axios';
import {useState ,useEffect} from 'react'
import Showmovielist from './Showmovielist'


const Hmpg = () => {

const movieApi =  async ()=>{
const movieList = await axios.get ('https://api.tvmaze.com/search/shows?q=all') 
if (movieList.data) {
    return movieList.data
}
else{
  return []
}
}
const [showData, setShowData] = useState([]);
useEffect(() => {
 const apiCall = async ()=>{
let showData = await movieApi();
setShowData (showData)
 }
 apiCall()
}, []);


  return (
    <div>
      <Showmovielist showData={showData}/>
      </div>
  );
}

export default Hmpg;
