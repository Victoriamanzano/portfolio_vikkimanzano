document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('enter-button').addEventListener('click', function() {
      document.getElementById('welcome-page').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
  });

  document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
  });

  const images = document.querySelectorAll('.img-wrapper img');
  images.forEach(img => {
      img.addEventListener('contextmenu', function (e) {
          e.preventDefault();
      });
  });

  document.querySelectorAll('.img-wrapper').forEach(wrapper => {
      wrapper.addEventListener('click', function () {
        
      });
  });
});
