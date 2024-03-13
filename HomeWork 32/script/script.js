document.addEventListener('DOMContentLoaded', function() {
    const images = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg'];
    const sliderImg = document.getElementById('slider-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImageIndex = 0;
    function showImage(index) {
        sliderImg.src = images[index];
    }
    function toggleButtonVisibility() {
        if (currentImageIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if (currentImageIndex === images.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
    }
    prevBtn.addEventListener('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            showImage(currentImageIndex);
            toggleButtonVisibility();
        }
    });
    nextBtn.addEventListener('click', function() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            showImage(currentImageIndex);
            toggleButtonVisibility();
        }
    });
    showImage(currentImageIndex);
    toggleButtonVisibility();
});
