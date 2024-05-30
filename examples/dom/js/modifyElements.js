// Example: Modification of text according to the browser.

// Gets the user agent of the current browser.
const browser = navigator.userAgent;
let keyboardShortcut = document.querySelector('.container p span');

// Check if the browser is Chrome and set a corresponding keyboard shortcut.
if (browser.includes('Chrome')) {
    // Modify the text inside a span element to show the Chrome keyboard shortcut.
    keyboardShortcut.textContent = 'Ctrl+Shift+J';
}

// Check if the browser is Firefox and set a corresponding keyboard shortcut.
if (browser.includes('Firefox')) {
    // Modify the text inside a span element to display the Firefox keyboard shortcut.
    keyboardShortcut.textContent = 'Ctrl+Shift+K';
}

// Check if the browser is Safari and set a corresponding keyboard shortcut.
if (browser.includes('Safari') && !browser.includes('Chrome')) {
    // Modify the text inside a span element to display the Safari keyboard shortcut.
    keyboardShortcut.textContent = 'Cmd+Opt+C';
}

// Check if the browser is Edge and set a corresponding keyboard shortcut.
if (browser.includes('Edg')) {
    // Modify the text inside a span element to display the Edge keyboard shortcut.
    keyboardShortcut.textContent = 'Ctrl+Shift+J';
}

// Check if the browser is Internet Explorer and set a corresponding keyboard shortcut.
if (browser.includes('MSIE') || browser.includes('Trident/')) {
    // Modifies the text within a span element to display the Internet Explorer keyboard shortcut.
    keyboardShortcut.textContent = 'Ctrl+`';
}
