const studentBtn = document.getElementById("studentBtn");
const wardenBtn = document.getElementById("wardenBtn");
const roleInput = document.getElementById("role");

studentBtn.addEventListener("click", () => {
    studentBtn.classList.add("active");
    wardenBtn.classList.remove("active");
    roleInput.value = "student";
});

wardenBtn.addEventListener("click", () => {
    wardenBtn.classList.add("active");
    studentBtn.classList.remove("active");
    roleInput.value = "warden";
});

function login(event) {
    event.preventDefault();

    const role = document.getElementById("role").value;

    if (role === "student") {
        window.location.href = "student.html";
    } else if (role === "warden") {
        window.location.href = "warden.html";
    } else {
        alert("Please select a role");
    }
}
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");

    document.getElementById(sectionId).style.display = "block";
}

function logout() {
    window.location.href = "index.html";
}