document.getElementById("google-login").addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    auth.signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            const userEmail = user.email;

            // ✅ Check Firestore for user role
            db.collection("users").doc(userEmail).get().then(doc => {
                if (doc.exists) {
                    const role = doc.data().role;
                    console.log(`Logged in as ${role}`);

                    if (role === "admin") {
                        window.location.href = "admin-dashboard.html"; // Redirect admin
                    } else if (role === "user") {
                        window.location.href = "user-dashboard.html"; // Redirect normal user
                    }
                } else {
                    // 🚨 Unauthorized user - Logout
                    alert("Access Denied! You are not authorized.");
                    auth.signOut().then(() => {
                        window.location.href = "index.html"; // Redirect to login
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
