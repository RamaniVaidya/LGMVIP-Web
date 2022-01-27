import React, { useState } from "react";
import {Bars} from "react-loader-spinner";

import "./App.css";

const App = () => {
  const [data, setdata] = useState([]);
  const [spinner, setSpinner] = useState(false);


  const getUsers = async () => {
    setSpinner(true)
    await fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => {
        setdata(data.data);
        setSpinner(false)

      });
  };

  return (
    <div>
      <h1>notebook.com</h1>
      <h2><button onClick={getUsers}>GET USERS</button></h2>

      <div className="loader">
        <br></br>
        <br></br>
        <Bars

          type="Puff"
          color="#0d0d0d"
          height={100}
          width={100}
          visible={spinner}
        />
        <br></br>
      </div>  
      <ul className="grid-box">
        {data.map((ele) => {
          return (
            <li className="box" key={ele.id}>
              <ul className="contents">
                <img className="image" src={ele.avatar} alt="images"/>
                <li>ID : {ele.id} {"\n"}</li>
                <li>{ele.first_name} {ele.last_name}</li>
                <li>{ele.email}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
