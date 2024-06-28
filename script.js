document.getElementById('expand').addEventListener('click', function(event) {
    event.preventDefault();
    var extraLinks = document.getElementById('extra-links');
    if (extraLinks.style.display === 'none' || extraLinks.style.display === '') {
        extraLinks.style.display = 'block';
    } else {
        extraLinks.style.display = 'none';
    }
});