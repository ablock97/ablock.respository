import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class MyView4 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }
    <nav class="toolbar-list">
        ...
        <a ?selected="${this._page === 'view4'}" href="/view4">New View!</a>
        </nav>
        
        <nav class="drawer-list">
        ...
        <a ?selected="${this._page === 'view4'}" href="/view4">New View!</a>
        </nav>
    
        <main role="main" class="main-content">
        ...
        <my-view4 class="page" ?active="${this._page === 'view4'}"></my-view4>
        </main>

  render() {
    return html`
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>
          The page you're looking for doesn't seem to exist. Head back
          <a href="/">home</a> and try again?
        </p>
      </section>
    `
  }
}
window.customElements.define('my-view4', MyView4);