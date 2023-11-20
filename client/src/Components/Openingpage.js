import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <h1 className="mb-4">Log Management System</h1>

              <div className="mb-4">
                <Link to="/About">
                  <button type="button" className="btn btn-primary btn-lg mr-3">
                    Input Logs
                  </button>
                </Link>

                <Link to="/Problem">
                  <button type="button" className="btn btn-success btn-lg">
                    Search Logs
                  </button>
                </Link>
              </div>

              <p className="text-muted">Welcome to our Log Management System. Choose an option to get started.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
