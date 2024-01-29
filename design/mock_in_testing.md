# Methods to implement tests that do not affect the production environment

There are several methods to ensure that data and behavior during testing do not affect the production environment. 
In this case, I specifically used event bus mock to avoid using the event bus for testing within each service.

## Method：Event Bus mock
Mock the NATS client's publish function using Jest, so that when an event is issued within a service, the callback function is immediately called to act as if the event was successfully issued.
Since this test was conducted in the early development stage, I did not test using the actual event bus, but I believe that this will be necessary in the future.
<p align="center">
  <img width="851" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/503f047e-81b1-438c-b3af-008728475202">
</p>

## Other methods(Future Prospects)
### Switching settings using environment variables
Configure the application to use environment variables to switch between the test and production environment event buses. During testing, the test-only event bus is used, while the production event bus is used in production.
## Containerized test environment
Use container technology, such as Docker, to create independent environments for testing. This allows you to run tests in an isolated environment, separate from the production environment.

