// Add event listener to the form
const form = document.getElementById("itemForm");
form.addEventListener("submit", handleSubmit);

// Retrieve existing items from local storage
let existingItems = JSON.parse(localStorage.getItem("items")) || [];

// Update the UI to display the items
updateUI(existingItems);

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Extract input data
  const itemName = document.getElementById("itemName").value;
  const itemPrice = document.getElementById("itemPrice").value;
  const itemImage = document.getElementById("itemImage").files[0];

  // Read the image file as a data URL
  const reader = new FileReader();
  reader.readAsDataURL(itemImage);
  reader.onload = function () {
    const itemImageBase64 = reader.result;

    // Create a new item object
    const newItem = {
      name: itemName,
      price: itemPrice,
      image: itemImageBase64,
    };

    // Add the new item to the existing items array
    existingItems.push(newItem);

    // Save the updated items array to local storage
    localStorage.setItem("items", JSON.stringify(existingItems));

    // Update the UI to display the new item
    updateUI(existingItems);

    // Reset the form
    form.reset();
  };
}

// Handle item deletion
function deleteItem(index) {
  // Remove the item from the existing items array
  existingItems.splice(index, 1);

  // Save the updated items array to local storage
  localStorage.setItem("items", JSON.stringify(existingItems));

  // Update the UI to remove the deleted item
  updateUI(existingItems);
}

// Update the UI to display the items
function updateUI(items) {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const itemRow = `
      <div class="border border-warning bg-white rounded postSelf">
        <div class=''><img src="${item.image}"></div>
        <div class='fw-bold fs-5'>${item.name}</div>
        <div class=''>GH₵ ${item.price} <small class='fw-bold'>per hour</small></div>
        <div><button class='btn btn-outline-warning w-75 mt-2' onclick="bookItem(${i})">Book</button></div>
      </div>
    `;

    itemList.innerHTML += itemRow;
  }
}

//search bar
function updateUI(items, searchQuery = '') {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  const filteredItems = items.filter(item => {
    const itemName = item.name.toLowerCase();
    const query = searchQuery.toLowerCase();
    return itemName.includes(query);
  });

  for (let i = 0; i < filteredItems.length; i++) {
    const item = filteredItems[i];

    const itemRow = `
    <div class="border border-warning bg-white rounded postSelf">
      <div class=''><img src="${item.image}"></div>
        <div class='fw-bold fs-5'>${item.name}</div>
        <div class=''>GH₵ ${item.price} <small class='fw-bold'>per hour</small></div>
        <div><button class='btn btn-outline-warning w-75 mt-2' onclick="bookItem(${i})">Book</button></div>
      </div>
    `;

    itemList.innerHTML += itemRow;


  }
}


//Top searches cars --- BEGAN

function searchNissanFrontier(){
  document.getElementById("searchInput").value = document.getElementById("searchNissanFrontier").innerText;
  document.getElementById("searchNissanFrontier").addEventListener("click", searchFunction);
}
function searchToyotaCamry(){
  document.getElementById("searchInput").value = document.getElementById("searchToyotaCamry").innerText;
  document.getElementById("searchToyotaCamry").addEventListener("click", searchFunction);
}

function searchFordTransit(){
  document.getElementById("searchInput").value = document.getElementById("searchFordTransit").innerText;
  document.getElementById("searchFordTransit").addEventListener("click", searchFunction);
}

function searchKiaPride(){
  document.getElementById("searchInput").value = document.getElementById("searchKiaPride").innerText;
  document.getElementById("searchKiaPride").addEventListener("click", searchFunction);
}

function searchToyotaCorolla(){
  document.getElementById("searchInput").value = document.getElementById("searchToyotaCorolla").innerText;
  document.getElementById("searchToyotaCorolla").addEventListener("click", searchFunction);
}

function searchHyundai420(){
  document.getElementById("searchInput").value = document.getElementById("searchHyundai420").innerText;
  document.getElementById("searchHyundai420").addEventListener("click", searchFunction);
}

function searchHondaCivic(){
  document.getElementById("searchInput").value = document.getElementById("searchHondaCivic").innerText;
  document.getElementById("searchHondaCivic").addEventListener("click", searchFunction);
}

function searchHyundaiElantra(){
  document.getElementById("searchInput").value = document.getElementById("searchHyundaiElantra").innerText;
  document.getElementById("searchHyundaiElantra").addEventListener("click", searchFunction);
}


// Top searches cars --- ENDED

const searchFunction = () =>{
  //Setting a condition for parent element with no child elements
  if (document.getElementById("itemList").childElementCount == 0){
    document.getElementById("noResults").innerHTML = "<p class='mt-5 fs-3'><i class='fa-solid fa-car fa-4x pb-4'></i><br>No such search results found!</p>";
    document.getElementById("itemList").style.visibility = "hidden";
  }
  else{
    document.getElementById("noResults").innerHTML = "";
    document.getElementById("itemList").style.visibility = "visible";
  }
  
  const searchInput = document.getElementById("searchInput");
  const searchQuery = searchInput.value;
  const existingItems = JSON.parse(localStorage.getItem("items")) || [] ;
  updateUI(existingItems, searchQuery);

  
};

searchInput.addEventListener("keydown", searchFunction);



// SHOW AND HIDE SIDE NAV BAR
function showSideNavBar(){
  const sideNavBar = document.getElementById("sideNavBar");
  sideNavBar.style.display = "block";
  sideNavBar.style.position = "absolute";
  
  const profilePicture = document.getElementById("profilePicture");
  profilePicture.classList.add("profilePictureIndex");
}

function hideSideBar(){
  sideNavBar.style.display = "none";
  profilePicture.style.index = "0";
  profilePicture.classList.remove("profilePictureIndex");
}