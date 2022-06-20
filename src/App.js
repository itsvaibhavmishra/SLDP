// importing library
import React, { useState, useRef, useEffect} from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import "./App.css";
import {drawRect} from "./labelmap";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Loading model
  const runMobnet = async () => {

    // getting model link from cloud
    const net = await tf.loadGraphModel('https://tfjshandsignmodel.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json');

    // Detecting hands
    setInterval(() => {
      detect(net); // fuction for making detections using webcam
    }, 16.7); // detections frequency
  };

  // function for hand detections
  const detect = async (net) => {

    // checking if camera is accessible
    if (
      typeof webcamRef.current !== "undefined" && 
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {

      // fetching video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // configuring video dimensions
      webcamRef.current.video.width = videoWidth;  
      webcamRef.current.video.height = videoHeight;
      
      // video canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Making Detections
      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [640, 480]);
      const casted = resized.cast('int32');
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);

      // console.log(await obj[2].array())

      // defining where objects are coming from
      const boxes = await obj[0].array(); // boxes
      const classes = await obj[6].array(); // classes
      const scores = await obj[4].array();  // threshold

      const ctx = canvasRef.current.getContext("2d");

      // using requestAnimationFrame method for smother drawing for detections
      requestAnimationFrame(() => {
        drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)
      });
      // console.log(obj);
      // Cleaning memory
      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);

    };
  };

  useEffect(()=>{runMobnet()},[]);

  return (
    <><div className="App">
      <header className="App-header" id = 'home'>
        
        <Webcam ref={webcamRef} className="web"/>
        <canvas ref={canvasRef} className='web'/>
      </header>
    </div>

    {/* Commands Section */}
    <div className="w3-container w3-padding-32" id="command">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Commands</h3>
      <p>lorem ipsum dolor sit amet, consect</p>
    </div>
    
    {/* About Section */}
    <div className="w3-container w3-padding-32" id="about">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscin</p>
    </div>

    {/* Contact Section */}
    <div className="w3-container w3-padding-32" id="contact">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
      <p>lorem ipsum dolor sit amet, consectetur adipis</p>
    </div></>
  );
};

export default App;