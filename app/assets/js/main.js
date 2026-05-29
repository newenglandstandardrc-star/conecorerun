// ConeCoreRun — App prototype
// Main JS entry point

const App = {
  currentScreen: 'home',

  screens: ['home', 'map', 'scan', 'races', 'badges', 'profile'],

  init() {
    console.log('ConeCoreRun prototype initialised');
    this.render();
  },

  render() {
    // Screen rendering will live here
    console.log(`Rendering screen: ${this.currentScreen}`);
  },

  navigate(screen) {
    if (this.screens.includes(screen)) {
      this.currentScreen = screen;
      this.render();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
