console.log("Olá mundo");
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.github.com/users/franklin.max22")
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        console.log("erro.papai");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("gh").textContent = data.id;
    });
});
