# Methods of communication between k8s cluster and outside

There are two main possible methods of communication between the kubernetes cluster and the outside world In this case, we chose the second method, using a load balancer.

## Method 1

Open a specific port (NodePort) of each pod and allow external access to the pod through that port.
<p align="center">
  <img width="871" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/2aafe6e4-ce04-4e0a-8b22-e9a00a8b4169">
</p>

## Method2
An external loadbalancer receives the traffic and distributes it to the appropriate pod in the kubernetes cluster, identified by Cluster IP.
This method was chosen because it is superior to Method 1 in terms of flexibility and scalability.
<p align="center">
  <img width="959" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/fa217633-f3ff-49bc-9e2a-fb7c678f2f83">
</p>


