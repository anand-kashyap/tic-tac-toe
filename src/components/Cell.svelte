<script lang="ts">
  type ICell = 'O' | 'X' | '';
  export let value: ICell = '';
  export let index: number;
</script>

<div>
  <p>{value}</p>
</div>

<style>
  div {
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
