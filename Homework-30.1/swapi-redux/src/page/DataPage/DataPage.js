import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, fetchData } from "../../actions/swapiActions";
import { Button } from 'react-bootstrap';

import Spinner from "../../components/Spinner/Spinner";
import "./DataPage.css";

const DataPage = ({ category, CardComponent, title }) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.swapi);

  useEffect(() => {
    dispatch(fetchData(category));
  }, [dispatch, category]);

  const handleClear = () => {
    dispatch(clear());
  };
  

  return (
    <div className="container">
      <h1>{title}</h1>
      {loading && <Spinner />} 
      {error && <div>Error: {error.message}</div>}
      <div className="cards">
        {data.map((item, index) => (
          <CardComponent key={index} item={item} />
        ))}
      </div>

      <footer>
      <Button className="clear" variant="danger" onClick={handleClear}>Clear</Button>
    </footer>
    </div>
  );
};

export default DataPage;
