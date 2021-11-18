<script lang="ts">
  export let postCreditScenes = [];
</script>

<ul>
  {#each postCreditScenes as item (item.episode)}
    <li>Episode {item.episode} : {item.count}</li>
  {/each}
</ul>
