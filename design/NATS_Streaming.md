# Methods to implement event buses in microservices

There are two ways to implement event buses in microservices, and this time we use the NATS Streaming server in Method 2.

## Method1
In this method, a custom event bus is created using axios and express. While it can be implemented to meet specific needs, it has limitations in terms of performance and scalability.
<p align="center">
  <img width="550" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/72b3a0f2-6d84-4a09-8565-64fed28074ce">
</p>

## Method2
In this method, a dedicated messaging system is used. 
It has the advantage of being preloaded with implementations that improve performance and scalability, such as automatic retries and scaling.
<p align="center">
  <img width="718" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/0985ea2c-21ac-4df2-84cf-1da96a054d6c">
</p>


Messaging systems other than the NATS Streaming server are not used in this study for the following reasons.

### Apache Kafka
It is superior in long-term data storage and replay capability, but it requires more resources to do so.

### RabbitQ
Advanced messaging patterns such as transactions and prioritization are not intended for this project.

