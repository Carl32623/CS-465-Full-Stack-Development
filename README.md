**Architecture**

The customer side of the Travlr Getaways web application uses Express with Handlebars to generate HTML on the server side. This dynamically renders content before it is sent to the browser and displays travel package information to the customer. The admin side uses Angular as an SPA or SinglePage Application. Angular loads a single page and updates content dynamically. Javascript is used throughout both sides to provide interactivity, handle user actions, and communicate with backend servers.

The backend uses a NoSQL MongoDB database, providing a flexible document base structure. MongoDB stores data in JSON documents, making it easy to exchange data between the database, server, and frontend. This allows our application to store trip information without requiring a schema structure that is common in relational databases.

**Functionality**

JSON serves as the common language between the frontend and backend of our application. When the Angular admin page requests information, the Express API returns the data as JSON and when new tip data is created or updated, JSON is sent from the frontend to the backend API and stored in MongoDB.

Throughout this project, I have refactored code to improve functionality and efficiency. For example, transitioning from static trip information stored in application files to retrieving trip package data through API endpoints connected to MongoDB. Another example includes creating reusable Angular components that can be used throughout multiple pages instead of redundant code.

**Testing**

API endpoints were tested using Postman to make sure that requests returned expected results. I tested GET requests to retrieve trip information from the database, POST requests to create new records, and PUT requests to update existing records.

**Reflection**

Before this course, I had limited experience in developing a complete full stack application. I have gained experience working with frontend frameworks, backend development, creating RESTful APIs, database integration, and implementing security and authentication. I have learned about Angular, Express, Node.js, and authentication using JSON Web Tokens, while strengthening my skills with MongoDB and API development. I have also gained experience testing APIs with Postman. This course has given me confidence in my ability to design, build, test, and maintain a complete web application from frontend interfaces to backend databases.
