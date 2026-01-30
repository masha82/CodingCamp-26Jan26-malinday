welcomeMessage();

function welcomeMessage() {
    //munculkan nama user
    let userResponse = prompt("Selamat datang di website kami. Silakan isi nama Anda.");
    
    // munculkan nama atau user tidak mengisi nama
    if (userResponse === null || userResponse.trim() === ""){
        userResponse = "Guest";
    }

    //menampilkan pesan awal buka web
    document.getElementById("welcome").innerText = `Hello, ${userResponse} - Selamat datang di Linda Company`;
}

