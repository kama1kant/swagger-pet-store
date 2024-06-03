# UI for Swagger Pet Store

### Prerequisite
This repository is the client side code based on https://github.com/swagger-api/swagger-petstore for its backend services.
Run the docker provided by swagger before you build the UI.
```
docker pull swaggerapi/petstore3:unstable
docker run  --name swaggerapi-petstore3 -d -p 8080:8080 swaggerapi/petstore3:unstable
```

### Steps to setup
1. Clone the git repository
```
git clone https://github.com/kama1kant/swagger-pet-store.git
```
2. Install packages
```
sudo npm install
```
3. Run the test cases
```
sudo npm run test
```
4. Start the server
```
sudo npm run dev
```
5. Open http://localhost:3000 in your browser

### Screenshots & Screenrecord
1. Screen recording of the web app
https://www.loom.com/share/a610bf1b2c5d4c7db3f381557cd7cf56
<br><br><br>
3. Screenshot of the Sign In page<br>
<img width="1842" alt="Screenshot 2024-06-02 at 8 47 14 AM" src="https://github.com/kama1kant/swagger-pet-store/assets/1781549/fa184930-1828-4bdd-8984-e416fddf4aa7">
<br><br><br>
4. Screenshot of the Dashboard page<br>
<img width="1848" alt="Screenshot 2024-06-02 at 8 49 03 AM" src="https://github.com/kama1kant/swagger-pet-store/assets/1781549/c7119783-7305-4f01-ae61-e7e201e44a97">
<br><br><br>
3. (iPad) Screenshot of the Dashboard page<br>
<img width="824" alt="Screenshot 2024-06-02 at 8 49 46 AM" src="https://github.com/kama1kant/swagger-pet-store/assets/1781549/3db73669-4823-4f9f-a3cd-febdc610338c">
<br><br><br>
4. (iPhone) Screenshot of the Dashboard page<br>
<img width="535" alt="Screenshot 2024-06-02 at 8 49 34 AM" src="https://github.com/kama1kant/swagger-pet-store/assets/1781549/a278b969-1a54-423d-afd1-00e914a4ac7e">

### Libraries used
1. Next js
2. React js
3. Tailwind
4. Jest
