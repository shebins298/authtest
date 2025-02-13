// ✅ Ensure Firebase is initialized from firebase-config.js
document.getElementById("google-login").addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    auth.signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            const userEmail = user.email; // Get user email
            console.log("User Email:", userEmail);

            // ✅ Check Firestore for user role using EMAIL
            db.collection("users").doc(userEmail).get().then(doc => {
                if (doc.exists) {
                    const role = doc.data().role;
                    console.log(`Logged in as ${role}`);

                    if (role === "admin") {
                        window.location.href = "admin-dashboard.html"; // Redirect admin
                    } else if (role === "user") {
                        window.location.href = "user-dashboard.html"; // Redirect normal user
                    } else {
                        // 🚨 Unauthorized role
                        alert("Access Denied! Contact Admin.");
                        auth.signOut();
                        window.location.href = "index.html";
                    }
                } else {
                    // 🚨 Unauthorized user - Logout
                    alert("Access Denied! You are not authorized.");
                    auth.signOut().then(() => {
                        window.location.href = "index.html";
                    });
                }
            }).catch(error => {
                console.error("Error checking user role:", error);
            });

        })
        .catch(error => {
            console.error("Login Error:", error);
        });
});
