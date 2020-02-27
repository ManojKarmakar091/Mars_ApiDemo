
var api = require('../Source/api');
var apiPayLoadJson = require('../TestData/apiPayLoad.js')
var apiData = require('../TestData/data')
var putPayloadData = require('../TestData/putPayload')
var postPayloadData = require('../TestData/postPayload')

var geturl = require("../TestData/apiUrls.js")

var getToken = require("../fixtures/token")
var logger = require("../Logger/log4jsconf")
var confini = require("../Utils/Common/configFileUtil")




describe('API Testing', () => {

    var param1 = "SectionOne";
    beforeAll(() => {
        // getToken.setUpAxiosToken()
    });



    //---------------------Test Cases for GET Request----------------------------------------------------------------------//
    it('API:GET CALL @smoke', async () => {
        logger.logger().debug("This is looger for GET")

        //console.log(confini.configer().Tutor);


        //------------Calling Client GET request and Console client Data[client API]-------------------------------------------//
        const res = await api.getRequest(geturl.getapiUrl);
        console.log('data = ', await res.data);

        //------------Console the status code [client API]-------------------------------------------------------------------//
        console.log('status code:  ', await res.data.code);


        //------------Console the first set of client data [client API]-------------------------------------------//
        console.log('DATA[0]:  ', await res.data.data[0]);

        //------------Console the status code [client API]-------------------------------------------//
        console.log('DATA[0] id:  ', await res.data.data[0].id);

        //------------Console the Account Number [client API]-------------------------------------------//
        console.log('DATA[0] Account_Number:  ', await res.data.data[0].accountNumber);

        //------------Console the Zip code [client API]-------------------------------------------//
        console.log('DATA[0] Zip_Code: ', await res.data.data[0].zipCode);

        //------------Verify the Client Id [client API]-------------------------------------------//
        const Client_Id = await res.data.data[0].id
        await expect(Client_Id).toEqual(apiData.id)

        //------------Verify the Status Code of Client GET request(Postive Test Case) [client API]-------------------------------------------//
        await expect(res.data.code).toEqual(apiData.statusCode1)

        //------------Verify the Status Code of Client GET request(Negative Test Case)[client API]-------------------------------------------//
        await expect(res.data.code).toEqual(apiData.statusCode2)

        //------------Verify the Account Number of Client GET request(Positive Test Case)[client API]-------------------------------------------//
        const Account_Number = await res.data.data[0].accountNumber
        await expect(Account_Number).toEqual(apiData.accountNumber)

        //------------Verify the Account Number of Client GET request(Negative Test Case)[client API]-------------------------------------------//
        await expect(res.data.data[1]).toEqual(apiData.accountNumber)

        //------------Verify the Zip Code of Client GET request(Positive Test Case)[client API]-------------------------------------------//
        const Zip_Code = await res.data.data[0].zipCode
        await expect(Zip_Code).toEqual(apiData.zipCode)




    })

    //---------------------Test Cases for GET Request----------------------------------------------------------------------//

    it('API:POST CALL @smoke', async () => {
        logger.logger().debug("This is logger for POST")


        //------------Calling Client POST request and Console client Data[client API]-------------------------------------------//
        const posturl = geturl.postapiUrl
        const payload = postPayloadData.postdataDrive
        const res = await api.postRequest(posturl, payload);

        console.log('POST_data = ', await res.data);

        //------------Console the status code [client API]-------------------------------------------------------------------//  

        console.log('code:  ', await res.data.code); // Print status code

        //------------Verify the status code [client API]-------------------------------------------------------------------//  

        await expect(res.data.code).toEqual(apiData.statusCode2)

        //------------Verify the Account Number [client API]-------------------------------------------------------------------//     
        await expect(res.data.data).toEqual(apiData.accountNumber)




    })




    it('API:PUT CALL @regression', async () => {
        logger.logger().debug("This is looger for PUT")
        const puturl = geturl.putapiUrl
        const putpayload = putPayloadData.putdataDrive
        const res = await api.putRequest(puturl, putpayload);

        console.log('PUT data = ', await res.data); // Print all data
        console.log('PUT status:  ', await res.data.code); // Print ststus code


    })


    /*   it('API:DELETE CALL', async () => {
 
         logger.logger().debug("This is logger for DELETE")
         logger.logger().info("This is logger info for DELETE")
         logger.logger().error("This is logger info for DELETE")
         logger.logger().error("This is logger info for DELETE")
         const url = geturl.deleteUrl
 
 
         const res = await api.deleteRequest(url);
 
         console.log('delete status:  ', await res.status); // Print status code
         await expect(res.status).toEqual(apiData.deleteStatus)
         console.log('data = ', await res.data);
 
 
      }) */


})