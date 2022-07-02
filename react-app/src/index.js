// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const React = require('React');
// const ReactDOM = require('react-dom');

// ReactDOM.render(
//         <React.Fragment>
//             <h1>Hello world!</h1>
//             <p>welcome to professional world's</p>
//             <button type='button'>Submit</button>
//         </React.Fragment>
//         ,document.getElementById('root'))

// ReactDOM.render(
//     <>
//         <h1>Netflix Series</h1>
//         <p>welcome to</p>
//         <ul>
//             <li>Home</li>
//             <li>Gallary</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </>
//     ,document.getElementById('root')
// )

// Use Expression
// const country_name = "Pakistan";
// ReactDOM.render(
//     <>
//         {/* <h1>Welcome to {country_name}</h1> */}
//         <h1>Welcome to {`${country_name}`}</h1>
//         <p>Hi everybody come</p>
//     </>
//     ,document.getElementById('root')
// )

// Display Date and Time
// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();
// const x = 'asd';

// ReactDOM.render(
//     <>
//         <h1>welcome {x}</h1>
//         <p>Current Date is = {date}</p>
//         <p>Current Time is = {time}</p>
//     </>
//     ,document.getElementById('root')
// )

// const images1 = "https://picsum.photos/300/300";
// const images2 = "https://picsum.photos/302/300";
// const images3 = "https://picsum.photos/301/300";
// const googleLink = "https://www.google.com/";

// const heading = {
//     color: 'red',
//     fontSize: '50px',
//     textAlign: 'center',
//     letterSpacing: '2px'
// }

// ReactDOM.render(
//     <>
//         <h1 style={heading}>Welcome to My Gallery</h1>
//         <div className="container">
//             <img src={images1} alt="randomImages" />
//             <img src={images2} alt="randomImages" />
//             <a href={googleLink}>
//                 <img src={images3} alt="randomImages" />
//             </a>
//         </div>
//     </>
//     , document.getElementById('root')
// )

// ================================================================================
// Project
// ================================================================================

// import React from 'react';
// import ReactDOM from 'react-dom'
// import "./index.css"

// const time = new Date();
// let curTime = time.getHours();
// console.log(curTime);
// // 9:20:47 PM
// const value = "";
// if (time >= "12:00:00 AM" || time <= "12:00:00 AM") {
//     const value = 'Good Morning';
// }
// else if (time >= "12:00:00 PM" || time >= "12:00:00 PM") {
//     const value = 'After Noon';
// }
// else if (time === "7:00:00 PM") {
//     const value = 'Mid Night';
// }

// ReactDOM.render(
//     <div className="container">
//         <h1 className='heading'>Hello Sir, <span className='label'>{value}</span> </h1>
//     </div>,
//     document.getElementById('root')
// )

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById("root")
);
