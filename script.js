const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('takenoko-theme');

if (savedTheme === 'dark') {
  root.classList.add('dark');
  themeToggle.textContent = '☀';
}

themeToggle.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  themeToggle.textContent = isDark ? '☀' : '☾';
  localStorage.setItem('takenoko-theme', isDark ? 'dark' : 'light');
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// セクションが画面に入ったとき、自然に表示する
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

sections.forEach((section) => {
  section.classList.add('reveal');
  observer.observe(section);
});
