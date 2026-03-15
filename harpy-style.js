markdeepOptions = {
    tocStyle: 'none',
    h1TitleInput: true,
    h1TitleOutput: true,
    onLoad: function() {
        var footer = document.createElement('nav');
        footer.className = 'footer';
        footer.innerHTML = '<a href="https://github.com/harpaleon">GitHub</a>      \u00a9 2026 HARPALEON';
        document.body.appendChild(footer);
    }
};

document.write(`
<link rel="icon" type="image/x-icon" href="logo32.ico"/>
<!-- Markdeep: --><script src="https://www.casual-effects.com/markdeep/markdeep.min.js"></script>
<title>Harpaleon</title>
<nav class="header"><div class="nav-content"><div class="xtitle"><a href="index.html">harpy</a></div>   <a href="art.html">ART</a>   <a href="archive.html">ARCHIVE</a></div></nav>
`);

{
    const style = document.createElement("style");
    style.innerHTML = `

body {
    background: rgba(97, 183, 170, 0.15);
    color: #000;
    font-family: georgia;
    text-shadow: 0px 1px 3px rgb(0,0,0,0.3);
    line-height: 150%;
}

.md p {
    text-indent: 2em;
}

em.asterisk {
    font-style: normal;
    font-weight: bold;
}
/******************************************************************/

.md h2 {
    text-transform: lowercase;
    text-align: center;
}

.md h2::before { display: none; }

.md h3::before { display: none; }

/*********************************************************/

div.markdeepFooter {
    display: none
}

big {
    font-size: 180% ! important;
    line-height: 130%;
    display: block;
    font-weight: 600;
}

.xtitle {
    user-select: none;
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 3px;
    padding-right: 8px;
    display: inline-block;
    text-decoration: none !important;
}

.md div.xtitle a {
    text-decoration: none !important;
}

.md div.xtitle:hover {
    opacity: 0.8;
}


nav.header {
    user-select: none;
    position: fixed;
    top: 0px;
    left: 0px;
    padding-top: 6px;
    padding-bottom: 5px;
    font-size: 90%;
    z-index: 100;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-content {
    padding: 0 30px;
    display: flex;
    align-items: center;
    max-width: 1024px;
    width: 100%;
    box-sizing: border-box;
}

.md nav.header a {
    text-decoration: none ! important;
    display: inline-block;
    white-space: nowrap;
    margin-right: 16px;
    vertical-align: middle;
}

.md nav.header .xtitle {
    vertical-align: middle;
    position: relative;
}

.md nav.header a:hover {
    opacity: 0.8;
}

nav.footer {
    user-select: none;
    padding-top: 4px;
    text-align: center;
    background: rgba(0,0,0,.25);
    white-space: pre;
    border-top: 2px black solid;
    padding-bottom: 4px;
    font-size: 12px;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
}

nav.footer a {
    text-decoration: none !important;
}

nav.footer a:hover {
    text-decoration: underline !important;
}
`;
    document.head.appendChild(style);
}
