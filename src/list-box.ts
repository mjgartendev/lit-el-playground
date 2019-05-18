import {
  LitElement, html,css, customElement, property
} from 'lit-element';


@customElement('list-box')
export class ListBox extends LitElement {
  @property({type: String})
  heading = 'ListBox';
  @property( {type: Array})
  items = ['one', 'two', 'three'];
  @property({type: Boolean})
  showInput = true;
  @property({type: String})
  direction = 'column'

  static get styles() {
    return css`
      :root{
        display: block;
        height: 100%;
      }
      header{
        font-weight: bold; 
        text-align: center;
      }
      footer {
        text-align: center;
      }
      .list{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #f1f1f1;
        border: 1px solid #ccc; 
        padding: 8px; 
        border-radius: 4px;
        min-width: 200px;
        max-height: 75vh;
        
      }
      ul{
        padding: 0; 
        background: #f1f1f1;
        display: flex;
        flex-direction: column;
        max-height: 80vh;
        overflow-x: auto;
      }
      li{
        display: flex; 
        list-style-type: none; 
        justify-content: space-between;
        align-items: center;
        border: 1px solid #ccc;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);
        padding: 8px;
        margin: 2px;
        border-radius: 4px;
        background: #fff;
      }
      button{
        background: transparent; 
        border: none; 
        box-shadow: none; 
        cursor: pointer; 
        padding: .25rem;
        border-radius: 50%;
      }
      button:hover{
        background: #f1f1f1;
      }
      input{
        background: #ccc;
        color: #333; 
        box-shadow: none; 
        border: 1px solid #ccc; 
        padding: .5rem; 
        border-radius: 4px;
        width: 90%;
      }
      input:focus{
        border-color: #2196F3;
      }
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
