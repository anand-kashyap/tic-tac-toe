<script lang="ts">
  import { calcResult } from '../utils';
  import Cell from './Cell.svelte';
  import type { PlayerTurn } from './types';
  export let changePlayer: () => any;
  export let playerTurn: PlayerTurn;

  const cellIndexes = new Array(9).fill(null).map((_val, index) => index);
  let valArr = new Array(9);
  let gameOver = false;
  let winStyle = '';

  const checkResult = (index: number) => {
    if (gameOver) return;
    valArr[index] = playerTurn;
    winStyle = calcResult(valArr, playerTurn as string);
    if (!winStyle) {
      return changePlayer();
    }
    gameOver = true;
  };
</script>

<div class="gridContainer">
  <div class="grid">
    {#each cellIndexes as index}
      <Cell
        value={valArr[index] || ''}
        checkResult={() => checkResult(index)}
      />
    {/each}
  </div>
</div>

{#if gameOver}
  <button
    on:click={() => {
      valArr = new Array(9);
      gameOver = false;
      winStyle = '';
    }}>Reset</button
  >
{/if}

<style>
  .grid {
    display: grid;
    grid-template: repeat(3, 50px) / repeat(3, 50px);
    border: 1px solid black;
    border-width: 1px 0 0 1px;
  }

  .gridContainer {
    position: relative;
  }
  .wonLine {
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: black;
  }
  button {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    text-transform: uppercase;
    background-color: coral;
  }
</style>
