import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Container, Row } from 'reactstrap';
import Title from "./Title/Title.js";
import Date from "./Date/Date.js";
import Image from "./Image/Image.js";
import Video from "./Video/Video.js";
import SharingButton from "./SharingButton/SharingButton.js"
import Description from "./Description/Description.js";

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

  return (
    <Container className="container">
        <Title title={photoInfo.title} />
        <Date date={photoInfo.date} />
        {photoInfo.media_type === "video"
            ? <Video url={photoInfo.url} />
            : <Image src={photoInfo.url} />
        }
        <div className="text-center share-buttons">
          <SharingButton website="twitter" />
          <SharingButton website="facebook" />
        </div>
      <Row>
        <Description description={photoInfo.explanation}/>
      </Row>
    </Container>
  );
}

export default App;
