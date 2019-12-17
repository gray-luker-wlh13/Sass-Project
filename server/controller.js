module.exports = {
    getUserPost: async (req, res) => {
        const db = req.app.get('db');
        const userPosts = await db.get_posts(req.session.user.id);
        return res.status(200).send(userPosts);
    },

    getAllPost: async (req, res) => {
        const db = req.app.get('db');
        const allPosts = await db.get_all_posts();
        return res.status(200).send(allPosts);
    },

    getUser: (req, res) => {
        if(req.query.id){
            let user = these_posts.filter(val => val.id === +req.query.id)
            return res.status(200).send(user);
        }
        res.status(200).send(allPosts)
    }
}