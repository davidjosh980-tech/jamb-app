document.getElementById('submit1').addEventListener('click', () => {
    const first = document.getElementById('first').value;
    const second = document.getElementById('second').value;
    const third = document.getElementById('third').value;

    localStorage.setItem('first', first);
    localStorage.setItem('second', second);
    localStorage.setItem('third', third);

    window.location.href = 'logpag2.html';
});