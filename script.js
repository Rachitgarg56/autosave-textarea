const textArea = document.querySelector('textarea');

window.onload = () => {
    textArea.value = localStorage.getItem('content');
};

function handleKeyDown(e) {
    const content = e.target.value;
    localStorage.setItem('content',content);
};

var text;
function handleClear() {
    if (textArea.value == '') {
        return;
    }
    text = localStorage.getItem('content');
    localStorage.clear();
    textArea.value = '';
};

function handleUndo() {
    console.log('clicked');
    if (text == undefined) {
        return;
    }
    textArea.value = text;
    localStorage.setItem('content',text);
};


