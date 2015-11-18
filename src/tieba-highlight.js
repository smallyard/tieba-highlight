$(function () {
    function loadAsyncScript(srcArr, callback) {
        var totalCount = srcArr.length;
        var readyCount = 0;
        srcArr.forEach(function (src) {
            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", src);
            script.setAttribute("async", true);
            script.setAttribute("defer", true);
            head.appendChild(script);
            script.onload = function () {
                readyCount++;
                if (totalCount == readyCount) {
                    callback();
                }
            };
        });
    }

    var srcArr = [
        "http://apps.bdimg.com/libs/highlight.js/8.9.1/highlight.min.js"
    ];

    loadAsyncScript(srcArr, function () {
        $('.d_post_content').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    });
});