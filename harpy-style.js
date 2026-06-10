markdeepOptions = {
    tocStyle: 'none',
    h1TitleInput: true,
    h1TitleOutput: true,
    onLoad: function() {
        var footer = document.createElement('nav');
        footer.className = 'footer';
        footer.innerHTML = '    \u00a9 2026 HARPALEON';
        document.body.appendChild(footer);
    }
};

let root = '';

// Find the harpy-style.js script 
for (const node of document.getElementsByTagName('script')) {
    if (node.src.endsWith('harpy-style.js')) {
        root = node.src.replace('harpy-style.js', '');
        break;
    }
}

// Set root relative to location



document.write(`
<link rel="icon" type="image/x-icon" href="logo32.ico"/>
<!-- Markdeep: --><script src="${root}markdeep.min.js" markdeep="2"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Micro+5&display=swap" rel="stylesheet">
<title>Harpaleon</title>
<nav class="header"><div class="nav-content"><div class="xtitle"><a href="${root}index.html">harpy</a></div>   <a href="${root}art.html">ART</a>   <a href="${root}stories.html">STORIES</a>   <a href="${root}archive.html">ARCHIVE</a></div></nav>
`);

{
    const style = document.createElement("style");
    style.innerHTML = `

.micro-5-regular {
  font-family: "Micro 5", sans-serif;
  font-weight: 400;
  font-style: normal;
}

body {
    background: rgba(235, 255, 182, 0.15);
    color: rgb(102, 56, 0);
    font-family: georgia;
    text-shadow: 0px 1px 3px rgb(0,0,0,0.3);
    line-height: 150%;
}

#background {
    background: rgba(240, 255, 200, 0.15);
}

.md p {
    text-indent: 2em;
}

em.asterisk {
    font-style: normal;
    font-weight: bold;

}

.archivefiltercontainers {
    margin-top:32px; 
}

/******************************************************************/

.md h2 {
    color: rgb(164, 205, 0);
    text-transform: lowercase;
    font-family: "Micro 5";
    font-size: 50px;
    text-align: center;
}

.md .worktitles {
    color: rgb(102, 56, 0);
    text-align: center;
    font-family: "Micro 5";
    font-size: 50px;
}


.md h1 {
    display: none;
}

title {
    display: block;
    position: static;
    color: rgb(164, 205, 0);
    text-transform: lowercase;
    font-family: "Micro 5";
    font-size: 50px;
    text-align: center;
    margin-top: 34px;
}

.md a:visited {
    color:rgb(164, 205, 0);
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
    font-family: "Micro 5";
    font-size: 20px;
    padding-bottom: 3px;
    padding-right: 8px;
    display: inline-block;
    text-decoration: none !important;
    color:rgb(164, 205, 0);
}

.md div.xtitle a {
    text-decoration: none !important;
    color: rgb(245, 134, 0);
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
    font-family: "Micro 5";
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
    background: rgba(194, 212, 255, 0.61);
    white-space: pre;
    border-top: 2px black solid;
    padding-bottom: 4px;
    font-size: 12px;
    position: fixed;
    backdrop-filter: blur(8px);
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

#leftsidebar {
   position: absolute;
   left: 90;
   border: 2px solid;
   border-radius: 10px;
   padding: 1rem 1.5rem;
   color: rgb(102, 56, 0);
   background:rgba(194, 212, 255, 0.61);
}

#placeholderimage {
margin-top: -400;
left: -330;
position: relative;
z-index: -1;
}

#mailbox {
top: 150px;
left: 650px;
position: fixed;
}

#mailbox:hover {
transform: scale(1.2,1.2);
transform-origin: center;
}


#figuredrawing {
bottom: 128px;
right: 128px;
position: fixed;
width: 100px;
}

#figuredrawing:hover {
transform: scale(1.2,1.2);
transform-origin: center;
width: 100px;
}

#navigation {
    color: rgb(102, 56, 0);
    text-transform: lowercase;
    font-family: "Micro 5";
    font-size: 50px;
    text-align: center;
    margin-top: 15;
}

/* Button filters etc */


.archivefiltercontainers {
  overflow: hidden;
  text-align: center;
}

.filterDiv {
  float: left;
  width: 150px;
  text-align: center;
  font-size: 11px;
  margin: 6px;
  display: none; /* Hidden by default */
}

/* The "show" class is added to the filtered elements */

.show {
  display: block;
}

.btn {
border: none;
outline: none;
padding: 12px 16px;
background:rgba(194, 212, 255, 0.61);
cursor: pointer;
font-family: "Micro 5";
font-size: 20px;

}

.btn:hover {
   background:rgba(218, 229, 255, 0.61);
}

.btn.active {
background: rgb(245, 134, 0);
color: white;
font-family: georgia;

}

#filterbuttons {
text-align: center;}

#backtotop {
position: fixed;
bottom: 64px;
right: 128px;
}

`;



    document.head.appendChild(style);
}



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

