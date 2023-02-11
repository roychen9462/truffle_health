# Truffle Health - Software Engineering Internship Assessment

### Usage
1. Initialize new project
```
npm init
```

2. Install all needed packages
```
npm install express dotenv
```

3. Run the app
```
node server.js
```
After seeing `Listening on port 8000` on your console, the server is running correctlly.

4. Open your browser and search `localhost:8080`.

5. Testing: Please use the sample date provided in sample.txt to test GET and POST API

### API Description

> GET

After sending a GET request to "/" route of server, you will get a response with all patients' bill information

> POST

Receiving a POST request with form data in the body, the data would be collected and store in database.

Form body: firstName, lastName, address, dateOfService, billAmount

### Demo Video

[YouTube](https://www.youtube.com/watch?v=LiWxCjA4YW0)
