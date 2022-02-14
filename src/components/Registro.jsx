import axios from "axios";
import React, { useState } from "react";
import "./styles/style.css";

export const Registro = () => {
  const url = "https://simulacro-camilo.herokuapp.com/VideoGames/";

  const [juego, setJuego] = useState({
    name: "",
    img: "",
    desc: "",
  });

  const { name, img, desc } = juego;

  const postData = () => {
    axios
      .post(url, juego)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    alert("Juego guardado");
  };

  const handleChanged = ({ target }) => {
    setJuego({
      ...juego,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>REGISTRO</h1>
      <div className="container2">
        <form onChange={handleSubmit}>
          <div className="ingreso">
            <label>Título del juego</label>
            <input id="inputName" type="text" name="name" value={name} onChange={handleChanged}/>
          </div>
          <div className="ingreso">
            <label>Imágen del juego</label>
            <input id="inputImagen" type="text" name="img" value={img} onChange={handleChanged}/>
          </div>
          <div className="ingreso">
            <label>Descripción del juego</label>
            <textarea
              className="describir"
              id="inputDescripcion"
              type="textarea"
              name="desc"
              value={desc}
              onChange={handleChanged}
            ></textarea>
          </div>
          <button onClick={() => postData()}>Guardar</button>
        </form>
      </div>
    </div>
  );
};
