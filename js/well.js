
//<script>
  let timeout;

  function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      window.location.href = 'welcoem.html'; // Redirect after 15 mins
    }, 0.05 * 60 * 1000); // 15 minutes in milliseconds
  }

  // Reset timer on any user interaction
  ['click', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
    window.addEventListener(event, resetTimer, false);
  });

  // Start the timer initially
  resetTimer();
//</script>