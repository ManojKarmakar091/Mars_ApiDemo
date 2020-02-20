/*   function setUpAxiosToken (){
    var axios = require('axios');
    var baseUrlToken = require("../resources/resource_prop")
    var data = {
    "grant_type": "client_credentials",
    "scope": "public",
    "client_id": baseUrlToken.clientId,
    "client_secret": baseUrlToken.clientSecret
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