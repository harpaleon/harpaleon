const container = document.getElementById("artcontainer");
const twentyfour = document.getElementById("2024");



async function fetchJSONData(filePath) {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(response.status);
    }
    const jsonData = await response.json(); 
    
    console.log(jsonData.artworks);
    return jsonData.artworks;

  } catch (error) {
    console.error('Error fetching or parsing JSON:', error);
  }
}




function drawimages(tagType){

    Array.from(container.children).forEach(child => {
        child.remove();
    });
    const jsonData = fetchJSONData('./artworktags.json');

    jsonData.forEach(image => {
        console.log(image);
        if (image.tags.includes(tagType)){
            const newImage = document.createElement('img');
            newImage.src = "../assets/artworks/" + image.title + image.type;
            newImage.alt = image.caption;
            container.appendChild(newImage);
        }
    });
}

twentyfour.addEventListener("click", function(){
    alert("Clicked!")
    drawimages("2024");
})