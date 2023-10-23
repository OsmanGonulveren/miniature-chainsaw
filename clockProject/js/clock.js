"use strict";

//Prompt ile kullanıcıdan isim alma ve HTML'ye yazdırma
let userInputName = prompt("Adınız Nedir?");
let greeting = document.querySelector("#myName");
greeting.innerHTML = userInputName;

//Saatin gösterilmesi
function showTime() {
  const clockElement = document.getElementById("myClock");

  function updateClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Haftanın gününü uzun formatta alınması (örneğin, "Pazartesi")
    const day = date.toLocaleDateString("tr-TR", { weekday: "long" });

    // Saat ve günün birleştirilip HTML'ye yerleştirilmesi
    const time = `${hours}:${minutes}:${seconds}`;
    clockElement.innerHTML = time + " " + day;

    //Saati güncellemek için requestAnimationFrame'i kullanmak
    requestAnimationFrame(updateClock);
  }

  // Saati başlatmak için updateClock fonksiyonunun çağırılması
  updateClock();
}

// Sayfanın yüklendiği zamanı gösterecek fonksiyonun çağırılması
document.addEventListener("DOMContentLoaded", showTime);
