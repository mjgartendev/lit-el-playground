import {
  LitElement, html, customElement, property
} from 'lit-element';

@customElement('app-drawer')
export class AppDrawer extends LitElement {
  @property({type: Boolean})
  isOpen = true;

  @property({type: Boolean})
  isMini = true;

  @property({type: String})
  items = '';

  render(){
    return html`
      <style>
        :root{
          display:block;
        }
        aside{
          display: flex; 
          justify-content: center;
          align-items: flex-start;
          background: #f1f1f1;
          background: var(--drawer-bg, #f1f1f1;);
          border-right: 1px solid #ddd;
          position: absolute;
          left: 0;
          height: 100%;
        }
        nav{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0;
          text-align: center;
        }
        a, .navlink{
          text-decoration: none; 
          color: mediumseagreen; 
          padding: .75em;
        }
        .navlink:hover{
          cursor: pointer; 
          background: mediumseagreen; 
          color: white
        }
      </style>

      <aside>
        <nav>${this.navLinks}
        <slot></slot>
        </nav>
      </aside>
    `;
  }

  get navLinks() {
    return this.items.split(' ').map(l => html`
        <a class="navlink" href="/${l}">${l}</a>
      `);
  }
}