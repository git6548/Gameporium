const router = require('express').Router();
const { User, Commentrate } = require('../../models');
//>>> withAuth
const withAuth = require('../../utils/auth');

// GET /api/users
router.get('/', (req,res) => {
    User.findAll({
        attributes: { exclude: ['password']}
    }).then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// GET /api/users/1
router.get('/:id', (req,res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Comment,
                attributes: ['id', 'game_id', 'comment_text', 'created_at']                
            },
            {
                model: Rate,
                attributes: ['game_id', 'rating']                
            }
        ]
        }).then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// POST /api/users
router.post('/', (req,res) => {
    // expects {username: <>, email: <>, passwprd: <>, genre_preference: <>}
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        genre_preference: req.body.genre_preference
    }).then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;            
            req.session.loggedIn = true;

            res.status(200).json();
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// POST (login) /api/users/login
router.post('/login', (req,res) => {
    // expects {email: '<>', password: '<>'}
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }
    
        const validPassword = dbUserData.checkPassword(req.body.password);
    
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
        
            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});

// POST (logout) /api/users/logout
router.post('/logout', (req,res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
})

// PUT /api/users/1
router.put('/:id', withAuth, (req,res) => {
    // expects {username: <>, email: <>, passwprd: <>}
    User.update(req.body, {
        individualHooks:true,
        where: {
            id: req.params.id
        }
    }).then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// DELETE /api/users/1
router.delete('/:id', withAuth, (req,res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})



module.exports = router;