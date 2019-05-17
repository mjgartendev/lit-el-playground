import {
  LitElement, html,css, customElement, property
} from 'lit-element';


@customElement('list-box')
export class ListBox extends LitElement {
  @property()
  heading = 'ListBox';
  @property( {type: Array})
  items = ['one', 'two', 'three'];
  @property({type: Boolean})
  showInput = true;

  static get styles() {
    return css`
      :root{display: block}
      header{font-weight: bold; text-align: center;}
      .list{border: 1px solid #ccc; padding: .5rem 1rem; border-radius: 3px;}
      ul{padding: 0; margin: 8px 0; background: #f1f1f1;}
      li{
        display: flex; 
        list-style-type: none; 
        justify-content: space-between;
        align-items: space-between;
        border: 1px solid #ccc;
        padding: .5rem;
        border-radius: 4px;
      }
      button{background: transparent; border: none; box-shadow: none; cursor: pointer; padding: 0;}
      input{background: #f1f1f1; box-shadow: none; border: 1px solid #ccc; padding: .25rem; border-radius: 4px;}
    `;
  }

  render(){
    return html`
      <div class="list">
        <header>${this.heading}</header>
        <ul>${this.itemList}</ul>
        <footer>${this.itemInput}</footer>
      </div>
    `;
  }

  get itemInput() {
    return this.showInput 
      ? html`<input placeholder="add item..." @change="${this.addItem}" />`
      : html``;
  }
  get itemList() {    
    const items = this.items.map((item, index) => html`
      <li id="${item}">
        ${item}
        <button @click="${() => {this.removeItem(index)}}">❌</button>
      </li>`);
    return items;
  }

  addItem(e){
    this.items = [...this.items, e.srcElement.value];
    e.srcElement.value = '';
  }

  // TODO: find a better way to remove item
  removeItem(index){
    const item = this.items.splice(index, 1)
    console.log(`removed item: ${item}`)
    return this.items = [...this.items]
  }
}
