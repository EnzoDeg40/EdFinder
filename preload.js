let os = require('os')

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }

    //replaceText('user-cursor', os.userInfo().username);
    document.getElementById('user-cursor').innerText = os.userInfo().username;
})