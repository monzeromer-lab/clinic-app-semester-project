import {LitElement, html} from 'lit';

class MyElement extends LitElement{
    
    render(){
        return html`<h3></h3>`;
    }
}
customElements.define('my-element', MyElement);