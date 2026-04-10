
const ADMIN_PIN = '1234';

const SEED_TOURS = [
  {
    id: 'kedarnath',
    title: 'Kedarnath Yatra 2026',
    price: 18500,
    duration: '6 Days 5 Nights',
    difficulty: 'Moderate',
    location: 'Rudraprayag, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1649147313351-c86537fda0eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Divine Shiva pilgrimage from Haridwar with guided 16km trek.',
    itinerary: [
      { day: '1', title: 'Arrival in Haridwar', desc: 'Welcome to the holy city of Haridwar. Transfer to hotel for rest and acclimatization. Evening Ganga Aarti ceremony.' },
      { day: '2', title: 'Haridwar to Guptkashi (210km)', desc: 'Scenic drive through Devprayag, Rudraprayag, and Karanprayag. Visit local temples en route. Overnight stay in Guptkashi.' },
      { day: '3', title: 'Guptkashi to Kedarnath (16km trek)', desc: 'Early morning start for the sacred trek. Cross forests, streams, and mountain paths. Reach Kedarnath temple by evening.' },
      { day: '4', title: 'Kedarnath Darshan & Puja', desc: 'Morning prayers and darshan at the ancient temple. Free time to explore the surroundings and meditate.' },
      { day: '5', title: 'Return to Guptkashi', desc: 'Descend back to Guptkashi. Rest and prepare for onward journey.' },
      { day: '6', title: 'Guptkashi to Haridwar', desc: 'Drive back to Haridwar with beautiful mountain views. Drop at railway station/airport.' }
    ],
    inclusions: ['Tempo Traveller', 'B/F Dinner', 'Hotels', 'Guide'],
    exclusions: ['Lunch', 'Helicopter', 'Pony']
  },
  {
    
    id: 'chardham',
    title: 'Chardham Yatra Premium',
    price: 42000,
    duration: '10 Days 9 Nights',
    difficulty: 'Challenging',
    location: 'Uttarakhand Himalayas',
    image: 'https://images.pexels.com/photos/35408529/pexels-photo-35408529.jpeg?q=80&w=1000&auto=format&fit=crop',
    description: 'Yamunotri, Gangotri, Kedarnath, Badrinath - Complete pilgrimage.',
    itinerary: [
      { day: '1', title: 'Delhi/Haridwar to Barkot', desc: 'Pickup from Delhi or Haridwar. Drive to Barkot via Mussoorie. Check into hotel and evening briefing.' },
      { day: '2', title: 'Barkot to Yamunotri & Uttarkashi', desc: 'Drive to Hanuman Chatti, trek to Yamunotri (6km). Holy dip in Yamuna River. Return to Uttarkashi.' },
      { day: '3', title: 'Uttarkashi to Gangotri & Harsil', desc: 'Drive to Gangotri via beautiful Bhagirathi valley. Perform puja at Gangotri temple. Overnight in Harsil.' },
      { day: '4', title: 'Harsil to Kedarnath', desc: 'Drive to Guptkashi, then trek to Kedarnath (16km). Reach the sacred temple by evening.' },
      { day: '5', title: 'Kedarnath Darshan', desc: 'Morning prayers and darshan. Free time for meditation and exploring the divine surroundings.' },
      { day: '6', title: 'Kedarnath to Badrinath', desc: 'Drive from Guptkashi to Badrinath via Rudraprayag and Chamoli. Scenic mountain views.' },
      { day: '7', title: 'Badrinath Darshan', desc: 'Visit Badrinath temple, Mana village, and Vyas Gufa. Evening aarti ceremony.' },
      { day: '8', title: 'Badrinath to Rudraprayag', desc: 'Drive to Rudraprayag. Visit Rudranath temple en route. Relax by the confluence of rivers.' },
      { day: '9', title: 'Rudraprayag to Rishikesh', desc: 'Drive to Rishikesh. Visit local temples and enjoy the Ganges. Evening Ganga Aarti.' },
      { day: '10', title: 'Rishikesh to Delhi/Haridwar', desc: 'Morning departure for Delhi or Haridwar. End of the divine Chardham Yatra.' }
    ],
    inclusions: ['All Meals', 'AC Coach', 'Hotels', 'Oxygen'],
    exclusions: ['VIP Darshan', 'Porters']
  },
  {
    id: 'valley',
    title: 'Valley of Flowers Trek',
    price: 14500,
    duration: '6 Days 5 Nights',
    difficulty: 'Easy-Moderate',
    location: 'Chamoli, Uttarakhand',
    image: 'https://images.pexels.com/photos/32108616/pexels-photo-32108616.jpeg?q=80&w=1000&auto=format&fit=crop',
    description: 'UNESCO site with alpine flowers + Hemkund Sahib.',
    itinerary: [
      { day: '1', title: 'Delhi/Rishikesh to Govindghat', desc: 'Pickup and drive to Govindghat (275km). Check into campsite. Evening briefing about the trek.' },
      { day: '2', title: 'Govindghat to Ghangaria (14km trek)', desc: 'Trek through dense forests and streams. Reach Ghangaria village. Visit Hemkund Sahib temple.' },
      { day: '3', title: 'Ghangaria to Valley of Flowers (6km)', desc: 'Early morning trek to the Valley of Flowers. Explore the colorful alpine meadows and rare flowers.' },
      { day: '4', title: 'Valley of Flowers Exploration', desc: 'Full day to explore the valley. Visit Pushpawati River and enjoy the scenic beauty. Optional trek to nearby peaks.' },
      { day: '5', title: 'Valley to Ghangaria & Govindghat', desc: 'Return trek to Ghangaria, then descend to Govindghat. Relax and enjoy the evening.' },
      { day: '6', title: 'Govindghat to Delhi/Rishikesh', desc: 'Drive back to Delhi or Rishikesh. End of the beautiful Valley of Flowers trek.' }
    ],
    inclusions: ['Permits', 'Guide', 'Meals', 'Stay'],
    exclusions: ['Insurance', 'Offloading']
  }
];

