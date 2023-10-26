// ©2023 REIWA SAKURA KOUTOU GAKUIN
// ©2023 令和さくら高等学院
// Access to https://www.reiwa-sakura.net/
// がくいんちょう: のだ (teacher)
// Main Programmer: Aoyama
// Check: Akita (teacher),hutamura (teacher), hashimoto
// Thank you to everyone who helped us.
function getModeFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('mode');
}
function loadAppropriateStylesheet(mode) {
  const link = document.getElementById('stylesheet-link');
  if (mode === 'dark') {
    link.href = 'color-black.css';
  } else {
    link.href = 'color-white.css';
  }
}
function setupModeSwitch() {
  const toggleSwitch = document.getElementById('mode-switch');
  const savedState = loadSwitchState();
  if (savedState === 'on') {
    toggleSwitch.checked = true;
    loadAppropriateStylesheet('dark');
  } else {
    toggleSwitch.checked = false;
    loadAppropriateStylesheet('light');
  }
  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      saveSwitchState('on');
      loadAppropriateStylesheet('dark');
    } else {
      saveSwitchState('off');
      loadAppropriateStylesheet('light');
    }
  });
}
function saveSwitchState(state) {
  localStorage.setItem('switchState', state);
}
function loadSwitchState() {
  return localStorage.getItem('switchState');
}
window.addEventListener('DOMContentLoaded', () => {
  const mode = getModeFromURL();
  if (mode) {
    loadAppropriateStylesheet(mode);
  }
  setupModeSwitch();
});