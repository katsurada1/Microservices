# Methods to implement the expiration service 

There are three ways to implement the expiration service for managing order expiration dates, and Method3 is used in this case.

## Method1
In this method, the setTimeout function is used within the expiration service to execute the process when 15 minutes have elapsed since the order was placed. 
It is easy to implement, but has the disadvantage that all timer information is lost if the expiration service goes down.

<p align="center">
  <img width="486" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/dc02fbc7-a25b-4136-9bdc-a9583eea3aca">
</p>


## Method2
In this method, the order:created event is sent to the event bus immediately after it is received, and the event bus manages to issue an expiration event to the other services after 15 minutes.
No information is lost if the expiration service goes down, 
but the event bus is overloaded and periodic communication makes it difficult to distinguish between retries and other anomalous traffic.
<p align="center">
  <img width="403" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/fbee05cd-fd88-4468-932e-067df2934691">
</p>

## Method3
This method uses Bull JS and Redis to implement a queue that is triggered 15 minutes after an order is created. 
This method is preferred for scalability and reliability.
<p align="center">
  <img width="476" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/5ac9899d-8e09-49be-8bcf-655543bdc784">
</p>
