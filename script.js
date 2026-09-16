/**
 * Tarunya K - Portfolio Interactive Logic
 * - Code Editor Typewriter Effect
 * - Mobile Navigation Toggle
 * - Active ScrollSpy for Header Links
 * - Interactive Form Feedback Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initMobileNav();
  initScrollSpy();
  initContactForm();
});

/**
 * 1. Realistic Code Editor Typewriter Effect
 */
function initTypewriter() {
  const codeContainer = document.getElementById('code-typewriter');
  if (!codeContainer) return;

  const javaCodeLines = [
    '<span class="token-keyword">public class</span> <span class="token-class">TarunyaProfile</span> <span class="token-bracket">{</span>',
    '    <span class="token-type">String</span> <span class="token-variable">name</span> = <span class="token-string">"Tarunya K"</span>;',
    '    <span class="token-type">String</span> <span class="token-variable">role</span> = <span class="token-string">"Java Full Stack Developer"</span>;',
    '    <span class="token-type">String</span> <span class="token-variable">academy</span> = <span class="token-string">"TAP Academy, Bengaluru"</span>;',
    '    ',
    '    <span class="token-comment">// Core Technologies & Frameworks</span>',
    '    <span class="token-type">String[]</span> <span class="token-variable">coreStack</span> = {',
    '        <span class="token-string">"Core Java"</span>, <span class="token-string">"JDBC / Servlets / JSP"</span>,',
    '        <span class="token-string">"Spring Boot"</span>, <span class="token-string">"React.js"</span>, <span class="token-string">"MySQL"</span>',
    '    };',
    '    ',
    '    <span class="token-type">String</span> <span class="token-variable">flagshipProject</span> = <span class="token-string">"FoodifyApps"</span>;',
    '    <span class="token-type">boolean</span> <span class="token-variable">openForRoles</span> = <span class="token-boolean">true</span>;',
    '    ',
    '    <span class="token-keyword">public void</span> <span class="token-method">buildImpact</span>() <span class="token-bracket">{</span>',
    '        <span class="token-class">System</span>.out.<span class="token-method">println</span>(<span class="token-string">"Writing clean, robust, and scalable solutions!"</span>);',
    '    <span class="token-bracket">}</span>',
    '<span class="token-bracket">}</span>'
  ];

  let lineIndex = 0;
  let currentHtml = '';

  function typeNextLine() {
    if (lineIndex < javaCodeLines.length) {
      currentHtml += javaCodeLines[lineIndex] + '<br/>';
      codeContainer.innerHTML = currentHtml + '<span class="typewriter-cursor"></span>';
      lineIndex++;
      // Natural typing variation
      const delay = Math.floor(Math.random() * 80) + 60;
      setTimeout(typeNextLine, delay);
    } else {
      // Keep cursor blinking at the end
      codeContainer.innerHTML = currentHtml + '<span class="typewriter-cursor"></span>';
    }
  }

  // Start typing after initial load
  setTimeout(typeNextLine, 500);
}

/**
 * 2. Mobile Menu Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    toggleBtn.innerHTML = isOpen ? '✕' : '☰';
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.innerHTML = '☰';
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * 3. Active Nav Link ScrollSpy
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
}

/**
 * 4. Interactive Contact Form Handler
 */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const toast = document.getElementById('form-toast');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.form-submit-btn');
    const originalText = submitBtn.innerHTML;

    // Loading state
    submitBtn.innerHTML = '<span>Sending Message...</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
      // Success feedback
      submitBtn.innerHTML = '<span>Message Sent! ✓</span>';
      form.reset();

      // Show toast
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4000);
      }

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }, 1000);
  });
}
