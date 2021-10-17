function myfun() {
    var x = document.querySelector(".cat1-sub")
    var y = document.querySelector(".cat2-sub")
    if (x.style.display === "none") {
      x.style.display = "block";
      if (y.style.display ==="block"){
          y.style.display = "none";
      }
    } else {
      x.style.display = "none";
    }
  }

  

  