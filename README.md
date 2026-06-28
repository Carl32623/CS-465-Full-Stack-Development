**Architecture**

The customer side of the Travlr Getaways web applicationuses Express with Handlebars to generate HTML on the server side. This dynamicallyrenders content before it is sent to the browser and displays travel packageinformation to the customer. The admin side uses Angular as an SPA or SinglePage Application. Angular loads a single page and updates content dynamically.Javascript is used throughout both sides to provide interactivity, handle useractions, and communicate with backend servers.

The backend uses a NoSQL MongoDB database, providing a flexibledocument base structure. MongoDB stores data in JSON documents, making it easyto exchange data between the database, server, and frontend. This allows our applicationto store trip information without requiring a schema structure that is commonin relational databases.

**Functionality**

JSON serves as the common language between the frontend andbackend of our application. When the Angular admin page requests information,the Express API returns the data as JSON and when new tip data is created orupdated, JSON is sent from the frontend to the backend API and stored in MongoDB.

Throughout this project, I have refactored code to improvefunctionality and efficiency. For example, transitioning from static tripinformation stored in application files to retrieving trip package data throughAPI endpoints connected to MongoDB. Another example includes creating reusableAngular components that can be used throughout multiple pages instead of redundantcode.

**Testing**

API endpoints were tested using Postman to make sure thatrequests returned expected results. I tested GET requests to retrieve tripinformation from the database, POST requests to create new records, and PUTrequests to update existing records.

**Reflection**

Before this course, I had limited experience to developing acomplete full stack application. I have gained experience working with frontendframeworks, backend development, creating RESTful APIs, database integration,and implementing security and authentication. I have learned about Angular,Express, Node.js, and authentication using JSON Web Tokens, while strengtheningmy skills with MongoDB and API development. I have also gained experiencetesting APIs with Postman. This course has given me confidence in my ability todesign, build, test, and maintain a complete web application from frontend interfacesto backend databases.
