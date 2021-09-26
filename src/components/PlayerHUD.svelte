<script lang="ts">
  import type { PlayerTurn } from './types';

  export let playerTurn: PlayerTurn;
</script>

<div>
  <p>Current Player - {playerTurn}</p>
</div>

<style>
  div {
    margin-bottom: 10px;
  }
  p {
    text-align: center;
    margin: 0;
    padding: 0;
  }
</style>
