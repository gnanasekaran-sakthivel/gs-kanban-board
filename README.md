# Kanban Board (gs-kanban-board)

## Description

This application is called GS Kanban Board. This application maintains a kanban board for several users.
Users can enter tickets for themselves and other users. Tickets can be in one of the three states: To Do, In Progress, and Done.

## Usage

Here are the use cases from the client side:

- User can login
- User can access the kanban board of tickets
- User can add a new ticket to one of the three stages
- User can edit an existing ticket
- User can move a ticket from one stage to another
- User can delete a ticket
- User can logout

Following are some screenshots of the application.

![main screenshot](/assets/HomePage.jpg)

![login page screenshot](/assets/LoginPage.jpg)

![board page screenshot](/assets/LoggedIn_KanbanBoard_Page.jpg)

![edit page screenshot](/assets/EditPage.jpg)

## Technical Usage

Kanban board has a client and a server side. This is a node project. On the client side, it uses Vite to run.
On the server side, it uses Express to run. Once we install, build and start both the client and the server, we can access the client using localhost:3000. Server will be running on port 3001 and client on port 3000.

When a user logs in, once the credentials are correct, there will be a JWT token that will be given back for further communications from the client. This token has 1 hour expiration period.

### Client side

Client side uses Vite library to serve the application on the browser.

### Server side

Server side uses Express library to host and server the API.

Server app serves the following endpoints.

- **/** This serves the index.html page
- **/auth/login/** This is a POST target which sends back weather for a given city.
- **/api/users/** This is a GET to get all the users
- **/api/users/id** This is a GET request to get a user by a specific id
- **/api/users/** This is a POST request to create a new user
- **/api/users/id** This is a PUT request
- **/api/users/id** This is a DELETE endpoint to delete a specific user by id

- **/api/tickets/** This is a GET endpoint to get all the tickets
- **/api/tickets/id** This is a GET endpoint to get a ticket by its id
- **/api/tickets/** This is a POST endpoint to create a new ticket
- **/api/tickets/id** This is a PUT endpoint to update an existing ticket
- **/api/tickets/id** This is a DELETE endpoint to delete a specific ticket by id

## Credits

Most of the client code and part of the server code were provided by edX bootcamp training.
