<script lang="ts">
  import type { PlayerTurn } from './types';

  export let value: PlayerTurn = '';
  export let checkResult: () => any;
  export let disabled: boolean;
</script>

<button on:click={checkResult} {disabled}>
  <p>{value}</p>
</button>

<style>
  button {
    background-color: lightcyan;
    border: 1px solid black;
    border-width: 0 1px 1px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    margin: 0;
    padding: 0;
  }
</style>
