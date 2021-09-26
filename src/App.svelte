<script lang="ts">
  import Grid from './components/Grid.svelte';
</script>

<main>
  <Grid />
</main>

<style>
  :global(body) {
    box-sizing: border-box;
  }
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    margin: 20px 10%;
    display: flex;
    place-content: center;
  }
</style>
