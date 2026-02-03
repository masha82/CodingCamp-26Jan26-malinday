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

    const fields = ["name", "email", "pesan"];
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

    // ✨ tampilkan hasil ke samping
        document.getElementById("resultName").innerText =
            document.getElementById("name").value;

        document.getElementById("resultEmail").innerText =
            document.getElementById("email").value;

        document.getElementById("resultPesan").innerText =
            document.getElementById("pesan").value;

        // munculkan box hasil
        document.getElementById("resultBox").classList.remove("hidden");

    // alert("Pesan berhasil dikirim 🎉");
    // this.submit();
});

}

//menampilkan animasi di portofolio
document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    reveals.forEach(el => observer.observe(el));
});
