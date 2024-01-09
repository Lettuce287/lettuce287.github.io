var head;

function updateText() {
    head = document.getElementById("head");

    head.innerHTML = head.innerHTML.replace(/Hi, I'm Nathan./g, '<span style="color:#f5cb5c;">Hi,</span></br>I\'m Nathan<span style="color:#7878ed">.</span>');
}
