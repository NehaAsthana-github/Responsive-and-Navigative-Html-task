// Handle form submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Perform form validation here if needed
    
    // Redirect to the thank you page
    window.location.href = "thankyou.html";
});
