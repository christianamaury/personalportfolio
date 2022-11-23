import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
//For the typing and deleting animation;
import React, {useState, useEffect} from "react";

export const Banner = () => {

//..Deleting elements; Initial State False
const [isDeleting, setIsDeleting] = useState(false);
//..Starting from the first element in the array
const [loopNum, setLoopNum] = useState(0);
//..Current text; Indicate the portion of the text that is be written
const [text, setText] = useState('');
//..Indicate the time between each words transition.
const period = 2000;
//..To determine how fast when it comes between words are written down.
const [delta, setDelta] = useState(300 - Math.random() * 100);
//Text to Rotate;
const toRotate = ["Front End Web Developer", "WordPress Developer", "iOS Developer"];

//..Cleaning out the mount, Basicalling clearing the interval.
//..We also wanted to run whenever the [text] gets updated; Second parameter;
useEffect (() => {

let ticker = setInterval(() => {
tick();

}, delta);

return () => {clearInterval(ticker)};

}, [text])

//..tick function;
const tick = () => {
  //module operator on the toRotate array lenght
  let i = loopNum % toRotate.length;
  //Showing fullText from the array element
  let fullText = toRotate[i];
  //If current state isDeleting, then substract from length array
  let updatedText = isDeleting ? fullText.substring(0, text.lenght - 1) : fullText.substring(0, text.lenght + 1);

  //Updating the state to our updated Text;
  setText(updatedText);

  if(isDeleting){
    setDelta(prevDelta => prevDelta / 2);
  }

  if(!isDeleting && updatedText === fullText)
  {
    setIsDeleting(true);
    setDelta(period);
  }
  else if(isDeleting && updatedText === ''){

    setIsDeleting(false);
    //Moving to the next element of the array;
    setLoopNum(loopNum + 1);
    //Set to 500 seconds
    setDelta(500);
  }

}
  return (
    <section className="banner" id="home">
    <Container>
      <Row className="align-items-center">
      <Col xs={12} md={6} xl={7}>
        <span className="tagline"> Welcome to my Portfolio </span>
        <h1>{`I'm developedbyamaury `} <span className="wrap"> {text} </span></h1>
        <p> About section goes here </p>
        <button onClick={() => console.log('connect')}> Let's connect <ArrowRightCircle size={24}/> </button>
      </Col>
      <Col xs={12} md={6} xl={5}>
      <img src={headerImg} alt="Header Img"/>
      </Col>
      </Row>
    </Container>
    </section>
  )
}
