function getSignal() {
  const signalEl = document.getElementById('signal');
  signalEl.innerText = 'Analyzing the Market...';

  setTimeout(() => {
    const signals = ['Buy ↑', 'Sell ↓', 'Hold'];
    const randomSignal = signals[Math.floor(Math.random() * signals.length)];
    signalEl.innerText = `Signal: ${randomSignal}`;
  }, 2000); // Simulate analysis delay
}
