const text = document.getElementById("typewriter").textContent;
let i = 0;
document.getElementById("typewriter").textContent = "";

const typeWriter = () => {
    if (i < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            document.getElementById("typewriter").textContent = "";
            i = 0;
            typeWriter();
        }, 500);
    }
}

typeWriter();
