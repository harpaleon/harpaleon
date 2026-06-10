document.write(`<script src="harpy-style.js"><\/script><script>
(function() {
    var base = markdeepOptions.onLoad || null;
    markdeepOptions.onLoad = function() { if (base) base(); bookInit(); };
})();
<\/script>`);

document.write(`<style>
body {
    max-width: 2048px;
    padding: 0;
    overflow-x: hidden;
}

title {
    font-size: 32px;
}

#book-wrapper {
    column-count: 2;
    column-gap: 40px;
    height: 600px;
    width: 800px;
    overflow-x: hidden;
    overflow-y: hidden;
    transform-origin: top left;
    position: fixed;
    top: 88px;
    left: 0;
    box-sizing: border-box;
    line-height: 100%;
}

#book-nav {
    position: fixed;
    bottom: 22px;
    left: 0;
    right: 0;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;
    z-index: 10;
}

#book-nav button {
    font-family: "Micro 5", sans-serif;
    font-size: 42px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 8px;
    color: rgb(102, 56, 0);
    user-select: none;
    pointer-events: all;
    position: absolute;
}

#book-page-num {
    font-family: "Micro 5", sans-serif;
    font-size: 20px;
    color: rgb(102, 56, 0);
    width: 100%;
    text-align: center;
}

.md h1 {
    display: none;
}

.md h2 {
    font-family: "georgia", serif;
    text-transform: uppercase;
    font-size: 20px;
    color: rgb(85, 47, 1);

}

.md section.h2-section {
    margin-top: -32px;
}

span.md {
    display: block;
}
</style>`);

document.write(`<div id="book-nav">
  <button id="book-prev" onclick="bookTurn(-1)">&lt;</button>
  <span id="book-page-num"></span>
  <button id="book-next" onclick="bookTurn(1)">&gt;</button>
</div>`);

var BOOK_LOGICAL_W = 800;
var BOOK_LOGICAL_H = 600;
var bookPage = 0;
var BOOK_W = 680;
var bookS = 1;

function bookUpdateNav() {
    var w = document.getElementById('book-wrapper');
    var maxPage = Math.floor(w.scrollWidth / BOOK_W) - 1;
    document.getElementById('book-page-num').textContent = (bookPage + 1) + ' / ' + (maxPage + 1);
}

function bookInit() {
    var w = document.getElementById('book-wrapper');
    var cs = getComputedStyle(w);
    var colGap = parseFloat(cs.columnGap) || 40;
    var colCount = parseInt(cs.columnCount) || 2;
    var colWidth = (w.offsetWidth - (colCount - 1) * colGap) / colCount;
    BOOK_W = Math.round((colWidth + colGap) * colCount);
    bookScale();
    bookUpdateNav();
}

function bookScale() {
    var w = document.getElementById('book-wrapper');
    bookS = Math.min(window.innerWidth / BOOK_LOGICAL_W, (window.innerHeight - 158) / BOOK_LOGICAL_H);
    w.style.transform = 'scale(' + bookS + ')';
    var scaledLeft = (window.innerWidth - BOOK_LOGICAL_W * bookS) / 2;
    w.style.left = scaledLeft + 'px';
    document.getElementById('book-prev').style.left = scaledLeft + 'px';
    document.getElementById('book-next').style.left = (scaledLeft + BOOK_LOGICAL_W * bookS) + 'px';
}

function bookTurn(dir) {
    var w = document.getElementById('book-wrapper');
    var maxPage = Math.floor(w.scrollWidth / BOOK_W) - 1;
    bookPage = Math.max(0, Math.min(bookPage + dir, maxPage));
    w.scrollLeft = bookPage * BOOK_W;
    bookUpdateNav();
}

window.addEventListener('resize', bookScale);
