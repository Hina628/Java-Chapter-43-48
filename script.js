//==================================== CHP 43 - 48 ====================================//

// 1. Show an alert box on click on a link.
document.getElementById("alertLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link action
    alert("Link was clicked!"); // Show alert
});

//=====================================================================================//

// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
document.getElementById("mobileImage1").addEventListener("click", function() {
    alert("You clicked on Mobile 1!");
});

document.getElementById("mobileImage2").addEventListener("click", function() {
    alert("You clicked on Mobile 2!");
});

document.getElementById("mobileImage3").addEventListener("click", function() {
    alert("You clicked on Mobile 3!");
});

//===============================================================================================//

// 3. Display 10 student records in a table and each row should contain a delete button.
document.querySelector("tbody").addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("deleteBtn")) {
        let row = event.target.closest("tr");
        row.remove(); // Delete the row
    }
});

//=================================================================================================//

// 4. Display an image in the browser. Change the picture on mouseover and set the first picture on mouseout.

// 4. Display an image in the browser. Change the picture on mouseover and set the first picture on mouseout.
let images = document.querySelectorAll(".image"); // Select all images with class 'image'

// Loop through each image and add event listeners
images.forEach(function(image) {
    image.addEventListener("mouseover", function() {
        // Change image source on mouseover
        if (image.src.includes("image1.webp")) {
            image.src = "image2.webp"; // Change to second image
        } else if (image.src.includes("image2.webp")) {
            image.src = "image1.webp"; // Change to first image
        }
    });

    image.addEventListener("mouseout", function() {
        // Revert back to original image on mouseout
        if (image.src.includes("image2.webp")) {
            image.src = "image1.webp"; // Revert to first image
        } else {
            image.src = "image2.webp"; // Revert to second image
        }
    });
});

//========================================================================================//

// 5. Show a counter in the browser. Counter should increase on click on increase button and decrease on click on decrease button.


// Initial counter value
let counter = 0;

// Selecting the counter display element and buttons
let counterValue = document.getElementById("counter-value");
let increaseButton = document.getElementById("increase-btn");
let decreaseButton = document.getElementById("decrease-btn");
let resetButton = document.getElementById("reset-btn");

// Function to update the counter display
function updateCounter() {
    counterValue.textContent = counter;
}

// Event listener for increase button
increaseButton.addEventListener("click", function() {
    counter++; // Increase the counter value
    updateCounter(); // Update the counter display
});

// Event listener for decrease button
decreaseButton.addEventListener("click", function() {
    counter--; // Decrease the counter value
    updateCounter(); // Update the counter display
});

// Event listener for reset button
resetButton.addEventListener("click", function() {
    counter = 0; // Reset the counter value
    updateCounter(); // Update the counter display
});

//======================================================End===================================================//
