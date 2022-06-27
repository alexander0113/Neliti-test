
import axios from 'axios';
import { useState } from 'react';
const baseurl = import.meta.env.REACT_APP_API_BASE_URL;

function App() {
  const [lon, setLon] = useState(0.0);  //Lon
  const [lat, setLat] = useState(0.0);  //Lat
  const [data,setData] = useState([]);
  const handleSubmit = ()=>{
    // call API
    var config = {
      method: 'get',
      url: `${baseurl}/compact?lat=${lat}&lon=${lon}`,
      headers: {
          'Content-Type': 'application/json',
      }
    };
  axios(config).then(response=>{
      setData(response.data);
  }).catch((error)=> {
  })  
  }
  return (
    <div>
      <div>
        <label htmlFor='lon' >Lon</label>
        {/* validate and setLon */}
        <input id="lon" value={lon} onChange={(e)=>{if(e.target.value<=360 && e.target.value>=0){setLon(e.target.value)}}}/>
      </div>
      <div>
        <label htmlFor='lat'>Lat</label>
        {/* validate and setLat */}
        <input id="lat" value={lat} onChange={(e)=>{if(e.target.value<=90 && e.target.value>=-90){setLat(e.target.value);}}}/>
      </div>
      <button onClick={handleSubmit}>Show Wheter</button>
      {data.map((item, index)=>(
        <div key={index}>
          {"drawing from Data........"}
        </div>
      ))}
    </div>
  )
}
export default App
