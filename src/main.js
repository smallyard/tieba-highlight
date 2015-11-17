var head = document.getElementsByTagName('head').item(0);

var mainScript = document.createElement("script");
mainScript.src = "http://files.cnblogs.com/files/smallyard/tieba-highlight.js";
head.appendChild(mainScript);

var css = document.createElement("link");
css.href = "http://files.cnblogs.com/files/smallyard/github.min.css";
css.rel = "stylesheet";
head.appendChild(css);