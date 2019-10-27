const express = require('express');

const usersInChat = express.Router();
const userService = require('./UsersInChatService')

usersInChat.route('/')
.get((req, res, next) => {
    userService.getUsersInChat().then(data => {
        if (!data) {
            res.json('Data empty')
        }
        console.log('fetch')
        res.json(data)
    }).catch(next)
})
module.exports = usersInChat;