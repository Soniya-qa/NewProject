import {test, expect} from "@playwright/test";

// API Automation

test('Sending GET request',async({request})=>{
    const response = await request.get("https://reqres.in/api/test-suite/collections/users/records");
    expect(response.status).toBe(200);
    const data = response.json();
    //expect(data.body[0].id).toBe(2);
    //console.log(data);
})

test('Sending POST request',async({request})=>{
    const response = await request.post("https://reqres.in/api/test-suite/collections/users/records",
    {
        headers:{},
        data : {},
        params:{}
    });
})



//hit  a post request using data(username,password)-->it will generate the bearer token
//validate the post request
//get the response data using (.json())
// and get the token using (.token())
//and hit the get request with passing the token as headers (authorization ->bearer)
//and validate the status   (api chaining)
// dummy url and token

test('API Chaining', async ({request}) => {

  // POST request
  const response = await request.post('https://api.com', {
    data: {
      username: 'user',
      password: 'pass'
    }
  });

   // Validate status 
   expect(response.status()).toBe(200);

  // Get Post response body
  const responseBody = await response.json();
  console.log('POST Response:', responseBody);

  // token 
  const [token] = responseBody.token(); // if dynamic [token], multiple data [...token]
  console.log('Token:', [token]);

  // GET request
  const getResponse = await request.get('https://api.com', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  // Validate status
  expect(getResponse.status()).toBe(200);
});


test('Validate the response',async({request})=>{
   const response = await request.get('https://reqres.in/api/users=2');
   expect(response.status()).toBe(200);
   const body = await response.json();
   expect(body.email).toBe('soniya');

});