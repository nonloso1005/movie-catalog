let watchlistCount = 0;

function addTowatchlist(film) {
    const watchlistItems = document.getElementById("watchlist-items");
    
    if (watchlistItems.childElementCount >= 6) {
      displayErrorMessage("Puoi inserire solo 6 film nella watchlist");
      return;
    }
    
    const listItem = document.createElement("li");
    const img = document.createElement("img");
    img.src = "images/" + film.toLowerCase() + ".jpg";
    img.alt = film;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Rimuovi";
    removeButton.addEventListener("click", function() {
      listItem.remove();
      watchlistCount--;
      document.getElementById("watchlist-count").textContent = watchlistCount;
      if (watchlistCount === 0) {
        document.getElementById("watchlist").classList.add("hidden");
      }
      const watchlistHeight = watchlistItems.childElementCount * 50;
      document.getElementById("watchlist").style.height = `${Math.min(watchlistHeight+200, 1000)}px`;
    });
    
    listItem.appendChild(img);
    listItem.appendChild(removeButton);
    watchlistItems.appendChild(listItem);
    
    watchlistCount++;
    document.getElementById("watchlist-count").textContent = watchlistCount;
    
    document.getElementById("watchlist").classList.remove("hidden");
    
    const watchlistHeight = watchlistItems.childElementCount * 50;
    document.getElementById("watchlist").style.height = `${Math.min(watchlistHeight+200, 500)}px`;
  }
  

function togglewatchlist() {
  document.getElementById("watchlist").classList.toggle("hidden");
}

function clearwatchlist() {
    const watchlistItems = document.getElementById("watchlist-items");
    watchlistItems.innerHTML = "";
    
    watchlistCount = 0;
    document.getElementById("watchlist-count").textContent = watchlistCount;
    
    document.getElementById("watchlist").classList.add("hidden");
    
    document.getElementById("watchlist").style.height = "auto";
  }


function displayErrorMessage(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");

    setTimeout(() => {
        errorMessage.classList.add("hidden");
    }, 3000);
}