function toggleVisibility(event, elementId) {
    event.preventDefault();
    var elements = document.querySelectorAll('.extra-links');
    elements.forEach(function(element) {
        if (element.id === elementId) {
            if (element.classList.contains('show')) {
                element.classList.remove('show');
            } else {
                element.classList.add('show');
            }
        } else {
            element.classList.remove('show');
        }
    });
}

document.getElementById('expand').addEventListener('click', function(event) {
    toggleVisibility(event, 'extra-links');
});

document.getElementById('expand2').addEventListener('click', function(event) {
    toggleVisibility(event, 'extra-links2');
});