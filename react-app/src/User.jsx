import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import Header from "./Router/Header";

const Contact = ({ match }) => {
  const {fname, lastname} = useParams();
  const location = useLocation();
  const History = useHistory();
  console.log(location.pathname);

  return (
    <>
      <Header />
      <h1>welcome to {fname}  {lastname} {location.pathname} Section</h1>
      {location.pathname === `/user/ali/ali` ?
      <button onClick={() => History.push("/")}> submit </button> : ''
      }
    </>
  );
};
export default Contact;
