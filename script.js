 // Initialize map after getting user's location
    function initMap() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMapWithLocation, showError);
      } else {
        document.getElementById("locationStatus").innerText = "Geolocation not supported by this browser.";
      }
    }

    function initMapWithLocation(position) {
      const userLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      const map = new google.maps.Map(document.getElementById("userLocationMap"), {
        center: userLatLng,
        zoom: 14
      });

      new google.maps.Marker({
        position: userLatLng,
        map: map,
        title: "You are here!"
      });

      document.getElementById("locationStatus").innerText = "Location found!";
    }

    function showError(error) {
      document.getElementById("locationStatus").innerText = "Unable to get your location.";
    }

    // Scroll to top button behavior
    window.onscroll = function() {
      const btn = document.getElementById("scrollTopBtn");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
