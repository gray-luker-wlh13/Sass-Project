require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl = require('./authController'),
      ctrl = require('./controller'),
      auth = require('./middleware/authMiddleware'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();

app.use(express.json());
// app.use(express.static(`${__dirname}/../build`))
// app.use(function(req, res){
//     console.log('custom top level middleware')
// });

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
}));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
});

//auth endpoints
app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/login', authCtrl.login);
app.post('/api/auth/logout', authCtrl.logout);

//posts
app.get('/api/post/user', auth.usersOnly, ctrl.getUserPost);
app.get('/api/post/all', auth.usersOnly, auth.adminsOnly, ctrl.getAllPost);
app.get('/api/post', auth.usersOnly, ctrl.getUser);

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on ${port}`));