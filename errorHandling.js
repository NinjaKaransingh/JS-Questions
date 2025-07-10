// Function to create a custom HTTP error
function createHttpError(response) {
  const error = new Error(`HTTP Error: ${response.status}`);
  error.status = response.status;
  error.name = "HTTPError";
  return error;
}

// Function to fetch user data
async function fetchUserData(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw createHttpError(response);
    }

    const data = await response.json();
    displayUserData(data);
  } catch (error) {
    handleError(error);
  }
}

// Function to display user data on the page
function displayUserData(user) {
  const userDiv = document.getElementById("user");
  userDiv.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Company: ${user.company.name}</p>
  `;
}

// Function to handle errors gracefully
function handleError(error) {
  const userDiv = document.getElementById("user");
  if (error.name === "HTTPError") {
    userDiv.innerHTML = `<p>Failed to load user data. Status: ${error.status}</p>`;
  } else {
    userDiv.innerHTML = `<p>Something went wrong: ${error.message}</p>`;
  }
  console.error("Error details:", error);
}

// Trigger the fetch
fetchUserData(1);