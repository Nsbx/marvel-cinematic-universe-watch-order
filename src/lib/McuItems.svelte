<script lang="ts">
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';

  import tooltip from "../script/tooltip";

  import Tooltip from './tooltip/Tooltip.svelte'
  import TvShowTooltipContent from './tooltip/TvShowTooltipContent.svelte'

  import McuItems from "../data/mcu-items.js";

  let tooltipOption = {
    theme: "translucent",
    followCursor: "horizontal",
  }

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

          if ((new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}')).test(aPropertyValue)) {
            aPropertyValue = new Date(aPropertyValue)
          }

          if ((new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}')).test(bPropertyValue)) {
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
      let filteredMcuItems = McuItems.filter(item => item[filterProperty] == filterValue);
      items = filteredMcuItems;
    }
  }

  const formattedDate = (d) => {
    d = new Date(d);
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${day}/${month}/${year}`;
  }

  // console.log({duration: , position: item.order_position})
</script>

<div class="text-center">
  <button type="button" data-sort="default:asc" on:click={sort}>Sort By MCU Chronological</button>
  <button type="button" data-sort="date:asc" on:click={sort}>Sort By Date</button>
  <hr />
  <button type="button" data-filter="all" on:click={filter}>Show All</button>
  <button type="button" data-filter="type:movie" on:click={filter}>Show movie</button>
  <button type="button" data-filter="type:tv-show" on:click={filter}>Show TV show</button>
  <button type="button" data-filter="type:animated-tv-show" on:click={filter}>Show animated TV show</button>
</div>
<hr />
<div id="mcu-items-container" >
  {#each items as item (item.order_position)}
    <div animate:flip="{{ duration:d => 20 * Math.floor(Math.sqrt(d)) }}" transition:fade class="item">
      <img src="{item.poster}" alt={item.title} class="poster" />
      <div class="item-body">
        {#if item.title.length >= 17 }
        <h1 use:tooltip={tooltipOption} title={item.title}>{item.title}</h1>
        {:else}
        <h1 title={item.title}>{item.title}</h1>
        {/if}
        <h6>{formattedDate(item.date)}</h6>
        {#if item.type === 'movie' }
        <p>Post credit scene : {item.post_credit_scenes == -1 ? '?' : item.post_credit_scenes}</p>
        {:else}
          {#if item.post_credit_scenes != -1 }
          <Tooltip tippyParams={tooltipOption}>
            <p slot="element">Post credit scene : {item.post_credit_scenes == -1 ? '?' : item.post_credit_scenes}</p>
            <TvShowTooltipContent slot="element-tooltip-content" postCreditScenes={item.post_credit_scenes_details}></TvShowTooltipContent>
          </Tooltip>
          {:else}
            <p>Post credit scene : {item.post_credit_scenes == -1 ? '?' : item.post_credit_scenes}</p>
          {/if}
        {/if}
      </div>
    </div>
  {/each}
</div>

<style lang="postcss" scoped>
  button {
    @apply p-2 m-2 bg-gray-800 hover:bg-gray-900 text-white border border-gray-900 rounded-md;
  }

  #mcu-items-container {
    @apply flex flex-wrap p-4 gap-2 justify-center;
  }

  .item {
    @apply w-48;
  }

  .item-body {
    @apply bg-gray-800 p-6 block w-full;
  }
  

  .item h1 {
    @apply font-bold text-white truncate;
  }

  .item h6 {
    @apply text-sm text-gray-400;
  }

  .item p {
    @apply w-full text-xs text-gray-400 pt-2;
  }

  .poster {
    @apply w-48;
  }
</style>
