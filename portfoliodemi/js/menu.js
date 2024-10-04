export class MenuToggle {
    constructor(menuToggleElement, menuElement) {
        this.menuToggleElement = menuToggleElement;
        this.menuElement = menuElement;
        this.init();
    }

    init() {
        this.menuToggleElement.addEventListener('click', () => this.toggleMenu());
        document.addEventListener('click', (event) => this.closeMenu(event));
        this.menuElement.querySelectorAll('.link-menu').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        const isActive = this.menuElement.classList.contains('active');

        this.menuElement.style.opacity = isActive ? '0' : '1';
        this.menuElement.classList.toggle('active');

        setTimeout(() => {
            if (!isActive) {
                this.menuElement.style.opacity = '1';
            }
        }, 10);

        this.menuToggleElement.classList.toggle('active');
    }

    closeMenu(event) {
        if (!this.menuElement.contains(event.target) && !this.menuToggleElement.contains(event.target) && this.menuElement.classList.contains('active')) {
            this.menuElement.style.opacity = '0';
            setTimeout(() => {
                this.menuElement.classList.remove('active');
            }, 300);
            this.menuToggleElement.classList.remove('active');
        }
    }
}
