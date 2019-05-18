import {
  LitElement, html, css, customElement, property
} from 'lit-element';

@customElement('app-main')
export class AppMain extends LitElement {
  @property({type: String})
  view = 'kanban';
  @property({type: String})
  orientation = 'column';

  static get styles(){
    return css`
      :root{
        display: block;
      }
      main{
        background: mediumseagreen;
        padding: 1rem;
        padding-left: 100px;
        display: flex;
        flex: 1 1 auto;
        justify-content: flex-start;
        align-items: flex-start;
        flex-flow: row nowrap;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
      }
      main.column {
        flex-direction: column;
      }
    `;
  }
  render(){
    return html`
    <main class="${this.orientation}">
      <slot></slot>
    </main>
    `;
  }
}
