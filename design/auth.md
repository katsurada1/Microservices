# Methods of authentication for each service
There are two possible authentication methods for each service. I have adopted the Method2, which includes JWT in the cookie of the user's request.

## Method1
Communicate synchronously to the auth service to check user information each time a request is made by the user.
<p align="center">
  <img width="923" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/7bae0362-3147-4bb3-a8f3-ee9737d43111">
</p>

## Method2
Each service checks the user's authentication information by including JWT in the cookie of the user's request.
<p align="center">
  <img width="778" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/a0b21c31-2bac-42e8-b05c-b438f476fbd2">
</p>

This method allows each service to verify tokens independently, reducing dependence on the auth service and improving scalability and performance. 
For improved security, the tokens have an expiration date, 
and the administrator must edit the data in the auth service directly when deactivating the tokens.
