fetch("/user-count")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("count").textContent = data.count;
  })

  .catch((error) => {
    console.error("Error fetching user count:", error);
    document.getElementById("count").textContent = "Error";
  });
