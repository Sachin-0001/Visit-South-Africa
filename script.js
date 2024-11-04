// Function to handle user reviews
// document.getElementById('reviewForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const reviewText = e.target.querySelector('textarea').value;
//     if (reviewText.trim()) {
//       const reviewElement = document.createElement('p');
//       reviewElement.textContent = reviewText;
//       document.getElementById('reviewsContainer').appendChild(reviewElement);
//       e.target.reset();
//     }
//   });
  
//   // Budget calculator function
//   function calculateBudget() {
//     const transport = parseFloat(document.getElementById('transport').value) || 0;
//     const accommodation = parseFloat(document.getElementById('accommodation').value) || 0;
//     const meals = parseFloat(document.getElementById('meals').value) || 0;
//     const total = transport + accommodation + meals;
//     document.getElementById('totalCost').textContent = `Total: $${total.toFixed(2)}`;
//   }

  
let slideIndex = 0; // Start with the first slide
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // Remove active class from all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to the first slide
    slides[slideIndex - 1].classList.add("active"); // Show the current slide
    setTimeout(showSlides, 5000); // Change image every 5 seconds (5000 milliseconds)
}

showSlides();