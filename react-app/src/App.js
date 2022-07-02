// import React from "react";
// // import {sum, sub, multi, division} from "./Components/Calculator";

// // function App() {
// //   return (
// //     <>
// //       <ol>
// //         <li>Sum Two number: {sum(25,25)}</li>
// //         <li>Sub Two number: {sub(30,5)}</li>
// //         <li>Multi Two number: {multi(2,2)}</li>
// //         <li>Division Two number: {Math.ceil(division(100,10))}</li>
// //       </ol>
// //     </>
// //   );
// // }
// // export default App;

// import React from "react";
// import Card from "./Components/Card";
// import SendData from "./SendData";

// const containers = {
//   'display': "flex",
//   "justifyContent": "center",
//   "flexWrap": "wrap",
// };

// const favSeries = "welcome";

// const Series = () => {
//   if (favSeries === "welcome") {
//     return (
//       <Card
//         key={SendData[0].id}
//         imgSrc={SendData[0].imgSrc}
//         title={SendData[0].title}
//         text={SendData[0].text}
//         link={SendData[0].link}
//       />
//     )
//   } else {
//     <Card
//       key={SendData[1].id}
//       imgSrc={SendData[1].imgSrc}
//       title={SendData[1].title}
//       text={SendData[1].text}
//       link={SendData[1].link}
//     />
//   }
// }

// function App() {
//   return (
//     <>
//       <h1 classNameNameNameName="text-center my-5">Welcome to dummy websites</h1>
//       <div classNameNameName="" style={containers}>
//         <Series />

//       </div>
//     </>
//   );
// }
// export default App;

// import React, { useState } from "react";
// import ReactDom from "react-dom";

// const App = () => {
// const [count, updateCount] = useState(8);
// function IncementNumber() {
//   updateCount(count + 1)}

// let currentTime = new Date().toLocaleTimeString();
// const [time, settime] = useState(currentTime);

// const updateTime = () => {
//   let currentTime = new Date().toLocaleTimeString();
//   settime(currentTime);
// }

// let currentTime = new Date().toLocaleTimeString();

// const [time, updateTime] = useState(currentTime);

// setInterval(() => {
//   let currentTime = new Date().toLocaleTimeString();
//   updateTime(currentTime);
// }, 1000);

// return (
// <div classNameNameName="container">
//   <h1> {count} </h1>
//   <button onClick={IncementNumber} classNameNameName="btn btn-primary">Click me</button>
// </div>

// <div classNameNameName="container">
//   <h1>{currentTime}</h1>
//   <button onClick={updateTime} classNameNameName="btn btn-primary">Click me</button>
// </div>

//     <div classNameNameName="container">
//       <h1>{currentTime}</h1>
//     </div>

