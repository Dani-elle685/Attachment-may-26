const api =
  "https://free.mockerapi.com/mock/a93eb6a0-4a79-4133-a544-35bc8792aab6";

async function getData() {
  try {
    // const response = await fetch(url,{
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // });

    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    displayData(data.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayData(data) {
  console.log("data->", data);
  const container = document.getElementById("data-container");
  container.innerHTML = "";
  data.employees.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = `<h2>${item.firstName} ${item.lastName}</h2>
        <p>${item.email}</p>
        <p>${item.phone}</p>
        `;
    container.appendChild(itemElement);
  });
}

getData();

const apires = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("name-container");
  // Store data
  localStorage.setItem("apiResponse", JSON.stringify(apires));
  // Retrieve data
  const theme = localStorage.getItem("apiResponse");

  // Remove a specific item
  localStorage.removeItem("apiResponse");

  // Clear all
  localStorage.clear();

  // Store data
  sessionStorage.setItem("apiResponse", JSON.stringify(apires));
  // Retrieve data
  const sessionData = sessionStorage.getItem("apiResponse");

  // Remove a specific item
  sessionStorage.removeItem("apiResponse");

  console.log("theme->", theme);

  apires.employees.forEach((item) => {
    console.log("apires response==>", item);

    const itemElement = document.createElement("div");

    itemElement.classList.add("item");

    itemElement.innerHTML = `
            <h2>${item.firstName} ${item.lastName}</h2>
        `;

    container.appendChild(itemElement);
  });
});
