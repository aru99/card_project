import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <div className="cards">
      <div className="card">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
          alt="random photograph"
          className="card_img"
        />
        <div className="card_info">
          <span className="card_category"> A netflix original series</span>
          <h3 className="card_title"> The Breaking Bad</h3>
          <a
            href="https://www.netflix.com/in/title/70143836?source=35"
            target="_blank"
          >
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>,

  document.getElementById("root")
);
