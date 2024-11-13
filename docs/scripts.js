document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! I will get back to you soon.');
});

// Placeholder for Instagram feed integration
const instagramFeed = document.getElementById('instagram-feed');
instagramFeed.innerHTML = '<p>Instagram feed will be displayed here.</p>';
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

// Instagram feed integration (replace 'your-access-token' with your actual token)
fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQWRQc0xmZA3FCSmlCTGVMeXVjSEJGaVZAsdnd3VTg4S1V2dlNvRmJWU01qSkpVZAUk0XzkyVFVHa0czNVZAXbHhwSVV2LVJDU29VdmtjY1JvOWlQeUpVei1XRHZAKelNYUjJEVnpORnpNdFltYTNWVWp6UVBwNzF1eVkZD')
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
