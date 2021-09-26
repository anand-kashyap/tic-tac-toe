<script lang="ts">
  import Cell from './Cell.svelte';

  const cellIndexes = new Array(9).fill(null).map((_val, index) => index);
  console.log('cellIndexes', cellIndexes);
</script>

<div>
  {#each cellIndexes as index}
    <Cell value="X" {index} />
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template: repeat(3, 50px) / repeat(3, 50px);
    border: 1px solid black;
    border-width: 1px 0 0 1px;
  }
</style>
