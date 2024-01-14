// static/scripts/2-hbnb.js

document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://0.0.0.0:5001/api/v1/status/';
    const apiStatusDiv = document.getElementById('api_status');

    // Function to make the API request
    function checkApiStatus() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'OK') {
                    apiStatusDiv.classList.add('available');
                } else {
                    apiStatusDiv.classList.remove('available');
                }
            })
            .catch(error => {
                console.error('Error checking API status:', error);
            });
    }

    // Initial check when the page loads
    checkApiStatus();
