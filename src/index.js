import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";

ReactDOM.render(
  <>
    <h1 className="heading_style">List of some good series</h1>
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
      title="A netflix original series"
      sname="The Breaking Bad"
      link="https://www.netflix.com/in/title/70143836?source=35"
    ></Card>
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg"
      title="A nickalodiean original series"
      sname="Avatar: The last air bender"
      link="https://www.imdb.com/title/tt0417299/"
    ></Card>
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BMTA4ODE4NjA5ODleQTJeQWpwZ15BbWU4MDUxMTQ0NTYx._V1_.jpg"
      title="A netflix original series"
      sname="Limitless"
      link="https://www.imdb.com/title/tt4422836/"
    ></Card>
  </>,
  document.getElementById("root")
);
