let URL = "https://official-joke-api.appspot.com/random_joke";
const getFacts = async () => {
  console.log("getting data...");
  let response = await fetch(URL);
  console.log(response); // JSON format
  console.log(response.status); 
  let data = await response.json();
  console.log(data);
  console.log(data.setup);
  console.log(data.punchline);
}

getFacts();