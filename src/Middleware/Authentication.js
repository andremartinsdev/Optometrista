const session = require('express-session');
import knex from '../config/db'
const KnexSessionStore = require("connect-session-knex")(session)

const store = new KnexSessionStore({
    tablename: "sessions",
    knex: knex,
})

export default session({
    secret: "ae36bb7b84f8b5cb2fcd8a926a83b568",
    resave: false,
    saveUninitialized: true,
    cookie: {},
    store: store
})
