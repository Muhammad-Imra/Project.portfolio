document.addEventListener('DOMContentLoaded', function () {
  const countDisplay = document.getElementById('count');
  const incrementBtn = document.getElementById('incrementBtn');
  const decrementBtn = document.getElementById('decrementBtn');
  const resetBtn = document.getElementById('resetBtn');
  let count = 0;

  function updateCount() {
    countDisplay.textContent = count;
  }

  function incrementCount() {
    count++;
    updateCount();
  }

  function decrementCount() {
    if (count > 0) {
      count--;
      updateCount();
    }
  }

  function resetCount() {
    count = 0;
    updateCount();
  }

  incrementBtn.addEventListener('click', incrementCount);
  decrementBtn.addEventListener('click', decrementCount);
  resetBtn.addEventListener('click', resetCount);

  updateCount(); // Initialize count display
});


