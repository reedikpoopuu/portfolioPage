// Information to reach API
const apiKey = '9cf4468b0d4245ae8c7b8eb304a3bf';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    };
    throw new Error('Request failed!');
  }, 
  networkError => {
    console.log(networkError.message);
  })
  .then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}

// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
      responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
    }
  }

  const shortenUrlAsync = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
			method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}