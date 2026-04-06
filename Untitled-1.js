onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('login-modal').style.display = 'none';

        // REEMPLAZA ESTE CORREO CON EL QUE CREASTE EN FIREBASE
        isAdmin = user.email === "roberto@tu-email.com"; 
        
        if (isAdmin) {
            // Si eres tú, se activa el panel con todos los chats
            document.getElementById('admin-panel').style.display = 'flex';
            loadAdminPanel();
        } else {
            // Si es un usuario anónimo, solo ve su propio chat
            currentChatId = user.uid;
            listenToChat(user.uid);
        }
    }
});