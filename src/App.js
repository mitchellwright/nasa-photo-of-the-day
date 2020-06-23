import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Container, Row, } from 'reactstrap';
import Title from "./Title/Title.js";
import Date1 from "./Date/Date.js";
import DatePicker from "./DatePicker/DatePicker.js";
import Image from "./Image/Image.js";
import Video from "./Video/Video.js";
import SharingButton from "./SharingButton/SharingButton.js"
import Description from "./Description/Description.js";
import { format } from "date-fns";
import parse from 'date-fns/parse';
import subDays from 'date-fns/subDays';



function App() {
  const [photoInfo, setPhotoInfo] = useState();
  const [photoDate, setPhotoDate] = useState();
  const [dates, setDates] = useState();

  const dateCreator = currentDate => {
    const currentDateInstance = parse(currentDate, 'yyyy-MM-dd', new Date());

    const dates = [];
    for(let i=0; i<7; i++) {
      dates.push(
        format(subDays(currentDateInstance, i), 'yyyy-MM-dd'));
    }

    return dates;
  };

  useEffect( () => {
    if(!photoDate) {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=hkuUokVRYV0oLfspe07wWP94OUr5QNEXKFvfsVa4')
        .then( response => {
          setPhotoInfo(response.data);
          setDates(dateCreator(response.data.date));
          setPhotoDate(response.data.date);
        })
        .catch( error => {
          console.error(error);
        });
    } else {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=hkuUokVRYV0oLfspe07wWP94OUr5QNEXKFvfsVa4&date=${photoDate}`)
        .then( response => {
          setPhotoInfo(response.data);
          setPhotoDate(response.data.date);
        })
        .catch( error => {
          console.error(error);
        });
    }

  }, [photoDate]);


  if (!photoInfo) return <h3>Loading...</h3>;

  return (
    <Container>
        <Title title={photoInfo.title} />
        <Date1 date={photoDate} />
        <DatePicker setPhotoDate={setPhotoDate} dates={dates} />
        <div className='text-center'>
          {photoInfo.media_type === "video"
              ? <Video url={photoInfo.url} />
              : <Image src={photoInfo.url} />
          }
        </div>
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
