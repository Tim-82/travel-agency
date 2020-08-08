// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });

// Auto Complete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
      "Aruba": null,
      "Cancun Mexico": null,
      "Hawaii": null,
      "Florida": null,
      "California": null,
      "Jamaica": null,
      "Europe": null,
      "The Bahamas": null,
    }
  });