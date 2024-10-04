export class TypingAnimation {
    constructor(text, emphasisText, typingElement, cursorElement) {
        this.text = text;
        this.emphasisText = emphasisText;
        this.typingElement = typingElement;
        this.cursorElement = cursorElement;
        this.index = 0;
    }

    async start() {
        await this.type();
        this.typeEmphasis();
    }

    async type() {
        while (this.index < this.text.length) {
            this.typingElement.innerHTML += this.text.charAt(this.index);
            this.index++;
            await this.delay(150);
        }
    }

    async typeEmphasis() {
        let emphasisHTML = `<span class="area-emphasis">`;

        for (let i = 0; i < this.emphasisText.length; i++) {
            await this.delay(150);
            emphasisHTML += this.emphasisText.charAt(i);
            this.typingElement.innerHTML = this.text + emphasisHTML;
        }

        emphasisHTML += `</span>`;
        this.typingElement.innerHTML = this.text + emphasisHTML;
        this.cursorElement.style.display = 'inline-block';
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
