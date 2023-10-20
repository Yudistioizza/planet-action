document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
   
    var formData = new FormData(event.target); // Create FormData object to store form fields
   
    fetch('your_server_url', {
       method: 'POST',
       body: formData
    })
    .then(response => response.json())
    .then(data => {
       if (data.success) {
         // Display success message
         alert('Post created successfully!');
       } else {
         // Display error message
         alert('Failed to create post. Please try again.');
       }
    })
    .catch(error => {
       // Display error message
       alert('An error occurred. Please try again');
    });
   });