import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/style.css";

export const Home = () => {
  const url = "https://simulacro-camilo.herokuapp.com/VideoGames/";
  const [datos, setDatos] = useState([]);
  const [name, setName] = useState("Juego");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("SuperCool");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setDatos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(url + id)
      .then((response) => {
        getData();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1> GUARDA TUS VIDEOJUEGOS FAVORITOS </h1>
      <div className="container">
        {datos.map((info) => (
          <div className="card">
            <div>
              <h2>{info.name}</h2>
              <img src={info.img} width="200px" alt="portada" />
              <p>{info.desc}</p>
              <button onClick={()=> deleteData(info.id)}>Borrar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
