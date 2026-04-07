document.getElementById('submit').addEventListener(
    'click', () => {
        window.location.href = '../boostrap1/boostrap1.html';
    }
);

document.getElementById('submit1').addEventListener('click', () => {
    const reg = document.getElementById('reg').value;
    const course = document.getElementById('course').value;
    const uni = document.getElementById('uni').value;

    localStorage.setItem('reg', reg);
    localStorage.setItem('course', course);
    localStorage.setItem('uni', uni);

    window.location.href = 'boostrap1/boostrap1.html';
});