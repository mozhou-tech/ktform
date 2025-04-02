<template>
  <SchemaForm :schemas="schemas" />
</template>
<script>
import { defineComponent } from 'vue'
import { SchemaForm } from 'element-plus-schema-form'

const schemas = [
  {
    field: 'field1',
    component: 'Input',
    label: '字段1',
  },
  {
    field: 'field2',
    component: 'Input',
    label: '字段1',
  },
]
export default defineComponent({
  components: { SchemaForm },
  setup() {
    return {
      schemas
    }
  }
})
</script>