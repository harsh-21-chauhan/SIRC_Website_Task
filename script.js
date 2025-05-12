 function showForm() {
      document.getElementsByClassName('form-container').style.remove('display');
    }
const form = document.getElementById('registerForm');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(event) {
        // Prevent the default form 
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      output.innerHTML = `
        <h4>Submitted Info:</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
      `;
    });

   