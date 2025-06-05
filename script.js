function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");
  
    if (recommendation.value != null && recommendation.value.trim() !== "") {
      console.log("New recommendation added");
  
      // Create and append recommendation
      let element = document.createElement("div");
      element.setAttribute("class", "recommendation");
      element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
      document.getElementById("all_recommendations").appendChild(element);
  
      // Clear textarea
      recommendation.value = "";
  
      // ✅ Step 1: PLACE THIS LINE EXACTLY HERE 👇
      showPopup(true);
    }
  }
  

  function showPopup(bool) {
    document.getElementById("popup").style.visibility = bool ? "visible" : "hidden";
  }
