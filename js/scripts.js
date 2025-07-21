document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('alertButton');

    alertButton.addEventListener('click', function() {
        alert('Yay! You clicked the button. You are ready to host this site!');
    });
});