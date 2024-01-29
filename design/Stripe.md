# The implementation for credit card payments

The payment service provider Stripe API is used as the implementation for credit card payments. Details of this method are provided below.
<p align="center">
  <img width="682" alt="image" src="https://github.com/katsurada1/Microservices/assets/91961057/dafcb9ac-9f76-465a-8000-fb8af86a30ab">
</p>

### 1. Obtaining credit card information:.
The user enters credit card information in the browser.
### 2. Sending to Stripe API: 
The credit card information is sent directly from the browser to the Stripe API.
### 3. Token Generation: 
Stripe receives the credit card information and generates a unique token based on it.
### 4. Receiving the token: 
The generated token is returned to the browser and then sent to the server side (payments service) to process the payment.
### 5. Processing on the server side
The payments service uses the received token and orderId to perform the actual financial transaction via the Stripe API. This transaction includes the token, currency, and amount.
### 6. Payment completion:.
Stripe processes the payment and returns the result to the payments service. This service confirms that the payment was successful, updates the associated database records, and notifies other systems and services.
