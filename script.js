window.addEventListener("DOMContentLoaded", initPage);

        function initPage() {

        const menu = document.querySelector('#burger_menu');
        const menuLinks = document.querySelector('.nav_menu');

        menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
        })
        }