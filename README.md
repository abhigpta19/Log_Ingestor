### Overview

This project implements a log ingestor system designed to efficiently handle vast volumes of log data. Additionally, it provides a simple interface for querying this data using full-text search or specific field filters. The system is built using the Express.js framework for the server and MongoDB as the database.

### Features

    Log Ingestor:
        Mechanism to ingest logs in a specified format.
        Scalability to handle high volumes of logs efficiently.
        Ingest logs via an HTTP server on port 3000 by default.
        MongoDB integration for storing log data.

    Query Interface:
        User interface (Web UI or CLI) for full-text search across logs.
        Filters based on log attributes such as level, message, resourceId, timestamp, traceId, spanId, commit, and metadata.parentResourceId.
        Efficient and quick search results.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.


* React-JS
* Node-JS
* MongoDB
* ExpressJS
* RestAPI
* Bootstrap
* html
* css
* JavaScript


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1.  Clone the repo
   ```sh
   git clone <github repo>
   ```
2.  Go to the Server Folder
   ```sh
   cd serve
   ```
3.  Install the dependencies
   ```sh
   npm install
   ``` 
4.  Start the Server
   ```sh
   nodemon index.js
   ```
5.  Open another terminal window for starting the client
  ```sh
   cd client
   ```
6.  Install the dependencies
   ```sh
   npm install
   ``` 
7.  Start the Client Deployment server on PORT 8000
   ```sh
   npm start
   ```

8. Open your browser and open localhost:8000 and you can see the frontend there.