//   )
// }

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   let changeStyle = {
//     backgroundColor: 'red'
//   };
//   const [purple, updateChange] = useState(changeStyle);
//   const [text, updateText] = useState('Welcome')

//   const clickMe = () => {
//     let changeStyle = {
//       backgroundColor: '#6f42c1'
//     };
//     updateChange(changeStyle);
//     updateText("Thank you");
//   }

//   const dbclick = () => {
//     let changeStyle = {
//       backgroundColor: '#ffff'
//     };
//     updateChange(changeStyle);
//     updateText("Welcome");
//   }

//   return (
//     <>
//       <div classNameNameName="container" style={purple}>
//         <h3>{text}</h3>
//         <button onClick={clickMe} onDoubleClick={dbclick} classNameNameName="btn btn-primary">clickMe</button>
//       </div>

//     </>
//   )

// }
// export default App;

// import React, { useState } from "react";
// const App = () => {

//   const [title, updateTitle] = useState("");
//   const [lastName, updateLastName] = useState("");

//   const [fullName, updateFullName] = useState("");
//   const [Last, updateLast] = useState("");

//   const trigger = (event) => {
//     let x = event.target.value;
//     updateTitle(x);
//   }

//   const trigger2 = (event) => {
//     let x = event.target.value;
//     updateLastName(x);
//   }

//   const UpdateName = (e) => {
//     e.preventDefault();
//     updateFullName(title);
//     updateLast(lastName);
//   }

//   return (
//     <div classNameName="container">
//       {/* <h3>Hello: {fullName} {Last}</h3> */}
//       <h3>Hello: {fullName + " " + Last}</h3>

//       <form onSubmit={UpdateName}>
//         <div classNameName="mb-3">
//           <label htmlFor="name" classNameName="form-label">Name:</label>
//           <input type="text" classNameName="form-control" id="name" onChange={trigger} value={title} />
//         </div>

//         <div classNameName="mb-3">
//           <label htmlFor="password" classNameName="form-label">Password:</label>
//           <input type="text" classNameName="form-control" id="password" onChange={trigger2} value={lastName} />
//         </div>
//         <button type="submit" classNameName="btn btn-primary btn-sm">Submit</button>
//       </form>

//     </div>
//   )
// }
// export default App;

// import React, { useState } from "react";

// const App = () => {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const trigger1 = (event) => {
//     setName(event.target.value);
//   }
//   const trigger2 = (event) => {
//     setEmail(event.target.value);
//   }
//   const trigger3 = (event) => {
//     setPassword(event.target.value);
//   }

//   const button = (e) => {
//     e.preventDefault();
//     console.log('submitted successfully...');

//   }

//   return (
//     <>
//       <div classNameName="container_2">
//         <h1>Name: {email}</h1>
//         <div classNameName="content_2">
//           <h1 classNameName='heading'>Login User</h1>

//           <div classNameName='form-cont'>
//             <input type="text" placeholder='Username' onChange={trigger1} value={name} />
//           </div>

//           <div classNameName='form-cont'>
//             <input type="text" placeholder='Email' onChange={trigger2} value={email} />
//           </div>

//           <div classNameName='form-cont'>
//             <input type="text" placeholder='Password' onChange={trigger3} value={password} />
//           </div>

//           <div classNameName='form-cont'>
//             <button onClick={button}>Submit</button>
//           </div>
//         </div>
//       </div>

//     </>
//   )

// }

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [fullName, setFullName] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   setFullName((oldpre) => {
//     return {
//       ...oldpre,
//       [name]: value,
//     }
//   })

//   const trigger = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);

//     const { name, value } = event.target;
//   };

//   return (
//     <>
//       <div classNameName="container_2">
//         <div classNameName="content_2">
//           <h1 classNameName="heading">Login User</h1>
//           <div classNameName="form-cont">
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={trigger}
//               name='name'
//               value={fullName.name}
//             />
//           </div>
//           <div classNameName="form-cont">
//             <input
//               type="text"
//               placeholder="Email"
//               onChange={trigger}
//               name='email'
//               value={fullName.email}
//             />
//           </div>
//           <div classNameName="form-cont">
//             <input
//               type="text"
//               placeholder="Password"
//               onChange={trigger}
//               name='password'
//               value={fullName.password}
//             />
//           </div>
//           <div classNameName="form-cont">
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default App;

// ===================================================================================================================================================================================================
// ===================================================================================================================================================================================================

// import React, { useState } from 'react';
// import Header from './keep/Header';
// import Add from './keep/Add';
// import Display from './keep/Display';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap';

// const App = () => {
//   const [addItem, setAddItem] = useState([]);

//   const addNote = (note) => {
//     setAddItem((oldData) => {
//       return [...oldData, note]
//     });
//     console.log(note);
//   }

//   const onDelete = (id) => {
//     setAddItem((preData) =>
//       preData.filter((currdata, index) => {
//         return index !== id;
//       })
//     );
//   }

//   return (
//     <>
//       <Header />
//       <Add keypass={addNote} />

//       <div className="container my-5" style={{'display': 'flex' ,'align-items': 'center', 'flex-wrap': 'wrap'}}>
//       {
//         addItem.map((val, index) => {
//           return <Display
//             key={index}
//             id={index}
//             title={val.title}
//             message={val.message}
//             deleteItem={onDelete}
//           />
//         })
//       }
//     </div>

//     </>
//   )

// }

// export default App;

// ===================================================================================================================================================================================================
// ===================================================================================================================================================================================================

// import React, { createContext } from 'react';
// import CreateContext from './Components/CreateContext';
// const firstName = createContext();

// const App = () =>{
//   return (
//     <>
//     <firstName.Provider value={"Salaim"}>
//       <CreateContext />
//     </firstName.Provider>
//     </>
//   )
// }

// export default App;
// export { firstName };

// import React, { useEffect, useState } from "react";
// const App = () => {
//   const [num, setnum] = useState(0);

//   useEffect(() => {
//     document.title = `you are click time: ${num}`;
//   });

//   return (
//     <>
//       <div className="container">
//         <button
//           onClick={() => {
//             setnum(num + 1);
//           }}
//         >
//           click {num}
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Router/Header.jsx";
import About from "./About";
import Contact from "./Contact";
import Search from "./Search";
import User from "./User";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user/:fname/:lastname" component={User} />
        <Route exact path="/search" component={Search} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
