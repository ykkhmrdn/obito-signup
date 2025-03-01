// Import style (Vite will process this)
import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const profilePhoto = document.getElementById("profile-photo");
  const photoPlaceholder = document.getElementById("photo-placeholder");
  const deletePhotoBtn = document.getElementById("delete-photo");
  const signupForm = document.getElementById("signup-form");

  // Add photo functionality
  photoPlaceholder.addEventListener("click", function () {
    // Simulate file upload with a sample image
    profilePhoto.src = "https://randomuser.me/api/portraits/men/32.jpg";
    profilePhoto.classList.remove("hidden");
    photoPlaceholder.classList.add("hidden");
    deletePhotoBtn.classList.remove("hidden");
  });

  // Delete photo functionality
  deletePhotoBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent triggering the photoPlaceholder click
    profilePhoto.src = "";
    profilePhoto.classList.add("hidden");
    photoPlaceholder.classList.remove("hidden");
    deletePhotoBtn.classList.add("hidden");
  });

  // Form submission
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const occupation = document.getElementById("occupation").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Basic validation
    if (!name || !occupation || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Success message (in a real app, you would submit to a server)
    alert("Account created successfully!");
  });
});
