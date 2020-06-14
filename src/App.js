import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Title from "./Title/Title.js";
import Date from "./Date/Date.js";
import Image from "./Image/Image.js";
import Video from "./Video/Video.js";
import SharingButton from "./SharingButton/SharingButton.js"
import Description from "./Description/Description.js";

const dummyData = {
  date: "2020-06-13",
  explanation: "Clouds are white but the sky is dark in this snapshot of Launch Complex 39A at the Kennedy Space Center.  The dramatic daytime sky is partly due to the black and white photo captured with a digital camera at near-infrared wavelengths. Taken at 3:22 p.m. EDT Saturday May 30 the launch was pretty dramatic too as a Falcon 9 rocket lofted a Crew Dragon spacecrat towards low-Earth orbit. Astronauts Robert Behnken and Douglas Hurley were onboard, the first crew launched from a United States spaceport since the conclusion of the Space Shuttle Program in 2011. A few minutes after launch, the Falcon 9 first stage returned to land on Of Course I Still Love You (that's an autonomous spaceport drone ship ...) patiently waiting off the Florida coast. The two astronauts guided their craft to a successfull docking with the International Space Station\u2019s Harmony module at 10:16 a.m. EDT Sunday May 31.",
  hdurl: "https://apod.nasa.gov/apod/image/2006/demo-2_crewedlaunchIR.jpg",
  media_type: "image",
  service_version: "v1",
  title:"SpaceX Demo-2 Launch",
  url: "https://apod.nasa.gov/apod/image/2006/demo-2_crewedlaunchIR1100.jpg"
};

function App() {
  const [photoInfo, setPhotoInfo] = useState({});

  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=hkuUokVRYV0oLfspe07wWP94OUr5QNEXKFvfsVa4')
        .then( response => {
          setPhotoInfo(response.data);
          console.log(response.data);
        })
        .catch( error => {
          console.error(error);
        });
  }, []);

  // Sample request URL: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

  return (
    <div className="App">
      <Title title={photoInfo.title} />
      <Date date={photoInfo.date} />
      {photoInfo.media_type === "video"
        ? <Video url={photoInfo.url} />
        : <Image src={photoInfo.url} />
      }
      <SharingButton website="twitter" />
      <SharingButton website="facebook" />
      <Description description={photoInfo.explanation}/>
    </div>
  );
}

export default App;
