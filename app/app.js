function openModal() {
    document.getElementById('modal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

  function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.form-section').forEach(section => section.classList.remove('active'));
    document.querySelector(`.tab[onclick*='${tab}']`).classList.add('active');
    document.getElementById(tab).classList.add('active');
  }