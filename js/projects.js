const projects = {
    api: {
        images: [
            'assets/projects/rest-api/1.png',
            'assets/projects/rest-api/2.png',
            'assets/projects/rest-api/3.png'
        ]
    },
    timeseries: {
        images: [
            'assets/projects/data-analysis/2.png',
            'assets/projects/data-analysis/1.png',
            'assets/projects/data-analysis/3.png'
        ]
    },
    qr: {
        images: [
            'assets/projects/qr-generator/1.png',
            'assets/projects/qr-generator/2.png',
            'assets/projects/qr-generator/3.png'
        ]
    },
    biome: {
        images: [
            'assets/projects/animal-web/3.png',
            'assets/projects/animal-web/2.png',
            'assets/projects/animal-web/1.png'
        ]
    },
    optical: {
        images: [
            'assets/projects/optical-store/1.png',
            'assets/projects/optical-store/2.png'
        ]
    }
};

function renderSlide() {
    const data = projects[activeProject];
    const total = data.images.length;
    const slide = document.getElementById('lightbox-slide');
    const dots = document.getElementById('lightbox-dots');
    const current_item = data.images[current];

    // if it starts with # it's a color placeholder, otherwise it's a real image
    if (current_item.startsWith('#')) {
        slide.innerHTML = `
            <div style="
                width: 100%; height: 100%;
                background-color: ${current_item};
                border-radius: 8px;
                display: flex; align-items: center; justify-content: center;
                font-size: 22px; font-weight: 700; color: #242734;
            ">Preview ${current + 1}</div>`;
    } else {
        slide.innerHTML = `
            <img src="${current_item}" style="
                width: 100%; height: 100%;
                object-fit: contain;
                border-radius: 8px;
                display: block;
            ">`;
    }

    dots.innerHTML = Array.from({ length: total }, (_, i) =>
        `<span class="dot ${i === current ? 'dot-active' : ''}" onclick="goToSlide(${i})"></span>`
    ).join('');
}

let activeProject = '';
let current = 0;

function openLightbox(project) {
    activeProject = project;
    current = 0;

    document
        .getElementById('lightbox')
        .classList.add('active');

    renderSlide();
}

function closeLightbox() {
    document
        .getElementById('lightbox')
        .classList.remove('active');
}

function closeLightboxOutside(event) {
    if (event.target.id === 'lightbox') {
        closeLightbox();
    }
}
function changeSlide(direction) {
    const total = projects[activeProject].images.length;

    current += direction;

    if (current < 0) {
        current = total - 1;
    }

    if (current >= total) {
        current = 0;
    }

    renderSlide();
}

function goToSlide(index) {
    current = index;
    renderSlide();
}