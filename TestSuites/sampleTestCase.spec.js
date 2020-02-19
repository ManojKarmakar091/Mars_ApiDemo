
var api = require('../Source/api');
var apiPayLoadJson = require('../TestData/apiPayLoad.js')
var apiData = require('../TestData/data')
var putPayloadData = require('../TestData/putPayload')
var postPayloadData= require('../TestData/postPayload')

var geturl = require("../TestData/apiUrls.js")
var getToken= require("../fixtures/token")
var logger = require("../Logger/log4jsconf")



describe('API Testing', () => {
    beforeAll(() => {
       // getToken.setUpAxiosToken()
      });


    it('API:GET CALL', async () => {

        logger.logger().debug("This is looger for GET")
        const res = await api.getRequest(geturl.getapiUrl);
        console.log('data = ', await res.data); // Print all data
        console.log('status:  ', await res.status); // Print ststus code
        console.log('DATA[0]:  ', await res.data.data[0]); // Print first set of data
        console.log('DATA[0] id:  ', await res.data.data[0].id); // Print ID
        console.log('DATA[0] email:  ', await res.data.data[0].email); //Print email
        console.log('DATA[0] first_name: ', await res.data.data[0].first_name); //Print FisrtName


        const fisrtName = await res.data.data[0].first_name
        await expect(fisrtName).toEqual(apiData.firstNames)
        await expect(res.status).toEqual(apiData.statusCode1)


    })

    it('API:POST CALL', async () => {
        logger.logger().debug("This is logger for POST")
        const url = geturl.postapiUrl
        const payload = postPayloadData.postdataDrive
        
        const res = await api.postRequest(url, payload);
        console.log('data = ', await res.data); // Print all data
        console.log('status:  ', await res.status); // Print ststus code
        await expect(res.status).toEqual(apiData.statusCode2) //Verification of status code


    })


    it('API:PAYLOAD VALIDATION', async () => {
        const apiPayLoadSize = apiPayLoadJson.length;
        console.log('size', apiPayLoadSize);
        for (let i = 0; i < apiPayLoadSize; i++) {

            const UserName = apiPayLoadJson[i].name;
            console.log('UN', UserName);


        }
    })

    it('API:GET CALL 2', async () => {

        const res = await api.getRequest(geturl.getapiUrl2);
        console.log('data = ', await res.data); // Print all data
        console.log('status:  ', await res.status); // Print status code

        const name = await api.calculateAPIResponse(res);
        console.log('name output =', name)
        await expect(name).toEqual(apiData.userNames) // Verifications


    })

    it('API:PUT CALL', async () => {
        const url = geturl.postapiUrl
        const payload = putPayloadData.putdataDrive
        const res = await api.putRequest(url, payload);
        console.log('PUT data = ', await res.data); // Print all data
        console.log('PUT status:  ', await res.status); // Print ststus code


    })

    it('API:DELETE CALL', async () => {

        logger.logger().debug("This is logger for DELETE")
        logger.logger().info("This is logger info for DELETE")
        logger.logger().error("This is logger info for DELETE")
        logger.logger().error("This is logger info for DELETE")
        const url = geturl.deleteUrl


        const res = await api.deleteRequest(url);

        console.log('delete status:  ', await res.status); // Print status code
        await expect(res.status).toEqual(apiData.deleteStatus)
        console.log('data = ', await res.data);


    })


})