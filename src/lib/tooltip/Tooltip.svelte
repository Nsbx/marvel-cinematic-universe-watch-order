<script lang="ts">
  import { onMount } from 'svelte';

  import tippy, {followCursor} from 'tippy.js';
import 'tippy.js/dist/tippy.css';

  export let tippyParams = {};

  let element;
  let tooltipContent;

  onMount(() => {
    const tooltipTemplate = tooltipContent;
    tooltipTemplate.style.display = 'block';

    const tooltip = tippy(element, {
        content: tooltipTemplate,
        plugins: [followCursor],
        ...tippyParams
    });
  });
</script>

<div bind:this={element}>
  <slot name="element"></slot>
</div>
<div bind:this={tooltipContent} style="display: none">
  <slot name="element-tooltip-content"></slot>
</div>

<style lang="postcss">
  
</style>
