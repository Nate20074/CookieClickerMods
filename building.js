// Define a new building
Game.Objects['Cookie-Essence'] = new Game.Object('Cookie-Essence', {
    name: 'Cookie-Essence',
    desc: 'what have you done this is impossible you...somehow harvested the essence of the cookies you have been making this entire time to make more cookies out of those cookies and so a parodox started you harvested the cookie...Impossible!!!.',
    basePrice: 1e30, // Initial price
    cps: 2.9e+18, // Cookies per second
    icon: [25, 14], // Icon coordinates in the spritesheet
    buyFunction: function() {
        // Add custom behavior when purchased
        console.log('Cookie-Essence purchased!');
    }
});

// Add the building to the game
Game.Objects['Cookie-Essence'].unlock();
Game.Objects['Cookie-Essence'].draw();
Game.RefreshBuildings();
