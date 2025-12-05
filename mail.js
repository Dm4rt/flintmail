// Allowed users (expand later)
const credentials = {
  "fred.flintstone@flintstones-nuclear.com": "SlateQuarry#92!",
  "barney.rubble@flintstones-nuclear.com": "Trilobite$58@",
  "wilma@flintstones-nuclear.com": "PebbleForge%77?"
};

function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (!email || !pass) {
    msg.textContent = "Please enter your email and password.";
    return;
  }

  const expectedPassword = credentials[email];

  if (expectedPassword && pass === expectedPassword) {
    msg.textContent = "Login successful... redirecting.";
    setTimeout(() => {
      window.location.href = "inbox.html?user=" + encodeURIComponent(email);
    }, 800);
  } else {
    msg.textContent = "Invalid credentials.";
  }
}

// Show email inside viewer
function openMail(id) {
  document.querySelectorAll(".mail-content").forEach(el => el.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}
