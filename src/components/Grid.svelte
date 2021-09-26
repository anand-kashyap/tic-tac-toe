<script lang="ts">
  import { calcResult } from '../utils';
  import Cell from './Cell.svelte';
  import type { PlayerTurn } from './types';
  export let changePlayer: () => any;
  export let playerTurn: PlayerTurn;

  const cellIndexes = new Array(9).fill(null).map((_val, index) => index);
  let valArr = new Array(9);
  let gameOver = false;

  const checkResult = (index: number) => {
    valArr[index] = playerTurn;
    const isWon = calcResult(valArr, playerTurn as string);
    if (!isWon) {
      return changePlayer();
    }
    gameOver = true;
  };
</script>

<div>
  {#each cellIndexes as index}
    <Cell
      disabled={gameOver}
      value={valArr[index] || ''}
      checkResult={() => checkResult(index)}
    />
  {/each}
</div>
{#if gameOver}
  <button
    on:click={() => {
      valArr = new Array(9);
      gameOver = false;
    }}>Reset</button
  >
{/if}

<style>
  div {
    display: grid;
    grid-template: repeat(3, 50px) / repeat(3, 50px);
    border: 1px solid black;
    border-width: 1px 0 0 1px;
  }

  button {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    text-transform: uppercase;
    background-color: coral;
  }
</style>
