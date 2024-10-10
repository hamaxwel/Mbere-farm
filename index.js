document.querySelector('.dropdown-button').addEventListener('click', function() {
    const navigation = document.querySelector('.navigation');
    navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
});