const formatCurrency = (amount) => new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 0}).format(amount);

const appState = {
  view: 'home',
  selectedTour: null,
  tours: SEED_TOURS,
  isAdminMode: false
};

const app = {
  setView(view) {
    appState.view = view;
    appState.selectedTour = null;
    if (view === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    app.render();
  },

  render() {
    // Hide all sections
    ['hero', 'features', 'featured-section', 'tours-section', 'tour-detail', 'about-section', 'team-section', 'admin-section', 'stats-reviews-section']
      .forEach(id => document.getElementById(id).style.display = 'none');

    document.getElementById('admin-btn').style.display = appState.isAdminMode ? 'block' : 'none';
    app.updateNavigation();

    if (appState.view === 'home') app.renderHome();
    else if (appState.view === 'tours') {
      // Keep home sections visible and scroll to packages when clicking Packages nav
      app.renderHome();
      document.getElementById('featured-section').scrollIntoView({ behavior: 'smooth' });
    }
    else if (appState.view === 'details') app.renderTourDetail();
    else if (appState.view === 'about') {
      app.renderHome();
      document.getElementById('about-section').style.display = 'block';
      document.getElementById('team-section').style.display = 'block';
      document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
    }
    else if (appState.view === 'admin') app.renderAdmin();
  },

  renderHome() {
    document.getElementById('hero').style.display = 'block';
    document.getElementById('features').style.display = 'block';
    document.getElementById('featured-section').style.display = 'block';
    document.getElementById('stats-reviews-section').style.display = 'block';
    document.getElementById('about-section').style.display = 'block';
    document.getElementById('team-section').style.display = 'block';

    const grid = document.getElementById('featured-grid');
    grid.innerHTML = appState.tours.slice(0, 3).map(tour => app.createTourCard(tour)).join('');
    app.attachListeners();
    
    // Initialize animations when rendering home
    initializeHomeSection();
  },

  renderTours() {
    // ✅ FIXED SELECTOR HERE
    document.getElementById('tours-section').style.display = 'block';
    document.querySelector('.tours-section h2').textContent = `All Packages (${appState.tours.length})`;
    
    const grid = document.getElementById('tours-grid');
    grid.innerHTML = appState.tours.map(tour => app.createTourCard(tour)).join('');
    app.attachListeners();
  },

  createTourCard(tour) {
    const whatsappMsg = encodeURIComponent(`Hi, interested in ${tour.title} - ${tour.duration} for ${formatCurrency(tour.price)}`);
    return `
      <div class="tour-card">
        <div style="position:relative;overflow:hidden;height:14rem">
          <img src="${tour.image}" alt="${tour.title}" class="tour-card-image">
          <div class="tour-card-duration">${tour.duration}</div>
        </div>
        <div class="tour-card-content">
          <h3 class="tour-card-title">${tour.title}</h3>
          <div class="tour-card-location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${tour.location}
          </div>
          <p class="tour-card-description">${tour.description}</p>
          <div class="tour-card-footer">
            <div class="tour-price-section">
              <div class="tour-price-label">Starting from</div>
              <div class="tour-price">${formatCurrency(tour.price)}</div>
            </div>
            <div class="tour-card-buttons">
              <button class="tour-card-btn view-details-btn" data-tour-id="${tour.id}">View Details</button>
              <a href="https://wa.me/917248843190?text=${whatsappMsg}" target="_blank" class="tour-card-btn whatsapp-btn">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  attachListeners() {
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.onclick = (e) => {
        const tourId = e.target.dataset.tourId;
        appState.selectedTour = appState.tours.find(t => t.id === tourId);
        appState.view = 'details';
        app.render();
      };
    });

    // Tab switching for tour details
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.onclick = (e) => {
        const tab = e.target.dataset.tab;
        app.switchTab(tab);
      };
    });
  },

  switchTab(tab) {
    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    // Render tab content
    const content = document.getElementById('detail-content');
    if (tab === 'itinerary') {
      content.innerHTML = app.renderItinerary();
    } else if (tab === 'inclusions') {
      content.innerHTML = app.renderInclusions();
    } else if (tab === 'map') {
      content.innerHTML = app.renderMap();
    }
  },

  renderItinerary() {
    const tour = appState.selectedTour;
    return `
      <div class="itinerary-list">
        ${tour.itinerary.map(item => `
          <div class="itinerary-item">
            <div class="itinerary-day">
              <div class="itinerary-day-number">${item.day}</div>
              <div class="itinerary-line"></div>
            </div>
            <div class="itinerary-content">
              <h4>${item.title}</h4>
              <p>${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderInclusions() {
    const tour = appState.selectedTour;
    return `
      <div class="inclusions-section">
        <h3>Inclusions</h3>
        <ul class="inclusions-list">
          ${tour.inclusions.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <h3>Exclusions</h3>
        <ul class="exclusions-list">
          ${tour.exclusions.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  },

  renderMap() {
    return `
      <div class="map-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <p>Interactive map coming soon</p>
        <p class="map-note">Location: ${appState.selectedTour.location}</p>
      </div>
    `;
  },

  renderTourDetail() {
    const tour = appState.selectedTour;
    if (!tour) return;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('tour-detail').style.display = 'block';
    
    // Show loading spinner, hide content
    document.getElementById('detail-loading').style.display = 'flex';
    document.querySelector('.back-btn').style.display = 'none';
    document.querySelector('.detail-grid').style.display = 'none';
    
    // Simulate loading time
    setTimeout(() => {
      document.getElementById('detail-loading').style.display = 'none';
      document.querySelector('.back-btn').style.display = 'flex';
      document.querySelector('.detail-grid').style.display = 'grid';
      document.getElementById('detail-image').src = tour.image;
      document.getElementById('detail-title').textContent = tour.title;
      document.getElementById('detail-price').textContent = `${formatCurrency(tour.price)}/person`;
      // Show itinerary by default
      app.switchTab('itinerary');
      // Attach listeners for tabs
      app.attachListeners();
    }, 800); // 800ms loading animation
  },

  renderAbout() {
    document.getElementById('about-section').style.display = 'block';
  },

  renderAdmin() {
    document.getElementById('admin-section').style.display = 'block';
  },

  openBookingModal() {
    const tour = appState.selectedTour;
    if (!tour) return;

    const message = `*Booking Inquiry*%0A%0A` +
      `*Tour:* ${tour.title}%0A` +
      `*Duration:* ${tour.duration}%0A` +
      `*Location:* ${tour.location}%0A` +
      `*Difficulty:* ${tour.difficulty}%0A` +
      `*Price:* ${formatCurrency(tour.price)}/person%0A%0A` +
      `I'm interested in booking this tour. Please provide more details.`;

    const whatsappUrl = `https://wa.me/917248843190?text=${message}`;
    window.open(whatsappUrl, '_blank');
  },

  updateNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.textContent.toLowerCase().includes(appState.view));
    });
  },

  animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          let current = 0;
          const increment = target / 40; // Fewer iterations for faster animation
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            entry.target.textContent = Math.floor(current);
            if (current >= target) {
              clearInterval(timer);
              entry.target.textContent = target;
            }
          }, 25);
          observer.unobserve(entry.target);
        }
      });
    });
    statNumbers.forEach(num => observer.observe(num));
  },

  setupTestimonialsCarousel() {
    const testimonialsTrack = document.getElementById('testimonials-track');
    if (!testimonialsTrack) return;
    
    const testimonialCards = testimonialsTrack.querySelectorAll('.testimonial-card');
    
    // Clone all testimonial cards for infinite scroll
    testimonialCards.forEach(card => {
      const clone = card.cloneNode(true);
      testimonialsTrack.appendChild(clone);
    });

    // Clone again to ensure smooth loop
    testimonialsTrack.querySelectorAll('.testimonial-card').forEach(card => {
      const clone = card.cloneNode(true);
      testimonialsTrack.appendChild(clone);
    });
  }
};

