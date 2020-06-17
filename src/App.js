import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
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
    <Container>
      <Row>
        <Title title={photoInfo.title} />
      </Row>
      <Row>
        <Date date={photoInfo.date} />
      </Row>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          {photoInfo.media_type === "video"
              ? <Video url={photoInfo.url} />
              : <Image src={photoInfo.url} />
          }
        </Col>
      </Row>
      <Row>
        <Col sm={{size: 3, offset: 3}}>
          <SharingButton website="twitter" />
        </Col>
        <Col sm={{size: 3, offset: 1}}>
          <SharingButton website="facebook" />
        </Col>
      </Row>
      <Row>
        <Description description={photoInfo.explanation}/>
      </Row>
    </Container>
  );
}

export default App;
