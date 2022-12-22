const generateButton = document.getElementById("generate-button");
const imageContainer = document.getElementById("image-container");

function generateRandomCatImage() {
  const apiKey = "live_9t6MguHeQrjFQZZ2oXrz2hE2PDIp7KmOOOokq4vSy9asO8RAqhq4EFgNxUco72GQ";
  const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=1&api_key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data[0].url;

      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      imageElement.alt = "Random cat image";

      imageContainer.innerHTML = "";
      imageContainer.appendChild(imageElement);
    });
}

generateButton.addEventListener("click", generateRandomCatImage);
