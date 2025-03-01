// Import style (Vite will process this)
import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  setupMobileMenu();

  // Form validation and submission
  setupFormValidation();

  // Profile photo handling
  setupProfilePhoto();
});

// Mobile menu functionality
function setupMobileMenu() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// Profile photo handling
function setupProfilePhoto() {
  const photoPlaceholder = document.getElementById("photo-placeholder");
  const photoContainer = document.getElementById("photo-container");
  const photoWithDelete = document.getElementById("photo-with-delete");
  const profilePhoto = document.getElementById("profile-photo");
  const deletePhotoBtn = document.getElementById("delete-photo");

  if (
    !photoPlaceholder ||
    !photoWithDelete ||
    !profilePhoto ||
    !deletePhotoBtn
  ) {
    console.error("One or more photo elements not found");
    return;
  }

  // Create hidden file input
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";
  document.body.appendChild(fileInput);

  // Add photo when placeholder is clicked
  photoPlaceholder.addEventListener("click", function () {
    fileInput.click();
  });

  // Handle file selection
  fileInput.addEventListener("change", function (e) {
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Set image source from file
        profilePhoto.src = e.target.result;

        // Show the photo with delete button
        photoContainer.classList.add("hidden");
        photoWithDelete.classList.remove("hidden");

        console.log("Photo uploaded and displayed");
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  });

  // Delete photo when delete button is clicked
  deletePhotoBtn.addEventListener("click", function (e) {
    // Clear the image source and file input
    profilePhoto.src = "";
    fileInput.value = "";

    // Show the placeholder again
    photoContainer.classList.remove("hidden");
    photoWithDelete.classList.add("hidden");

    console.log("Photo deleted");
  });

  // For debugging - test with sample image immediately
  // Comment this out in production
  // setTimeout(() => {
  //   profilePhoto.src = "https://randomuser.me/api/portraits/men/32.jpg";
  //   photoContainer.classList.add('hidden');
  //   photoWithDelete.classList.remove('hidden');
  // }, 1000);
}

// Form validation and submission
function setupFormValidation() {
  // Elements
  const signupForm = document.getElementById("signup-form");

  if (!signupForm) return; // Exit if form doesn't exist

  const nameInput = document.getElementById("name");
  const occupationInput = document.getElementById("occupation");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  // Form submission with validation
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset all error messages and styles
    resetFormErrors();

    // Validate each field
    let isValid = true;

    // Validate name
    if (!nameInput.value.trim()) {
      showError(nameInput, "Please enter your name");
      isValid = false;
    }

    // Validate occupation
    if (!occupationInput.value.trim()) {
      showError(occupationInput, "Please enter your occupation");
      isValid = false;
    }

    // Validate email
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email address");
      isValid = false;
    }

    // Validate password
    if (!passwordInput.value || passwordInput.value.length < 8) {
      showError(passwordInput, "Password must be at least 8 characters");
      isValid = false;
    }

    // Validate confirm password
    if (!confirmPasswordInput.value) {
      showError(confirmPasswordInput, "Please confirm your password");
      isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      showError(confirmPasswordInput, "Passwords do not match");
      isValid = false;
    }

    // If all is valid, submit the form
    if (isValid) {
      // In a real app, you would submit to a server
      alert("Account created successfully!");

      // Optionally reset the form
      // signupForm.reset();
      // resetFormErrors();

      // Don't reset the photo on success to maintain state
      // as per the design examples you provided
    }
  });

  // Reset form errors
  function resetFormErrors() {
    // Hide all error messages
    document
      .querySelectorAll(
        "#name-error, #occupation-error, #email-error, #password-error, #confirm-password-error"
      )
      .forEach((error) => {
        error.classList.add("hidden");
      });

    // Remove error styles from inputs
    document.querySelectorAll("input").forEach((input) => {
      input.classList.remove("border-[#EF372B]");
    });
  }

  // Show error for a specific field
  function showError(element, message) {
    // Add error style to input
    element.classList.add("border-[#EF372B]");

    // Show error message
    const errorId = `${element.id}-error`;
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.remove("hidden");
    }
  }

  // Simple email validation
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Clear error when user starts typing
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", function () {
      // Remove error style
      this.classList.remove("border-[#EF372B]");

      // Hide error message
      const errorId = `${this.id}-error`;
      const errorElement = document.getElementById(errorId);
      if (errorElement) {
        errorElement.classList.add("hidden");
      }
    });
  });
}
