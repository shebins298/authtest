// Firebase authentication
document.addEventListener("DOMContentLoaded", function () {
    // Reference to the login button
    const loginButton = document.getElementById("google-login");

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            // ✅ Create a new GoogleAuthProvider instance
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    console.log("User signed in:", result.user);
                    alert("Login successful!");

                    // Check if the user is an admin (modify as needed)
                    checkIfAdmin(result.user);
                })
                .catch((error) => {
                    console.error("Error during login:", error.message);
                    alert("Login failed. Try again.");
                });
        });
    }
});

// ✅ Function to check if user is an admin (Modify this logic based on your admin emails)
function checkIfAdmin(user) {
    const allowedAdmins = ["admin1@example.com", "admin2@example.com"]; // Change this list

    if (allowedAdmins.includes(user.email)) {
        window.location.href = "admin-dashboard.html"; // Redirect admin to admin dashboard
    } else {
        window.location.href = "dashboard.html"; // Redirect normal users
    }
}



// ✅ Firebase Logout
document.getElementById("logout").addEventListener("click", function () {
    firebase.auth().signOut().then(() => {
        console.log("User signed out successfully");
        window.location.href = "index.html"; // Redirect after logout
    }).catch((error) => {
        console.error("Error during logout:", error.message);
    });
});
