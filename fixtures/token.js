/*   function setUpAxiosToken (){
    var axios = require('axios');
    var baseUrlToken = require("../fixtures/token")
    var data = {
    "grant_type": "client_credentials",
    "scope": "public",
    "client_id": baseUrlToken.client_id,
    "client_secret": baseUrlToken.client_secret
    };
    var baseurl = baseUrlToken.baseurl
      return axios.post(url, data)
        .then(function(response){
            console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });


}
module.exports = new setUpAxiosToken();



  */