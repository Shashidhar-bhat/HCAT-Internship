const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const value = parseInt(star.getAttribute('data-value'));
    highlightStars(value);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating);
  });

  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    const value = parseInt(star.getAttribute('data-value'));
    star.classList.remove('hovered', 'selected');
    if (value <= rating) {
      star.classList.add('selected');
    }
  });
}

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message && selectedRating > 0) {
    document.getElementById('responseMsg').textContent = `Thanks for your ${selectedRating}-star feedback, ${name}!`;
    this.reset();
    highlightStars(0);
    selectedRating = 0;
  } else {
    document.getElementById('responseMsg').textContent = "Please complete all fields and select a star rating.";
    document.getElementById('responseMsg').style.color = "red";
  }
});
