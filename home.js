const loadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
        const img = document.getElementById('profile');
        img.src = URL.createObjectURL(file);

        // hide input after selecting image
        document.getElementById('fileInput').style.display = 'none';
    }
};

// Load names from localStorage
const firstname = localStorage.getItem('first');
const secondname = localStorage.getItem('second');
const thirdname = localStorage.getItem('third');
const reg = localStorage.getItem('reg');
const course = localStorage.getItem('course');
const uni = localStorage.getItem('uni');

// Display safely
document.querySelector('.firstname').innerHTML = firstname || '';
document.querySelector('.secondname').innerHTML = secondname || '';
document.querySelector('.thirdname').innerHTML = thirdname || '';
document.querySelector('.reg').innerHTML = reg || '';
document.querySelector('.course').innerHTML = course || '';
document.querySelector('.uni').innerHTML = uni || '';