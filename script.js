fetch('http://127.0.0.1:5000/')  // Ensure this matches the Flask backend URL
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerText = data.message;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        document.getElementById("response").innerText = "Error fetching data!";
    });
