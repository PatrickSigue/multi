document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("transaction-form");
    const tableBody = document.getElementById("transaction-list");
    const remarksInput = document.getElementById("remarks");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const transactionData = {};
        formData.forEach((value, key) => {
            transactionData[key] = value;
        });

        // Limit remarks to 100 characters
        if (transactionData.hasOwnProperty('remarks')) {
            transactionData.remarks = transactionData.remarks.substring(0, 100);
        }

        // Add transaction data to table
        const newRow = document.createElement("tr");
        Object.values(transactionData).forEach(value => {
            const newCell = document.createElement("td");
            newCell.textContent = value;
            newRow.appendChild(newCell);
        });
        tableBody.appendChild(newRow);

        // Reset form
        form.reset();
    });

    // Limit remarks to 100 characters while typing
    remarksInput.addEventListener('input', function() {
        if (this.value.length > 100) {
            this.value = this.value.substring(0, 100);
        }
    });
});
// Function to extract username from URL query parameter
        function getUsernameFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('username');
        }

        // Function to update username in navigation bar
        function updateUsernameInNavbar() {
            const username = getUsernameFromURL(); // Get username from URL
            const usernameElement = document.getElementById('username'); // Get span element
            if (username) {
                usernameElement.innerText = username; // Set username text
            } else {
                usernameElement.innerText = "Guest"; // Set default text if no username found
            }
        }

        // Call the function when the page loads
        updateUsernameInNavbar();

function confirmLogout() {
  if (confirm("Are you sure you want to logout?")) {
    // Logout code here
    alert("Logging out...");
  } else {
    // Cancel logout
    alert("Logout cancelled.");
  }
}