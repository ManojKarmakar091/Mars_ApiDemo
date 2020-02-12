
var api= require('./api');
var apiPayLoadJson= require('./apiPayLoad.json')
var apiData= require('./data')



describe('API Testing', ()=>{

it('API:GET CALL', async()=>{

  
const res= await api.getRequest('https://reqres.in/api/users?page=2');
console.log('data = ', await res.data); // Print all data
console.log('status:  ', await res.status); // Print ststus code
console.log('DATA[0]:  ', await res.data.data[0]); // Print first set of data
console.log('DATA[0] id:  ', await res.data.data[0].id); 
console.log('DATA[0] email:  ', await res.data.data[0].email); 
console.log('DATA[0] first_name: ', await res.data.data[0].first_name); 


const fisrtName= await res.data.data[0].first_name
await expect(fisrtName).toEqual(apiData.firstNames)
await expect(res.status).toEqual(apiData.statusCode1)


})

it('API:POST CALL', async()=>{
const url = "https://reqres.in/api/users"

const payload = 
    {
        "name": "manoj",
        "job": "qa"
    }

    const res= await api.postRequest(url, payload);
    console.log('data = ', await res.data); // Print all data
    console.log('status:  ', await res.status); // Print ststus code
    await expect(res.status).toEqual(201)
    
    
    })


    it('API:PAYLOAD VALIDATION', async()=>{
        const apiPayLoadSize= apiPayLoadJson.length;
        console.log('size', apiPayLoadSize);
        for(let i=0; i<apiPayLoadSize; i++){

const UserName= apiPayLoadJson[i].name;
console.log('UN', UserName);

        }      
    })

    it('API:GET CALL 2', async()=>{

        const res= await api.getRequest('https://reqres.in/api/unknown');
        console.log('data = ', await res.data); // Print all data
        console.log('status:  ', await res.status); // Print ststus code
      
       const name= await api.calculateAPIResponse(res);
       console.log('name output =', name)
       //await expect(name).toEqual('cerulean')
      
        
        })

        it('API:PUT CALL', async()=>{
            const url = "https://reqres.in/api/users/2";
            const payload= {
                "name": "morpheus",
                "job": "zion resident"
            }

            const res= await api.putRequest(url, payload);
            console.log('PUT data = ', await res.data); // Print all data
            console.log('PUT status:  ', await res.status); // Print ststus code
          
            
            })
    

})