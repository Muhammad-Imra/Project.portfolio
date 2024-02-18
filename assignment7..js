// Assignment 7
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    if (username.length >= 5 && /^[a-zA-Z0-9]+$/.test(username)) {
        alert('Success: Username is valid.');
    } else {
        alert('Error: Username should be at least 5 characters long and contain only alphanumeric characters.');
    }
});

document.getElementById('toggleBtn').addEventListener('click', function() {
    const hiddenDiv = document.getElementById('hiddenDiv');
    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'block';
    } else {
        hiddenDiv.style.display = 'none';
    }
});


