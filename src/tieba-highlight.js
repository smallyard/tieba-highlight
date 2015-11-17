$(function() {
    function loadAsyncScript(src, callback) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", src);
        script.setAttribute("async", true);
        script.setAttribute("defer", true);
        head.appendChild(script);
        script.onload = function() {
            callback();
        };
    }
    loadAsyncScript("http://files.cnblogs.com/files/smallyard/highlight.min.js",
    function() {
        $('.d_post_content').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
});