var axios = require("axios");

var apiHelper = function () {

    this.getRequest = async function (getAPIUrl) {

        try {

            const headers = {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({

                method: 'get',
                url: getAPIUrl,
                headers: headers,

            });
            return await response;

        } catch (error) {

            console.log('Failed to execute GET REQ' + url & ' Found Error as ', error)

        }



    }

    this.postRequest = async function (getAPIUrl, datapayload) {

        try {

            const headers = {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({

                method: 'post',
                url: getAPIUrl,
                data: datapayload,
                headers: headers,

            });
            return await response;

        } catch (error) {

            console.log('Failed to execute POST REQ' + url & ' Found Error as ', error)

        }
    }



    // this.calculateAPIResponse = async function (res) {

    //     const apiResTotalName = [];
    //     if (res.status == 200) {
    //         const totalResponseLength = await res.data.data.length;
    //         console.log('totalResponseLength', totalResponseLength)
    //         for (let i = 0; i < totalResponseLength; i++) {

    //             const outputName = res.data.data[i].name
    //             apiResTotalName.push(outputName);
    //         }
    //         return apiResTotalName;

    //     }

    // }

    this.putRequest = async(getAPIUrl, datapayload)=> {

        try {

            const headers = {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({

                method: 'put',
                url: getAPIUrl,
                data: datapayload,
                headers: headers,

            });
            return await response;

        } catch (error) {

            console.log('Failed to execute PUT REQ' + url & ' Found Error as ', error)

        }



    }



    this.deleteRequest = async function (getAPIUrl, payload) {

        try {

            const headers = {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({

                method: 'delete',
                url: getAPIUrl,
                body: payload,
                headers: headers,

            });
            return await response;

        } catch (error) {

            console.log('Failed to execute DELETE REQ' + url & ' Found Error as ', error)

        }



    }
}

module.exports = new apiHelper();