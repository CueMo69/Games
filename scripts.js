document.getElementById('settings-btn').addEventListener('click', function() {
    document.getElementById('settings').style.display = 'block';
});

document.getElementById('close-settings').addEventListener('click', function() {
    document.getElementById('settings').style.display = 'none';
});

document.getElementById('theme').addEventListener('change', function() {
    const theme = this.value;
    if (theme === 'black-purple') {
        document.body.style.backgroundColor = '#121212';
        document.querySelector('.container').style.color = '#ffffff';
        document.querySelectorAll('.game-box').forEach(box => {
            box.style.backgroundColor = '#3e3e3e';
            box.style.boxShadow = '0 0 15px purple';
        });
        document.querySelector('button').style.backgroundColor = 'purple';
    } else if (theme === 'white-blue') {
        document.body.style.backgroundColor = '#ffffff';
        document.querySelector('.container').style.color = '#000000';
        document.querySelectorAll('.game-box').for
