// Smooth scrolling for anchor links in the navigation menu
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
//aws_access_key_id = AKIAUAEELPSN6F5BFZNM
//aws_secret_access_key = ENZoED1jRrLvyq81