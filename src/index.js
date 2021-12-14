import { LitElement, html } from 'lit';

class MyElement extends LitElement {

    render() {
        return html`<h3>new</h3>`;
    }
}
customElements.define('my-element', MyElement);