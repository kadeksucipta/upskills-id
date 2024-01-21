import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./MobileDev.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MobileDev = () => {
  const [product, setProduct] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchClass()
    fetchTags()
  }, [])

  const fetchClass = () => {
    fetch(`http://localhost:8000/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      });
  };

  const fetchTags = () => {
    fetch(`http://localhost:8000/api/tags`)
      .then((res) => res.json())
      .then((data) => {
        setTags(data);
      });
  };

  return (
    <React.Fragment>
      <Sidebar />
      <div className="container-class">
        <div className="tag-class">
          {tags.map((item, index) => (
            <button key={index} value={tags} className="btn-tags">
              {item.name}
            </button>
          ))}
        </div>
        <div className="head-card-mdev">
          {product.map((item, index) => (
            <div key={index} className="card-mdev">
              <div className="header-card">
                <img
                  src={"http://localhost:8000/images/" + item.image_url}
                />
              </div>
              <div className="body-card">
                <h3>{item.name}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p><FontAwesomeIcon icon={faStar}/> {item.rate}</p>
                <hr />
                {item.tags.map((value, index) => (
                    <button key={index}>{value.name}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileDev;
