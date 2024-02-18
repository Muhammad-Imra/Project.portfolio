// Assignment 6
document.getElementById('btn').addEventListener('click', function() {
    alert('Button Clicked!');
});

document.getElementById('hover-div').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

document.getElementById('hover-div').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});


