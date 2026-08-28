// Harpy's book theme: the stories, set as two columns of a page the reader
// turns. Sets what differs from harpy-theme.js and then loads it.
//
// The page is the article itself, so a story is plain markdown with no markup
// of its own; harpy-book.css gives #article the column box and this file scales
// it to the window and turns it.

const BOOK_PAGE_WIDTH  = 800;
const BOOK_PAGE_HEIGHT = 600;
const BOOK_CHROME_HEIGHT = 158;

let bookPageIndex = 0;
let bookTurnWidth = BOOK_PAGE_WIDTH;


function bookPage() {
    return document.getElementById('article');
}


function bookLastPageIndex() {
    return Math.floor(bookPage().scrollWidth / bookTurnWidth) - 1;
}


function bookShowPageNumber() {
    document.getElementById('book-page-number').textContent =
        (bookPageIndex + 1) + ' / ' + (bookLastPageIndex() + 1);
}


function bookScale() {
    const scale = Math.min(window.innerWidth / BOOK_PAGE_WIDTH,
                           (window.innerHeight - BOOK_CHROME_HEIGHT) / BOOK_PAGE_HEIGHT);
    const left = (window.innerWidth - BOOK_PAGE_WIDTH * scale) / 2;

    bookPage().style.transform = 'scale(' + scale + ')';
    bookPage().style.left = left + 'px';
    document.getElementById('book-previous').style.left = left + 'px';
    document.getElementById('book-next').style.left = (left + BOOK_PAGE_WIDTH * scale) + 'px';
}


function bookTurn(direction) {
    bookPageIndex = Math.max(0, Math.min(bookPageIndex + direction, bookLastPageIndex()));
    bookPage().scrollLeft = bookPageIndex * bookTurnWidth;
    bookShowPageNumber();
}


function bookTurningControls() {
    const nav = document.createElement('div');
    nav.id = 'book-nav';

    const previous = document.createElement('button');
    previous.id = 'book-previous';
    previous.textContent = '<';
    previous.addEventListener('click', function () { bookTurn(-1); });

    const number = document.createElement('span');
    number.id = 'book-page-number';

    const next = document.createElement('button');
    next.id = 'book-next';
    next.textContent = '>';
    next.addEventListener('click', function () { bookTurn(1); });

    nav.appendChild(previous);
    nav.appendChild(number);
    nav.appendChild(next);
    return nav;
}


function bookInitialize() {
    // The story's name belongs over the page rather than down its first column,
    // and #main_header is the box above the article that markdeep already emits.
    const title = bookPage().querySelector('h1');
    if (title) { document.getElementById('main_header').appendChild(title); }

    document.body.appendChild(bookTurningControls());

    const style = getComputedStyle(bookPage());
    const columnGap = parseFloat(style.columnGap);
    const columnCount = parseInt(style.columnCount);
    const columnWidth = (bookPage().offsetWidth - (columnCount - 1) * columnGap) / columnCount;

    bookTurnWidth = Math.round((columnWidth + columnGap) * columnCount);

    bookScale();
    bookShowPageNumber();
    window.addEventListener('resize', bookScale);
}


// harpy-theme.js merges its own values under these, so they win.
window.markdeepOptions = {
    stylesheet: 'harpy-book.css',
    postRenderCallback: bookInitialize
};

document.head.appendChild(Object.assign(document.createElement('script'),
    {src: document.currentScript.src.replace(/[^/]*$/, 'harpy-theme.js')}));
