const form = document.getElementById('signinForm');
    const modal = document.getElementById('popupModal');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      modal.style.display = "block";
    });

    function closeModal() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }