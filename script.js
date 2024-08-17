const flipBox = document.querySelector('.flip-box');

flipBox.addEventListener('click', function() {
    this.querySelector('.flip-box-inner').classList.toggle('flipped');
});

// Optionally, flip on hover too
flipBox.addEventListener('mouseenter', function() {
    this.querySelector('.flip-box-inner').classList.add('flipped');
});

flipBox.addEventListener('mouseleave', function() {
    this.querySelector('.flip-box-inner').classList.remove('flipped');
});



document.addEventListener("DOMContentLoaded", function() {
    // Select the notice element
    const notice = document.querySelector('.notice');

    // Function to hide the notice
    function hideNotice() {
        notice.style.opacity = 0;
        setTimeout(() => {
            notice.style.display = 'none';
        }, 500); // Match the timeout with the CSS transition duration
    }

    // Hide the notice after 20 seconds
    setTimeout(hideNotice, 10000); // 20000 milliseconds = 10 seconds

    // Optional: Add functionality to close the notice manually
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.className = 'close-btn';
    closeButton.addEventListener('click', hideNotice);
    notice.appendChild(closeButton);
});




// script.js
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    if (document.referrer) {
        logo.addEventListener('click', () => {
            window.history.back();
        });
    } else {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html'; // Default to home if no referrer
        });
    }
});



// script.js

// Function to handle page transitions
function transitionToPage(pageUrl) {
  const pageContainer = document.getElementById("page-container");

  // Fade out the current page
  pageContainer.style.opacity = 0;

  // Once faded out, load the new page content
  setTimeout(() => {
    fetch(pageUrl)
      .then(response => response.text())
      .then(data => {
        pageContainer.innerHTML = data;
        pageContainer.style.opacity = 1; // Fade in the new page
      });
  }, 500); // Adjust the delay (500ms) as needed
}

// Example: Link to another page
<a href="page2.html" onclick="transitionToPage('page2.html'); return false;">Page 2</a>



