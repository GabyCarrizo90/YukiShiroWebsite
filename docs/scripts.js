// Lightbox functionality
document.querySelectorAll('.lightbox').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = item.getAttribute('href');
        const lightboxDiv = document.createElement('div');
        lightboxDiv.classList.add('lightbox-container');
        lightboxDiv.innerHTML = `<img src="${imgSrc}" alt="Lightbox Image">`;
        document.body.appendChild(lightboxDiv);
        lightboxDiv.addEventListener('click', () => document.body.removeChild(lightboxDiv));
    });
});

// Instagram feed integration (replace with your actual token)
const token = 'LaPutaMadre';
fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}`)
    .then(response => response.json())
    .then(data => {
        const instagramFeed = document.getElementById('instagram-feed');
        data.data.slice(0, 3).forEach(post => {
            const img = document.createElement('img');
            img.src = post.media_url;
            img.alt = post.caption;
            instagramFeed.appendChild(img);
        });
    });

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});
