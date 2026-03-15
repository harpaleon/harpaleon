markdeepOptions = {
    tocStyle: 'none',
    onLoad: function() {
        var footer = document.createElement('nav');
        footer.className = 'footer';
        footer.innerHTML = '<a href="https://github.com/harpaleon">GitHub</a>      \u00a9 2026 HARPALEON';
        document.body.appendChild(footer);
    }
};

document.write(`
<link rel="icon" type="image/x-icon" href="logo32.ico"/><link rel="stylesheet" href="style.css">
<!-- Markdeep: --><script src="https://www.casual-effects.com/markdeep/markdeep.min.js"></script>
<title>Harpaleon</title>
<nav class="header"><div class="nav-content"><div class="xtitle"><a href="index.html">harpy</a></div>  |  ART  |  HARCHIVE</div></nav>
`);
