document.querySelector('.dropdown-button').addEventListener('click', function() {
    const navigation = document.querySelector('.navigation');
    if (navigation.style.display === 'flex') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'flex';
    }
});
