document.getElementById("shoppingListForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var item = document.getElementById("item").value.trim();
    if (item === "") {
      alert("Please enter an item");
      return;
    }
  
    addItemToList(item);
    document.getElementById("item").value = ""; // Clear input field
  });
  
  function addItemToList(item) {
    var listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = item;
  
    var closeButton = document.createElement("button");
    closeButton.className = "btn btn-sm btn-danger float-right ml-2";
    closeButton.textContent = "Remove";
    closeButton.onclick = function() {
      listItem.remove();
    };
  
    var completeButton = document.createElement("button");
    completeButton.className = "btn btn-sm btn-success float-right";
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
      listItem.classList.toggle("completed");
    };
  
    listItem.appendChild(completeButton);
    listItem.appendChild(closeButton);
  
    document.getElementById("shoppingList").appendChild(listItem);
  }
  document.getElementById("specialListForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get all checked items
    var checkedItems = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
      checkedItems.push(checkbox.value);
    });
  
    // Display selected items
    if (checkedItems.length > 0) {
      alert("Selected items: " + checkedItems.join(", "));
    } else {
      alert("Please select at least one item");
    }
  });
  
  //local storege 

  // Load previously saved items from local storage
window.onload = function() {
    var savedItems = localStorage.getItem("momSpecialList");
    if (savedItems) {
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
        if (savedItems.includes(checkbox.value)) {
          checkbox.checked = true;
        }
      });
    }
  };
  
  document.getElementById("specialListForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get all checked items
    var checkedItems = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
      checkedItems.push(checkbox.value);
    });
  
    // Save selected items to local storage
    localStorage.setItem("momSpecialList", JSON.stringify(checkedItems));
  
    // Display selected items
    if (checkedItems.length > 0) {
      alert("Selected items: " + checkedItems.join(", "));
    } else {
      alert("Please select at least one item");
    }
  });

  // dark mode
  
  document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    this.classList.toggle('btn-outline-dark');
    this.classList.toggle('btn-outline-light');
  });

 //contact

 document.getElementById('subscribeForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('हमारे साथ जुड़ने  के लिए आपका बहुत बहुत धन्यवाद!!😊🤩');
  // Optionally, you can reset the form after submission
  this.reset();
});

//login form
