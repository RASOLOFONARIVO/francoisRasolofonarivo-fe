
## Prérequis
* MS SQL 
* node 
* Avoir un token 
* Ajoute votre token au bearer Token de Postman 

### Installation du projet
npm install
npm run start

### Test API
#### Creation Token
Cree votre token avec postman sur l'api `http://127.0.0.1:8090/api/createJWT`

#### Verification Token
Api: `http://127.0.0.1:8090/api/verifyJWT`

#### Recuperation list des personnels
Api : `http://127.0.0.1:8090/api/getAllStaff`

#### Recuperation info personnel par id
Api pour l'id personnel = 1 : `http://127.0.0.1:8090/api/getAllStaff/1`

#### Ajouter un nouveau personnel
Api : `http://127.0.0.1:8090/api/addStaff`
Body JSON example : 
`{
    "firstname": "user 1 firstname",
    "lastname": "user 1 lastname",
    "date_of_birth": "15/11/2023",
    "address": "user 1 address",
    "nic": "123",
    "phone_number": "034"
}
`,# francoisRasolofonarivo-fe
