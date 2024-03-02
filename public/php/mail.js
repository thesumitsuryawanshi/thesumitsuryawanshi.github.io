<form id="contactForm">
  <!-- Your form fields here -->
  <input type="text" name="name">
  <input type="email" name="email">
  <textarea name="message"></textarea>
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  var formData = new FormData(this);
  
  fetch("/send_email.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    if (result === "OK") {
      alert("Message sent successfully!");
    } else {
      alert("Something went wrong. Please try again.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
</script>
