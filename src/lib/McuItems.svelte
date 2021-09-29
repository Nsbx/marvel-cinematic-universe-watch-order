<script lang="ts">
  import { flip } from 'svelte/animate';

  import McuItems from "../data/mcu-items.js";

  let items = McuItems;

  const sort = (event) => {
    let sortString = event.target.dataset.sort;
    let sortProperty = sortString.split(':')[0];
    let sortDirection = sortString.split(':')[1];

    if (sortProperty === 'default') {
      if (sortDirection === 'asc') {
        items = items.sort(function(a, b) {
          return a.order_position - b.order_position
        })
      } else {
        items = items.sort(function(a, b) {
          return b.order_position - a.order_position
        })
      }
    } else {
      if (sortDirection === 'asc') {
        items = items.sort(function(a, b) {
          let aPropertyValue = a[sortProperty];
          let bPropertyValue = b[sortProperty];

          if ((new RegExp('[0-9]{4}\/[0-9]{2}\/[0-9]{2}')).test(aPropertyValue)) {
            aPropertyValue = new Date(aPropertyValue)
          }

          if ((new RegExp('[0-9]{4}\/[0-9]{2}\/[0-9]{2}')).test(bPropertyValue)) {
            bPropertyValue = new Date(bPropertyValue)
          }

          return aPropertyValue - bPropertyValue;
        })
      } else {
        items = items.sort(function(a, b) {
          return b[sortProperty] - a[sortProperty]
        })
      }
    }
  }

  const filter = (event) => {
    let filterString = event.target.dataset.filter;
    let filterProperty;
    let filterValue;

    if ((new RegExp('.*:.*').test(filterString))) {
      filterProperty = filterString.split(':')[0];
      filterValue = filterString.split(':')[1];
    } else {
      filterProperty = filterString;
    }

    if (filterProperty === 'all') {
      items = McuItems;
    } else {
      items = McuItems.filter(item => item[filterProperty] == filterValue);
    }
  }

  // console.log({duration: , position: item.order_position})
</script>

<div class="text-center">
  <button type="button" data-sort="default:asc" on:click={sort}>Sort By MCU Chronological</button>
  <button type="button" data-sort="date:asc" on:click={sort}>Sort By Date</button>
  <hr />
  <button type="button" data-filter="all" on:click={filter}>Show All</button>
  <button type="button" data-filter="type:movie" on:click={filter}>Hide show</button>
</div>
<hr />
<div id="mcu-items-container" >
  {#each items as item (item.order_position)}
    <div animate:flip="{{ duration:d => 20 * Math.floor(Math.sqrt(d)) }}" class="item">
      <img src="{item.poster}" alt={item.title} class="poster" />
      <!-- <div class="item-body">
        <h1>{item.title}</h1>
        <h6>{item.date}</h6>
      </div> -->
    </div>
  {/each}
</div>

<style lang="postcss" scoped>
  button {
    @apply p-2 m-2 bg-gray-800 hover:bg-gray-900 text-white border border-gray-900 rounded-md;
  }

  #mcu-items-container {
    @apply flex flex-wrap p-4;
  }

  /**
  #mcu-items-container {
    @apply flex flex-col items-center p-4;
  }

  .item {
    @apply flex justify-between sm:w-2/4 rounded-xl overflow-hidden;
  }

  .item-body {
    @apply bg-gray-800 p-6 hidden sm:block sm:w-full w-min;
  }
  */

  .item h1 {
    @apply text-lg font-bold text-white;
  }

  .item h6 {
    @apply text-sm text-gray-400;
  }

  /**
  .item:nth-child(even) {
    @apply self-end flex-row-reverse;
  }

  .item:nth-child(odd) {
    @apply self-start;
  }
  */

  .poster {
    @apply h-64;
  }
</style>
