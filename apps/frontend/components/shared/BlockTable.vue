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
  <div class="overflow-x-auto">
    <table class="border-collapse border border-gray-400 bg-gray-50">
      <tbody>
        <tr
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="border-t"
        >
          <td
            v-for="(cell, cellIndex) in row.cells"
            :key="cellIndex"
            :class="`border border-gray-300 px-4 py-2 text-m ${rowIndex === 0 ? 'text-gray-900' : 'text-gray-600'} ${rowIndex % 2 === 0 ? 'bg-slate-100' : ''}`"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  border-spacing: 0;
  border: 1px solid #e2e8f0;
}

td {
  padding: 0.333rem 1rem;
  border: 1px solid #e2e8f0;
}
</style>
