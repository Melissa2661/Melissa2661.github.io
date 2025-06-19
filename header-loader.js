fetch('header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading header:', error);
  });
