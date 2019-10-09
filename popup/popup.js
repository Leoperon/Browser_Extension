(function () {
    'use strict';
    var backgroundpage = chrome.extension.getBackgroundPage();
    document.querySelector('button').addEventListener('click', function () {
        backgroundpage.handleButtonClick();
    });
}());
