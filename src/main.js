var head = document.getElementsByTagName('head').item(0);

var mainScript = document.createElement("script");
mainScript.src = "https://cdn.jsdelivr.net/gh/smallyard/tieba-highlight@master/src/tieba-highlight.js";
head.appendChild(mainScript);

var css = document.createElement("link");
css.href = "http://apps.bdimg.com/libs/highlight.js/8.9.1/styles/github.min.css";
css.rel = "stylesheet";
head.appendChild(css);