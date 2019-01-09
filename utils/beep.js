const beep = (vol, freq, dur) => {
  const a = new AudioContext();
  const v = a.createOscillator();
  const u = a.createGain();
  v.connect(u);
  v.frequency.value = freq;
  v.type = "sine";
  u.connect(a.destination);
  u.gain.value = vol * 0.01;
  v.start(a.currentTime);
  v.stop(a.currentTime + dur * 0.001);
};

export default times => {
  window.beepCount = 0;
  window.beepTimer = setInterval(() => {
    if (window.beepCount >= times - 1) clearInterval(window.beepTimer);
    beep(100, 3000, 100);
    window.beepCount = window.beepCount + 1;
  }, 300);
};
