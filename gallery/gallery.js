const container = document.getElementById("artcontainer");
const oils = document.getElementById("oils");
const twentyfour = document.getElementById("2024");


let isActive = false;
twentyfour.addEventListener('click', () => {
  isActive = !isActive; // Toggle state
  if (isActive) {
// function definition
async function fetchJSONData(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        // Return the array directly so drawimages can use it
        return data.artworktags; 
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}
async function drawimages(tagType) {
    // 1. Clear the container
    container.innerHTML = "";

    // 2. Fetch the data
    const artworks = await fetchJSONData('./artworktags.json');
    if (!artworks) return;

    // 3. Loop through every image in the JSON
    artworks.forEach(image => {
        if (image.tags.includes(tagType)) {
            
            console.log(`Match found! Using filename: ${image.name}`);
            
            const newImage = document.createElement('img');

            newImage.src = `/assets/artworks/${image.name}.${image.type}`;
            
            newImage.alt = image.alt;
            container.appendChild(newImage);
        }
    });
}


twentyfour.addEventListener("click", function(){
    drawimages("2024");
});


oils.addEventListener("click", function(){
    drawimages("oils");
});

    console.log("button revealing art");
  } else {
    // STOP ACTION HERE
    console.log("button hide");
  }
});
