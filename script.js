function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

// Beim Laden prüfen, ob Dark Mode gespeichert ist
window.onload = () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }
};

// Registrierung
function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (email && password) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Registrierung erfolgreich!");
    window.location.href = "login.html";
  } else {
    alert("Bitte alle Felder ausfüllen!");
  }
}

// Login
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    window.location.href = "loot.html";
  } else {
    alert("Login fehlgeschlagen! ❌");
  }
}
