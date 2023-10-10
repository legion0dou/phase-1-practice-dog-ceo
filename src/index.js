console.log('%c HI', 'color: firebrick')
// Select the HTML element where you want to display the images
const imageContainer = document.getElementById('dog-image-container');

// Fetch dog images from the API
fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(data => {
    // Iterate through the array of image URLs
    data.message.forEach(imageUrl => {
      // Create an image element and set its src attribute
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      
      // Append the image to the container
      imageContainer.appendChild(imageElement);
    });
  })
  .catch(error => console.error('Error fetching dog images:', error));
// Select the HTML element where you want to display the breeds
const breedList = document.getElementById('dog-breeds');

// Fetch all dog breeds from the API
fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = Object.keys(data.message); // Extract breed names from the response
    
    // Iterate through the list of breeds and create list items
    breeds.forEach(breed => {
      const listItem = document.createElement('li');
      listItem.textContent = breed;
      
      // Append the list item to the breed list
      breedList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching dog breeds:', error));
// Select the HTML element where you want to display the breeds
const breed = document.getElementById('dog-breeds');

// Fetch all dog breeds from the API
fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = Object.keys(data.message); // Extract breed names from the response
    
    // Iterate through the list of breeds and create list items
    breeds.forEach(breed => {
      const listItem = document.createElement('li');
      listItem.textContent = breed;
      
      // Append the list item to the breed list
      breedList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching dog breeds:', error));
// Select the dropdown element
const filterDropdown = document.getElementById('breed-dropdown');

// Add an event listener to the dropdown
filterDropdown.addEventListener('change', event => {
  const selectedLetter = event.target.value;
  
  // Iterate through the list items and hide/show based on the selected letter
  const listItems = breedList.getElementsByTagName('li');
  Array.from(listItems).forEach(listItem => {
    if (listItem.textContent.startsWith(selectedLetter)) {
      listItem.style.display = 'block';
    } else {
      listItem.style.display = 'none';
    }
  });
});
