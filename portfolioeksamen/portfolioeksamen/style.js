function openNav() {
  document.getElementById("mySidepanel").style.width = "600px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"
  nav.classList.toggle("shown");

  // 1. Lav en variabel, der hedder menuShown
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")

  const menuShown = nav.classList.contains("shown");
  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  //   if (menuShown) {
  //     btn.textContent = "Luk";
  //     // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
  //   } else {
  //     btn.textContent = "Menu";

  // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
  //   }
}

/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);
