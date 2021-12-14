// import { LitElement } from 'lit';
import {html, render} from 'lit-html';

// class MyElement extends LitElement {

//     render() {
//         return html`<h3>new</h3>`;
//     }
// }
// customElements.define('my-element', MyElement);

const name = 'world';
const sayHi = html`<h1>Hello ${name}</h1>`;
render(sayHi, document.body);