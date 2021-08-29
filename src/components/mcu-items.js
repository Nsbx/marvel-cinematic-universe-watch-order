import { html, LitElement } from 'lit';

import mixitup from 'mixitup';

import McuItems from '../data/mcu-items.js';

export class McuItem extends LitElement {
  static get properties() {
    return {
      items: {
        type: Array
      }
    }
  }

  constructor() {
    super();
    this.items = McuItems;
  }

  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }

  render() {
    return html `
      <button type="button" data-sort="default:asc">Sort By MCU Chronological</button>
      <button type="button" data-sort="date:asc">Sort By Date</button>
      <hr>
      <button type="button" data-filter="all">Show All</button>
      <button type="button" data-filter="[data-type='movie']">Hide show</button>
      <hr>
      <div id="mcu-items-container">
        ${this.items.map(
          (item, index) =>
            html`
              <div class="item" data-order="${item.order_position}" data-date="${item.date}" data-type="${item.type}">
                <img class="poster" src="${item.poster}" alt="${item.title}">
                <div class="item-body">
                  <h1>${item.title}</h1>
                  <h6>${item.date}</h6>
                </div>
              </div>
            `
        )}
      </div>
    `;
  }

  updated() {
    let container = document.getElementById('mcu-items-container');

    let mixer = mixitup(container, {
      selectors: {
        target: '.item'
      },
      controls: {
        enable: false // mixitup is not compatible with shadow-root, to fix that i manually add my event listener.
      },
      animation: {
        duration: 300
      }
    });

    let sortButtons = document.querySelectorAll('[data-sort]');

    sortButtons.forEach(el => {
      el.addEventListener('click', (event) => {
        let button = event.currentTarget;
        mixer.sort(button.dataset.sort);
      })
    })

    let filterButtons = document.querySelectorAll('[data-filter]');

    filterButtons.forEach(el => {
      el.addEventListener('click', (event) => {
        let button = event.currentTarget;
        mixer.filter(button.dataset.filter);
      })
    })
  }
}

customElements.define('mcu-items', McuItem);