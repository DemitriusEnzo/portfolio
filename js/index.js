let index = 0;
const text = "Desenvolvedor ";
const emphasisText = "Full-Stack";
const typingElement = document.querySelector('.typing');
const cursorElement = document.querySelector('.cursor');

function type() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150);
    } else {
        typeEmphasis();
    }
}

function typeEmphasis() {
    let emphasisHTML = `<span class="area-emphasis">`;
    for (let i = 0; i < emphasisText.length; i++) {
        setTimeout(() => {
            emphasisHTML += emphasisText.charAt(i);
            typingElement.innerHTML = text + emphasisHTML;

            if (i === emphasisText.length - 1) {
                emphasisHTML += `</span>`;
                typingElement.innerHTML = text + emphasisHTML;
                cursorElement.style.display = 'inline-block';
            }
        }, i * 150);
    }
}
type();

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.classList.remove('active');
        }, 300);
    } else {
        menu.classList.add('active');
        setTimeout(() => {
            menu.style.opacity = '1';
        }, 10);
    }
    menuToggle.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target) && menu.classList.contains('active')) {
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.classList.remove('active');
        }, 300);
        menuToggle.classList.remove('active');
    }
});

const linkMenus = menu.querySelectorAll('.link-menu');

linkMenus.forEach(link => {
    link.addEventListener('click', () => {
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.classList.remove('active');
        }, 300);
        menuToggle.classList.remove('active');
    });
});
