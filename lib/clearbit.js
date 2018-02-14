// Key to authorize call to clearbit API
const key = "Bearer PUT_YOUR_OWN_PRIVATE_KEY_HERE"; // Sign up for clearbit api to get a private key


// 1) Write function to return the email from input


const getEmailFromForm = () => {
  // console.log(email);
  return document.getElementById("clearbitEmail").value;
};

// 2) Write function to call the clearbit API using fetch ("https://person.clearbit.com/v1/people/email/<ReplaceWithinputEmail>")

const callApi = (inputEmail, callback) => {
  const url = `https://person.clearbit.com/v1/people/email/${inputEmail}`;
  fetch(url,{ headers: { Authorization: key } })
    .then(response => response.json())
    .then((data) => {
      callback(data)
  })
};

// 3) Write function to insert data into the DOM

const insertDataIntoDom = (data) => {
  const userName = document.getElementById("userName")
  const userEmail = document.getElementById("userEmail")
  const userBio = document.getElementById("userBio")
  const userLocation = document.getElementById("userLocation")

  userName.innerText = data.name.givenName
  userEmail.innerText = data["email"]
  userBio.innerText = data["bio"]
  userLocation.innerText = data["location"]
};

// 4) Create event listener for submit of form to call the clearbitApi
// clearbitSubmit

document.getElementById("clearbitForm").addEventListener("submit",(event) => {
  console.log(event)
  const email = getEmailFromForm();
  callApi(email, insertDataIntoDom)
})
