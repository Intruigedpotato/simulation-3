require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    cors = require('cors');

const port = 3010;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    db.find_user([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            const user = profile._json;
            db.create_user([user.given_name, user.family_name, user.email, user.picture, user.identities[0].user_id, user.gender])
                .then(user => {
                   
                    return done(null, user[0].id)
                })
        }
    })
}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: '/auth'
}));

app.get('/auth/me', (req, res) => {
    if(!req.user) {
        return res.status(400).send("User not found.")
    }
    return res.status(200).send(req.user);
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302,'http://localhost:3000/#/')
}
)

app.get('/api/users', (req, res, next) => {
    const db = req.app.get('db');
    db.get_all_users()
        .then(users => {
            return res.status(200).send(users)
        })
    .catch( () => res.status(500).send() );

})

app.put('api/updateuser/:id', (req, res, next) => {
    const db = req.app.get('db');
    const {body, query} = req;
    db.update_user([body.id, body.first_name, body.last_name, body.eye_color, body.hair_color,body.gender, body.hobby, body.birthdate])
    .then(() => res.status(200).send(req.user) )
    .catch( () => res.status(500).send() );
})

passport.serializeUser(function (id, done) {
    console.log(1,id)
    done(null, id);
});

passport.deserializeUser(function (id, done) {
    console.log(2,id)

    app.get('db').find_current_user([id])
        .then(user => {
            console.log(user)
            done(null, user[0]);
        })
})

app.listen(port, () => console.log(`Running on port ${port}`))