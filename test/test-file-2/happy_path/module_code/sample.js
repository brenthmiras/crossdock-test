const axios = require('axios');

function orderManagement(username) {
    return axios
        .get(`http://localhost:8001/users/${username}`)
        .then(res => res.data)
        .catch(error => console.log(error));
}

module.exports = {
    orderManagement
}