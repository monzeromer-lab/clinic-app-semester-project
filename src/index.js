import { LitElement } from 'lit';
import { html } from 'lit-html';

class MyElement extends LitElement {

    render() {
        return html`<h3>new</h3>`;
    }
}
customElements.define('my-element', MyElement);