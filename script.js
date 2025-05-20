 function showForm() {
      document.getElementsByClassName('form-container').style.display = 'block';
    }
const form = document.getElementById('registerForm');
    const user = document.getElementById('user');

    form.addEventListener('submit', function(event) {
        // Prevent the default form 
       event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      user.innerHTML = `
        <h4>Submitted Info:</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
      `;
    });

    fetch('index.html')
    .then(response => response.text())
    .then(data => {
      // Optional: extract just the div if the file has more
      const temp = document.createElement('div');
      temp.innerHTML = data;

      const imported = temp.querySelector('#user');
      if (imported) {
        document.getElementById('placeholder').appendChild(imported);
      }
    })
    .catch(error => {
      console.error('Error loading the content:', error);
    });


  
   