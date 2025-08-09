// Reveal "Who is Jake?" after "Hello!" fades out
setTimeout(() => {
  const typewriter = document.querySelector('.typewriter');
  typewriter.classList.remove('hidden');
  document.body.style.background = '#282727ff'; // or any color or gradient
}, 3000); // Start at 3s

// Hide "Who is Jake?" after typing + pause + deleting
setTimeout(() => {
  const typewriter = document.querySelector('.typewriter');
  typewriter.style.display = 'none';
}, 9700); // 3s + 2.5s + 1.5s + 2s = 9s

// Show "I'm Jake." after the first typewriter is gone
setTimeout(() => {
  const typewriter2 = document.querySelector('.typewriter2');
  typewriter2.classList.remove('hidden');
}, 9700); // Start at 9.7s, small delay for smoother transition

setTimeout(() => {
  const typewriter2 = document.querySelector('.typewriter2');
  typewriter2.style.borderRight = 'none';

  const autoType = document.querySelector('.auto_type');
  autoType.classList.remove('hidden');

  new Typed('.auto_type', {
    strings: [
      "a Student Mentor",
      "a Website Developer",
      "a UT Engineering Student"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: false,
  });
}, 11700);

setTimeout(() => {
const learnMoreBtn = document.getElementById('learn-more-btn');
  learnMoreBtn.style.opacity = '1';
  learnMoreBtn.style.pointerEvents = 'auto';
}, 14000)

