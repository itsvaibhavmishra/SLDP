// importing library
import React, { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./labelmap";
import Navbar from "./components/Navbar";
import Logo from "./assets/logo.png";
import Sign from "./assets/sign-1.jpeg";
function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Loading model
  const runMobnet = async () => {
    // getting model link from cloud
    const net = await tf.loadGraphModel(
      "https://tfjshandsignmodel.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
    );

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
      const casted = resized.cast("int32");
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);

      // console.log(await obj[2].array())

      // defining where objects are coming from
      const boxes = await obj[0].array(); // boxes
      const classes = await obj[6].array(); // classes
      const scores = await obj[4].array(); // threshold

      const ctx = canvasRef.current.getContext("2d");

      // using requestAnimationFrame method for smother drawing for detections
      requestAnimationFrame(() => {
        drawRect(
          boxes[0],
          classes[0],
          scores[0],
          0.8,
          videoWidth,
          videoHeight,
          ctx
        );
      });
      // console.log(obj);
      // Cleaning memory
      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };

  useEffect(() => {
    runMobnet();
  }, []);
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="main-container scrolbar">
          <div className="flex flex-wrap justify-center align-center h-full">
            <div className="w-full md:w-1/2 h-full overflow-auto scrolbar">
              {/* <img src={Sign} alt="HandSign" className="" /> */}

              {/* About */}
              <section class="text-gray-600 body-font overflow-hidden" id="about">
                <div class="container px-5 py-24 mx-auto">
                  <div class="flex flex-wrap -m-12">
                    <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">ABOUT</span>
                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">This section is for page info</h2>
                    <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                    </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Developer */}
              <section class="text-gray-600 body-font overflow-hidden" id="developer">
                <div class="container px-5 py-24 mx-auto">
                  <div class="flex flex-wrap -m-12">
                    <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Developer</span>
                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">This section is for developer</h2>
                    <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                    </div>
                    </div>
                  </div>
                </div>
              </section>
              
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center align-center relative">
              <div>
                <Webcam ref={webcamRef} className="web top-0 left-0" />
                <canvas ref={canvasRef} className="web absolute top-0 left-0" />
              </div>
              <div className="overflow-x-auto bottom-5 left-0 scrolbar">
                <div className="p-1 flex">
                  <div className="flex-shrink-0">
                    <img src={Logo} alt="dsad" />
                  </div>
                  <div className="flex-shrink-0">
                    <img src={Logo} alt="dsad" />
                  </div>
                  <div className="flex-shrink-0">
                    <img src={Logo} alt="dsad" />
                  </div>
                  <div className="flex-shrink-0">
                    <img src={Logo} alt="dsad" />
                  </div>
                  <div className="flex-shrink-0">
                    <img src={Logo} alt="dsad" />
                  </div>
                  <div className="flex-shrink-0">
                    <img src={Logo} alt="dsad" />
                  </div>
                  <div className="flex-shrink-0">
                    <img src={Logo} alt="dsad" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
