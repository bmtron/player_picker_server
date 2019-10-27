const axios = require('axios')

const usersService = {
    getUsersInChat() {
        return axios.get('http://tmi.twitch.tv/group/user/itswill_rs/chatters').then(response => {
            return response.data;
        })
    }
}

module.exports = usersService;