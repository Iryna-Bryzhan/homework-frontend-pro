import React from "react";
import "./cards.css";

const FilmCard = ({ item }) => {
  return (
    <div className="card card-films">
      <div className="card-body">
        <div className="card-title">{item.title}</div>
        <p><strong>Opening crawl:</strong> {item.opening_crawl}</p>
        <p><strong>Director:</strong> {item.director}</p>
        <p><strong>Producer:</strong> {item.producer}</p>
        <p><strong>Release date:</strong> {item.release_date}</p>
      </div>
    </div>
  );
};

export default FilmCard;