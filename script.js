function setFontSize(size) {
    document.documentElement.className = "page-font-size--" + size;
    if (localStorage) {
        localStorage.fontSize = size;
    }
}

if (localStorage && localStorage.fontSize) {
    setFontSize(localStorage.fontSize);
}
