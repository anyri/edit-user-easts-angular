const express = require('express');
const app = express();
const data = require('./user-sample.json');
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/api/users', (req, res) => { 
  setTimeout(() => res.send({ status: 'ok', users: data }), 1200);
});

app.put('/api/users', (req,res) => {
  let userid = req.query.id;
  if(userid) {
    let user = data.find(user => user.userid == userid);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.tel = req.body.tel;
    user.devices = req.body.devices;
    setTimeout(() => res.send({ status: 'ok', updateduser: user}), 700);
  } else {
    setTimeout(() => res.send({status: 'fail', message: 'Update Failed'}), 700);
  }
})
 

app.get('/api/user', (req, res) => {
  const id = req.query.id;
  let user;

  if(id){
    user = data.find(user => user.userid === id);

    if(user) 
      setTimeout(() => res.send({ status: 'ok', user: user}), 700);
    else
      setTimeout(() => res.send({ status: 'fail', message: 'User not found'}), 700);
      
  } else
      setTimeout(() => res.send({ status: 'fail', message: 'User not found'}), 700);
});



app.get('/api/test', (req, res) => {
  res.send('Hello World!');
});

app.listen(3003, () => {
  console.log('Example app listening on port 3003!');
}); 
