const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, password, isAdmin} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let user = await db.check_user(username);
        user = user[0];
        if(user){
            return res.status(400).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user([isAdmin, username, hash]);
        newUser = newUser[0];
        session.user = {isAdmin: user.isAdmin, username: user.username, id: user.id};
        res.status(200).send(session.user);
    },

    login: async (req, res) => {
        const {username, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let user = await db.check_user(username);
        user = user[0];
        if(!user){
            return res.status(400).send('User not found')
        }
        let authenticated = bcrypt.compareSync(password, user.hash);
        if(authenticated){
            delete user.password;
            session.user = {isAdmin: user.is_admin, username: user.username, id: user.id};
            res.status(200).send(session.user);
        } else {
            return res.status(400).send('Wrong username or password')
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}