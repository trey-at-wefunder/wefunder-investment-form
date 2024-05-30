document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const wefunderUrl = document.getElementById('wefunderUrl').value;

    // Log the data to the console (or send it to your server)
    console.log('Name:', name);
    console.log('Email:', email);

    // Send the data to your server for storing
    fetch('http://localhost:3000/store-data', { // Change this URL to your server endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Redirect to the Wefunder page
        window.location.href = wefunderUrl;
    })
    .catch((error) => {
        console.error('Error:', error);
        // Redirect to the Wefunder page even if there's an error
        window.location.href = wefunderUrl;
    });
});
