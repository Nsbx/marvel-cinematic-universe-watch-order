<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>

<style lang="postcss" scoped>
  button {
    @apply text-yellow-600 
    bg-yellow-600 
    bg-opacity-10 
    border-2 
    border-black 
    border-opacity-0 
    rounded-full
    tabular-nums
    cursor-pointer
    px-8
    py-4
    outline-none
    w-52
    ;
  }

  button:focus {
    @apply border-2 border-yellow-600;
  }

  button:active {
    @apply bg-yellow-600 bg-opacity-20;
  }
</style>
