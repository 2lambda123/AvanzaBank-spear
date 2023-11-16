import { styling } from './styling.mjs';
import { template } from './template.mjs';
class Card extends HTMLElement {
    host;

    constructor() {
        super();
        this.host = this.attachShadow({ mode: 'open' });
        this.host.innerHTML = template;
        const style = document.createElement('style');
        style.textContent = styling;
        this.host.appendChild(style);
    }
}

window.customElements.define('mintdoc-card', Card);
