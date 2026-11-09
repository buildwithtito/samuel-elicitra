 // Form Submission Handler
        function handleFormSubmit(e) {
            e.preventDefault();
            document.getElementById('formSuccess').classList.remove('hidden');
            e.target.reset();
        }

        // Focus Lightbox Controller
        function openLightbox(videoSrc, title) {
            const modal = document.getElementById('videoLightbox');
            const video = document.getElementById('lightboxVideo');
            const source = document.getElementById('lightboxSource');
            const titleEl = document.getElementById('lightboxTitle');

            source.src = videoSrc;
            video.load();
            video.muted = false; // Enable audio in focus player
            video.play();
            titleEl.textContent = '▶ ' + title;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const modal = document.getElementById('videoLightbox');
            const video = document.getElementById('lightboxVideo');

            video.pause();
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Scroll Observer for Story Section
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.2 });

            document.querySelectorAll('.story-reveal').forEach(el => observer.observe(el));
        });