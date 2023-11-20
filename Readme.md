CIBA with keycloak example




What is CIBA? It is client initiated backchannel authentication and it allows your keycloak client to initiate the login to a 3rd party. Uses cases for this could be a mobile app that wanted to sign in to an application. In the traditional code flow model, user is required to login and enter their password. With CIBA, we use your client to login automatically

Start up your keycloak docker instance by replacing the <your-host-up> below. If you're using windows, you can do ipconfig and you should get something like  192.168.1.70. Then replace it so keycloak can discover your node app.

docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:22.0.5 start-dev  --spi-ciba-auth-channel-ciba-http-auth-channel-http-authentication-channel-uri=http://<your-host-ip>:3000/request --log-level=DEBUG

Then clone the following program to https://github.com/mitzen/keycloak-ciba-sample.  Run 

npm install

npm run start 

This will start up a fake relying party on port 3000.

Your keycloak instance will be running on localhost port 8080. 

2. Create a realm called test2. 

3. Then create a user called jarvis.

Then download the postman.

4.Open up CIBA.postman_collection.json
5. Replace the the client secret then you can execute Step 1 

Then you will also see output from your node js application


Copy and paste the "auth_req_id" - so you can use that in step2. After say 10-20 sec, click on send. You will see that keycloak is saying authorization is pending. 


Let's assume it is the real thing and relying party has initiated some sort of security authentication to the user. 

Step 3 is basically a fake of what you see if everything goes well.