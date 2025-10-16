// Load content dynamically with fade-in
async function loadPage(page, pushState = true) {
  const main = document.getElementById('main-content');
  main.classList.remove('fade-in');

  try {
    const response = await fetch(page);
    if (!response.ok) throw new Error('Page not found');
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const newMain = doc.querySelector('main');
    if (!newMain) throw new Error('Main content not found');

    requestAnimationFrame(() => {
      main.innerHTML = newMain.innerHTML;
      main.classList.add('fade-in');
      // Re-attach listeners after content load
      attachNavListeners();
    });

    document.title = doc.querySelector('title')?.textContent || 'HR Support';

    if (pushState) {
      history.pushState({ page }, '', page);
    }
  } catch (err) {
    console.error('Error loading page:', err);
    main.innerHTML = '<p>Error loading content. Please try again.</p>';
    main.classList.add('fade-in');
  }
}

// Set up navigation listeners
function attachNavListeners() {
  // Handle navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      loadPage(page);
    });
  });

  // Handle Get Started button
  document.querySelector('.start-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    loadPage('index.html');
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  attachNavListeners();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
  if (event.state && event.state.page) {
    loadPage(event.state.page, false);
  }
});