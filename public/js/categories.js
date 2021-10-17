const x = document.getElementById("subcat1");
    const y = document.getElementById("subcat2");
function myfun() {
    
    if (x.style.display === "none") {
      x.style.display = "block";
          y.style.visibility = "hidden";
        

    } else {
      x.style.display = "none";
      y.style.visibility = "none";
    }
  }
  function myfun1() {
    
    if (y.style.display === "none") {
      y.style.display = "block";
          x.style.visibility = "hidden";
        

    } else {
      y.style.display = "none";
      x.style.visibility = "none";
    }
  }



  