# ticketing 
## Description
This is a simple ticketing e-commerce application I developed for learning purposes. It supports the following functions.
- Creating, editing, and deleting tickets
- Ordering tickets
- Purchasing tickets
<p align="center">
  <img width="793" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/49196847-88b0-4c94-97b6-83bcf99b622b">
</p>


## App overview
This ticket app is a microservice application consisting of small independent services: six services running in the background: 
Auth, Client, Tickets, Orders, Payments, and Expiration. 
They are deployed in a Kubernetes cluster, and an ingress controller handles the load balancing of traffic from the outside to each service. 
Because the app follows a microservice architecture, these services do not communicate directly. 
Instead, events issued each time a service performs a task are sent to the NATS-Streaming Server, 
which is used as the Event Bus, and then sent to the appropriate service using the Pub-Sub model.
<p align="center">
  <img width="730" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/8c367d01-813c-47d2-a9a5-6ea6074f1a3b">
</p>

## Client service

### Overview
The Client service provides the React app, which communicates with other services based on user actions. 
For example, when a user enters title and price to create a ticket and clicks the 'Submit' button, an HTTP POST request is sent to the tickets service.

## Auth service
### Overview
The auth service provides functions related to user authentication. 
The main functions are signup(user registration), signin, signout, and retrieval of current user information. 
During signup, user information is registered in the database, 
and JWT is generated on the server side for session management. 
There is also middleware that adds authenticated user information to the request object using JWT, so once a user has logged in, there is no need to signin again.
### routes
<p align="center">
  <img width="597" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/3efb68bc-1bc3-444d-a977-ef6563ac87c7">
</p>

### data model
<p align="center">
  <img width="267" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/450e25e7-829f-4947-8f68-dca12f331e13">
</p>

## Tickets service

### Overview
The Tickets service provides the functions to create, retrieve, and update tickets, 
and it publishes for events through the NATS Streaming server. 
It also maintains its own MongoDB database to store all tickets created or updated.

### routes
<p align="center">
  <img width="577" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/741ef9ee-bd51-4bdd-9773-aaa5ea3d6aef">
</p>

### data model
<p align="center">
  <img width="178" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/286bbe53-89c2-4e74-81c1-006c7db8ffeb">
</p>

### Events
Events of this service have the following types and are issued to other services as shown in the figure below.
### ticket:created
<p align="center">
  <img width="835" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/cd8a0c6e-d172-4361-af6a-605872f03d27">
</p>

### ticket:updated
<p align="center">
  <img width="832" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/c1326297-2e0b-494c-be7c-4d0c50533171">
</p>

## Orders service

### Overview
The orders service provides the ability to create, retrieve, and delete orders for tickets, and publishes events through the NATS Streaming server.
It also maintains its own MongoDB database to store all tickets created or updated.

### routes
<p align="center">
  <img width="594" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/5bf6cc9b-4cd3-4bfc-8387-6c75b2810bd2">
</p>

### data model
<p align="center">
  <img width="427" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/d2a3df90-e49c-45c7-ad90-526bd8a321ca">
</p>

### Events
Events of this service have the following types and are issued to other services as shown in the figure below.
### order:created
<p align="center">
  <img width="917" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/bbd94567-1816-414f-8bbf-661a751f371f">
</p>

### order:cancelled
<p align="center">
  <img width="914" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/2a2cfc0a-c6b3-4ce4-b7d6-26711c9e7bbd">
</p>

## Payments service

### Overview
The payments service provides the ability for users to make payments for orders, processing payments using Stripe, 
recording payment information in a database, and publishing events through the NATS Streaming server.

### routes
<p align="center">
  <img width="672" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/4d5420d8-af15-446f-90e1-c1b2d1c4b63c">
</p>

### data model
<p align="center">
  <img width="341" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/80af3215-f339-43fe-85f4-6145c25829f0">
</p>

### Events
Events of this service have the following types and are issued to other services as shown in the figure below.
### payment:created
<p align="center">
  <img width="832" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/1006df46-437e-4031-bebe-38730d2b3119">
</p>


## Expiration service

### Overview
The expiration service manages the expiration date of an order when it is created and schedules a job in the queue to perform an update of the orderStatus when it expires.

### Events
Events of this service have the following types and are issued to other services as shown in the figure below.
### expiration:complete
<p align="center">
  <img width="835" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/0c6f5d2b-13ed-4a8b-947e-ea384067ad19">

</p>




