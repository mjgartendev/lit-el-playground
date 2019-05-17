import { html, css, LitElement, customElement, property } from "lit-element";

@customElement('flex-row')
export class FlexRow extends LitElement {
   @property({ type: String })
   items = [];

   static get styles() {
   return css`
      :host {
         display: flex;
         flex-flow: row wrap; 
         cursor: default;
      }
      .wrapper{
        padding: 8px;
        background: #f1f1f1;
        border-radius: 5px;
      }
      .container{
        background: transparent;
      }
   `;
}

   render() {
     return html`
      <div class="wrapper">
        <div class="container">
          <slot></slot>
        </div>
      </div>
     `
   }
}