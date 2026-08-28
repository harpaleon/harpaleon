// Harpy's main theme: the About, Art, Stories, and Archive pages.

const harpySiteRoot = document.currentScript.src.replace(/[^/]*$/, '');

window.markdeepOptions = Object.assign({
    markdeepPath: 'https://morgan3d.github.io/markdeep/2/latest/markdeep2.min.js',

    stylesheet: 'harpy-theme.css',
    favicon:    'icon.png',

    fontStylesheets: ['https://fonts.googleapis.com/css2?family=Micro+5&display=swap'],

    initialColorScheme: 'light',
    enableColorSchemeChoice: false,
    showLinkPreviews: false,

    main_nav: {align: 'none'},

    main_footer: {
        style: {
            height: '160px'
        }
    },

    site_header: {
        content:
        `- <div class="xtitle">[harpy](${harpySiteRoot}index.html)</div>
- [ART](${harpySiteRoot}art.html)
- [STORIES](${harpySiteRoot}stories.html)
- [ARCHIVE](${harpySiteRoot}archive.html)`,

        style: {
            userSelect: 'none',
            height: '36px',
            fontSize: '90%',
            overflow: 'hidden',
            paddingLeft: '60px'
        }},

    site_footer: {
        content: '© 2026 HARPALEON',

        style: {
            userSelect: 'none',
            position: 'fixed',
            bottom: '0', left: '0', right: '0',
            zIndex: '2',
            textAlign: 'center',
            fontSize: '12px',
            backgroundColor: 'rgba(194, 212, 255, 0.61)',
            backdropFilter: 'blur(8px)',
            borderTopWidth: '2px', borderTopStyle: 'solid', borderTopColor: 'black',
            paddingTop: '4px', paddingBottom: '4px'
        }},

    style: {
        body: {
            backgroundColor: 'rgb(252, 255, 244)',
            color: 'rgb(102, 56, 0)',
            fontFamily: 'georgia',
            fontSize: '16px',
            textShadow: '0px 1px 3px rgb(0, 0, 0, 0.3)'
        },

        a:         {color: '#38a'},
        a_visited: {color: 'rgb(164, 205, 0)'},

        p: {textIndent: '2em'},

        article: {maxWidth: '744px'},

        heading: {
            fontFamily: '"Micro 5", sans-serif',
            fontWeight: '800',
            color: 'rgb(164, 205, 0)',
            textAlign: 'center',
            textTransform: 'lowercase',
            lineHeight: '120%'
        },

        h1: {fontSize: '50px', paddingTop: '15px'},

        h2: {fontSize: '50px', borderBottomStyle: 'none', paddingBottom: '3px'}
    }

}, window.markdeepOptions || {});

// Mandatory activation line. DO NOT MODIFY OR RELOCATE
((d)=>d.head.appendChild(((m)=>{m.dataset.theme=d.currentScript.src;return m;})(Object.assign(d.createElement('script'),{src:window.markdeepOptions.markdeepPath}))))(document);
