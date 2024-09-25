function toggleVisibility(event, elementId) {
    event.preventDefault();
    var elements = document.querySelectorAll('.extra-links');
    elements.forEach(function (element) {
        if (element.id === elementId) {
            if (element.classList.contains('show')) {
                element.classList.remove('show');
            } else {
                element.classList.add('show');
                // Adiciona fechamento automático após 10 segundos
                setTimeout(function () {
                    element.classList.remove('show');
                }, 5000);
            }
        } else {
            element.classList.remove('show');
        }
    });
}

document.getElementById('expand').addEventListener('click', function (event) {
    toggleVisibility(event, 'extra-links');
});

document.getElementById('expand2').addEventListener('click', function (event) {
    toggleVisibility(event, 'extra-links2');
});

document.getElementById('expand3').addEventListener('click', function (event) {
    toggleVisibility(event, 'extra-links3');
});
