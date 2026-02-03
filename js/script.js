// menampilkan nama atau guest
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

// menampilkan alert ketika isian kosong saat submit
submitMessage();

function submitMessage() {
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const fields = ["name", "email", "message"];
    let valid = true;

    fields.forEach(contact => {
        const input = document.getElementById(contact);

        if (input.value.trim() === "") {
            input.classList.add("border-red-500");
            input.classList.remove("border-gray-300");
            valid = false;
        } else {
            input.classList.remove("border-red-500");
            input.classList.add("border-gray-300");
        }
    });

    if (!valid) {
        alert("⚠️ Harap isi semua field!");
        return;
    }

    alert("Pesan berhasil dikirim 🎉");
    this.submit();
});

}

