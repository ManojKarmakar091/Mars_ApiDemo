
var api = require('./api');
var apiPayLoadJson = require('./apiPayLoad.js')
var apiData = require('./data')
var putPayloadData = require('./putPayload')
var postPayloadData= require('./postPayload')

var geturl = require("./apiUrls.js")
var getToken= require("./token")



describe('API Testing', () => {


    it('API:GET CALL', async () => {

        getToken.setUpAxiosToken
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
        const url = geturl.deleteUrl


        const res = await api.deleteRequest(url);

        console.log('delete status:  ', await res.status); // Print status code
        await expect(res.status).toEqual(apiData.deleteStatus)
        console.log('data = ', await res.data);


    })


})