document.addEventListener('DOMContentLoaded', () => {
    const savedPrimaryColor = localStorage.getItem('primaryColor') || '#800080';
    const savedSecondaryColor = localStorage.getItem('secondaryColor') || '#ff00ff';

    document.getElementById('primary-color').value = savedPrimaryColor;
    document.getElementById('secondary-color').value = savedSecondaryColor;

    updateTheme(savedPrimaryColor, savedSecondaryColor);

    document.getElementById('settings-btn').addEventListener('click', () => {
        document.getElementById('settings').style.display = 'block';
        document.getElementById('modal-overlay').style.display = 'block';
    });

    document.getElementById('close-settings').addEventListener('click', () => {
        document.getElementById('settings').style.display = 'none';
        document.getElementById('modal-overlay').style.display = 'none';
    });

    document.getElementById('modal-overlay').addEventListener('click', () => {
        document.getElementById('settings').style.display = 'none';
        document.getElementById('modal-overlay').style.display = 'none';
    });

    document.getElementById('primary-color').addEventListener('input', function () {
        const primaryColor = this.value;
        const secondaryColor = document.getElementById('secondary-color').value;
        updateTheme(primaryColor, secondaryColor);
        localStorage.setItem('primaryColor', primaryColor);
    });

    document.getElementById('secondary-color').addEventListener('input', function () {
        const primaryColor = document.getElementById('primary-color').value;
        const secondaryColor = this.value;
        updateTheme(primaryColor, secondaryColor);
        localStorage.setItem('secondaryColor', secondaryColor);
    });

    function updateTheme(primaryColor, secondaryColor) {
        document.body.style.setProperty('--primary-color', primaryColor);
        document.body.style.setProperty('--secondary-color', secondaryColor);
        const boxes = document.querySelectorAll('.game-box');
        const buttons = document.querySelectorAll('button');

        boxes.forEach(box => {
            box.style.boxShadow = `0 0 15px ${secondaryColor}`;
        });
        buttons.forEach(btn => {
            btn.style.backgroundColor = secondaryColor;
        });
    }
});
