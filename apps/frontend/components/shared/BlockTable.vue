<script setup lang="ts">
/**
 * props
 * ================================================================
 */
interface TableRow {
  cells: string[];
}
interface Props {
  rows: TableRow[]
}
defineProps<Props>()
</script>

<template>
  <table class="min-w-full border-collapse border border-gray-400 bg-gray-50">
    <tbody>
      <tr
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="border-t"
      >
        <td
          v-for="(cell, cellIndex) in row.cells"
          :key="cellIndex"
          class="border border-gray-300 px-4 py-2 text-sm"
        >
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-spacing: 0;
  border: 1px solid #e2e8f0;
}

td {
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
}
</style>
