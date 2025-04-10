document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'black-purple';
    document.getElementById('theme').value = savedTheme;
    document.getElementById('theme').dispatchEvent(new Event('change'));
});

document.getElementById('settings-btn').addEventListener('click', function() {
    document.getElementById('settings').style.display = 'block';
    document.getElementById('modal-overlay').style.display = 'block';
});

document.getElementById('close-settings').addEventListener('click', function() {
    document.getElementById('settings').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
});

document.getElementById('modal-overlay').addEventListener('click', function() {
    document.getElementById('settings').style.display = 'none';
    this.style.display = 'none';
});

document.getElementById('theme').addEventListener('change', function() {
    const theme = this.value;
    const boxes = document.querySelectorAll('.game-box');
    const buttons = document.querySelectorAll('button');

    if (theme === 'black-purple') {
        document.body.className = 'theme-black-purple';
        boxes.forEach(box => box.style.boxShadow = '0 0 15px purple');
        buttons.forEach(btn => btn.style.backgroundColor = 'purple');
    } else if (theme === 'white-blue') {
        document.body.className = 'theme-white-blue';
        boxes.forEach(box => box.style.boxShadow = '0 0 15px blue');
        buttons.forEach(btn => btn.style.backgroundColor = 'blue');
    }
    localStorage.setItem('theme', theme);
});
