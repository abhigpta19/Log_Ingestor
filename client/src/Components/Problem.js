import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const LogSearchForm = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    level: { value: '', enabled: false },
    message: { value: '', enabled: false },
    resourceId: { value: '', enabled: false },
    timestamp_range: { value: '', enabled: false },
    traceId: { value: '', enabled: false },
    spanId: { value: '', enabled: false },
    commit: { value: '', enabled: false },
    parentResourceId: { value: '', enabled: false },
  });
 
  const handleCheckboxChange = (param) => {
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      [param]: {
        ...prevSearchParams[param],
        enabled: !prevSearchParams[param].enabled,
      },
    }));
  };

  const handleChange = (e, param) => {
    const { value } = e.target;
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      [param]: {
        ...prevSearchParams[param],
        value,
      },
    })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/find',searchParams)
        .then(res =>{
          console.log(res.data)
          alert(JSON.stringify(res.data))
        })
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="mb-4 text-center">Log Search Form</h2>

              <form onSubmit={handleSubmit}>
                {Object.keys(searchParams).map((param) => (
                  <div key={param} className="form-group">
                    <label htmlFor={param}>{param.charAt(0).toUpperCase() + param.slice(1)}:</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <input
                            type="checkbox"
                            id={`checkbox-${param}`}
                            checked={searchParams[param].enabled}
                            onChange={() => handleCheckboxChange(param)}
                          />
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id={param}
                        name={param}
                        value={searchParams[param].value}
                        onChange={(e) => handleChange(e, param)}
                        disabled={!searchParams[param].enabled}
                      />
                    </div>
                  </div>
                ))}

                <button type="submit" className="btn btn-primary btn-block">
                  Search Logs
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogSearchForm;

