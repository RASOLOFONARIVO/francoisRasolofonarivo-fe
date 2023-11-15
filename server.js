var staff = require('./src/models/staff');
const staffController = require('./src/controllers/staffController');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
const jwt = require('jsonwebtoken');
const security = require('./src/middlewares/security');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request,response,next)=>{
   console.log('middleware');
   next();
})
 
// Endpoint pour recuperer la liste des personnels
router.route('/getAllStaff').get(security.checkJWT, (request,response)=>{

    staffController.getAllStaff().then(result => {
       response.json(result[0]);
    })

})

// Endpoint pour recuperer un personnel par id
router.route('/getStaff/:id').get(security.checkJWT, (request,response)=>{

    staffController.getStaff(request.params.id).then(result => {
       response.json(result[0]);
    })

})

// Endpoint pour créer un personnel
router.route('/addStaff').post(security.checkJWT, (request,response)=>{
   staff = {...request.body}

   staffController.addStaff(staff).then(result => {
      response.json({ message: 'Record created successfully' });
   })

})

// Endpoint pour créer un JWT
router.route('/createJWT').post((request,response)=>{

   const user = { 
      name:"admin"
   };
   const token = jwt.sign(user, 'adminpass');
   response.json({ token });

})

// Endpoint pour vérifier si le jeton est valide
router.route('/verifyJWT').get(security.checkJWT, (request,response)=>{
   response.json({ message: 'Token is valid' });
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Server API is runnning at ' + port);



