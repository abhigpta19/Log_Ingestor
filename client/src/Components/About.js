import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const LogIngestionForm = () => {
  const [logData, setLogData] = useState({
    level: '',
    message: '',
    resourceId: '',
    timestamp: '',
    traceId: '',
    spanId: '',
    commit: '',
    metadata: {
      parentResourceId: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the name contains dots, it means it's a nested field
    const nameParts = name.split('.');

    if (nameParts.length === 1) {
      // If it's not a nested field, update directly
      setLogData((prevLogData) => ({
        ...prevLogData,
        [name]: value,
      }));
    } else if (nameParts.length === 2) {
      // If it's a nested field, update using a shallow copy
      setLogData((prevLogData) => ({
        ...prevLogData,
        metadata: {
          ...prevLogData.metadata,
          [nameParts[1]]: value,
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/hello',logData)
        .then(res =>{
          alert("successfully pushed")
        })
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="mb-4 text-center">Log Ingestion Form</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="level">Level:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="level"
                    name="level"
                    value={logData.level}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="message"
                    name="message"
                    value={logData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="resourceId">Resource ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="resourceId"
                    name="resourceId"
                    value={logData.resourceId}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="timestamp">Timestamp (YYYY-MM-DDTHH:mm:ssZ):</label>
                  <input
                    type="text"
                    className="form-control"
                    id="timestamp"
                    name="timestamp"
                    value={logData.timestamp}
                    onChange={handleChange}
                    placeholder="YYYY-MM-DDTHH:mm:ssZ"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="traceId">Trace ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="traceId"
                    name="traceId"
                    value={logData.traceId}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="spanId">Span ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="spanId"
                    name="spanId"
                    value={logData.spanId}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="commit">Commit:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="commit"
                    name="commit"
                    value={logData.commit}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="parentResourceId">Parent Resource ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="parentResourceId"
                    name="metadata.parentResourceId"
                    value={logData.metadata.parentResourceId}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Ingest Log
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIngestionForm;
