import {
  LitElement, html, customElement, property
} from 'lit-element';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({type: String})
  title = 'My App';
  @property({type: String})
  links = 'one two three';

  render(){
    return html`
      <style>
        :root{
          display:block
        }
        header{
          padding: 0;
          display: flex; 
          justify-content: space-between;
          background: #f1f1f1;
          font-weight: bold;
          border-bottom: 1px solid #ddd;
        }
        .start{
          padding-left: .5rem; 
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .end{
          
          padding-right: .5rem
          align-items: center;
          justify-content: flex-end;
        }
        nav{
          display: flex; 
          justify-content: space-between;
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

      <header>        
        <section class="start">
          <slot name="start"></slot>         
          <a href="/">${this.title}</a>
        </section>
        <section>
          <slot name="center"></slot> 
        </section>
        <section class="end">
          <nav>${this.navLinks}</nav>
          <slot name="end"></slot>  
        </section>
      </header>
    `;
  }

  get navLinks() {
    const links = this.links.split(' ');
    return links.map(l => html`<a class="navlink" href="/${l}">${l}</a>`);
  }
}
