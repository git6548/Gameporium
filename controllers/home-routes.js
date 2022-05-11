const router = require('express').Router();
// const { games } = require('../data/games.json');
const sequelize = require('../config/connection');
const {  User, Commentrate  } = require('../models');
const axios = require('axios');

//GET all games on the front-end
router.get('/', (req,res) => {
    axios.get('https://www.giantbomb.com/api/games/?api_key=' + process.env.API_KEY + '&limit=100&format=json')
    // https://www.giantbomb.com/api/games/?api_key=' + process.env.API_KEY + '&limit=50&sort=original_release_date&format=json
        .then(function(response) {              
            const games = response.data.results;      
            res.render('homepage', { games, loggedIn: req.session.loggedIn });
            
        }).catch(function(error) {
            console.log(error);
        })
    
});

//login
router.get('/login', (req,res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }    
    res.render('login');
});

// GET single game
router.get('/:guid', (req,res) => {
    axios.get('https://www.giantbomb.com/api/game/'+ req.params.guid + '/?api_key=' + process.env.API_KEY + '&format=json')
        .then(function(response) {
            const game = response.data.results
            Commentrate.findAll({
                where: {
                    game_id: req.params.guid
                },
                attributes: ['comment_text', 'rating', 'created_at'],
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    }
                ],
                raw: true
            }).then(function(dbCommentData) {
                if(!dbCommentData) {
                    // res.status(404).json({ message: 'No post found with this id' });
                    res.render('single-post', { game, loggedIn: req.session.loggedIn });
                    return;
                } else {                                   
                    res.render('single-post', { game, dbCommentData, loggedIn: req.session.loggedIn });
                }                
            })
            
        }).catch(function(error) {
            console.log(error);
        })
});

// GET comments and ratings
router.get('/:id', (req,res) => {
    // Commentrate
})

module.exports = router;