// Initialize counters and testimonials when on home page
function initializeHomeSection() {
  setTimeout(() => {
    app.animateCounters();
    app.setupTestimonialsCarousel();
  }, 100);
}

// Floating Contact Widget
const floatingWidget = {
  init() {
    const toggleBtn = document.getElementById('floating-toggle');
    const widget = document.querySelector('.floating-contact-widget');
    
    toggleBtn.addEventListener('click', () => {
      widget.classList.toggle('active');
      toggleBtn.classList.toggle('active');
    });

    // Close widget when clicking outside
    document.addEventListener('click', (e) => {
      if (!widget.contains(e.target)) {
        widget.classList.remove('active');
        toggleBtn.classList.remove('active');
      }
    });
  }
};

// Plan Trip Modal
const planTripModal = {
  init() {
    const modal = document.getElementById('plan-trip-modal');
    const openBtn = document.getElementById('plan-trip-btn');
    const closeBtn = document.getElementById('close-plan-modal');
    const form = document.getElementById('plan-trip-form');

    // Open modal
    openBtn.addEventListener('click', () => {
      modal.showModal();
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
      modal.close();
    });

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.close();
      }
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('trip-name').value,
        email: document.getElementById('trip-email').value,
        phone: document.getElementById('trip-phone').value,
        destination: document.getElementById('trip-destination').value,
        date: document.getElementById('trip-date').value,
        travelers: document.getElementById('trip-travelers').value,
        message: document.getElementById('trip-message').value
      };

      // Construct WhatsApp message
      const message = `*Trip Planning Inquiry*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Destination:* ${formData.destination || 'Not specified'}%0A` +
        `*Preferred Date:* ${formData.date || 'Not specified'}%0A` +
        `*Travelers:* ${formData.travelers}%0A` +
        `*Message:* ${formData.message || 'No special requirements'}`;

      // WhatsApp URL
      const whatsappUrl = `https://wa.me/917248843190?text=${message}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Close modal
      modal.close();
      
      // Reset form
      form.reset();
    });
  }
};

// START APP
document.addEventListener('DOMContentLoaded', () => {
  floatingWidget.init();
  planTripModal.init();
  app.render();
  initializeHomeSection();
});
