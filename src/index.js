import { LitElement, html } from '../node_modules/lit-element/index.js';

class MyElement extends LitElement {

    render() {
        return html`<h3>new</h3>`;
    }
}
customElements.define('my-element', MyElement);