
// Open modal when "Join Now" button is clicked
const joinNowButton = document.getElementById("join-now-button");
const joinNowModal = document.getElementById("join-now-modal");
const closeModal = document.querySelector(".close");

joinNowButton.addEventListener("click", () => {
  joinNowModal.style.display = "block";
});

// Close modal when close button is clicked
closeModal.addEventListener("click", () => {
  joinNowModal.style.display = "none";
});

// Close modal when user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === joinNowModal) {
    joinNowModal.style.display = "none";
  }
});

// Join Now form submission
const joinNowForm = document.getElementById("join-now-form");

joinNowForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const nameInput = document.querySelector('#join-now-form input[name="name"]');
  const emailInput = document.querySelector('#join-now-form input[name="email"]');
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Perform form validation
  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Perform email validation using a simple regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Display success message
  alert("Thank you for joining us!");

  // Clear form fields
  joinNowForm.reset();

  // Close the modal
  joinNowModal.style.display = "none";
});




// Contact form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

// Responsive navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

  // Display success message
  alert("Thank you for your message!");

  // Clear form fields
  contactForm.reset();
});





