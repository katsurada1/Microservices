# Methods to share common functions among services
There are three ways to share middleware such as authentication and validation, and common functions such as errors and events among services. 
Method3 is used in this case.

## Method1
In this method, common functions and logic are copied directly to each service.
While this method has excellent independence with no external dependencies, it is difficult to ensure consistency and is difficult to maintain.
<p align="center">
  <img width="318" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/302018b1-d1c6-41b5-8514-39d1d17c7769">
</p>

## Method2
In this method, common code is maintained in a separate repository, which is then incorporated into each service's repository as a sub-module. 
While the common code can be centrally managed and different versions can be used as needed, it is complex and difficult to manage.

<p align="center">
  <img width="325" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/f616449c-192f-48a6-a942-b31dc6fe7669">
</p>

## Method3
In this method, common functions are created as npm packages, which are imported and used by each service that needs them. 
Npm packages can be easily published, updated, and shared, and dependencies between packages can be resolved.
<p align="center">
  <img width="691" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/1a62aafc-6c7d-494a-8a23-65073e9e6c34">
</p>
