<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    placeholder?: string;
  }>(),
  {
    label: '',
    placeholder: 'Insert Text',
  }
);

const model = defineModel<string>({ required: true });
</script>

<template>
  <UFormField :label="props.label">
    <UInput v-model="model" :placeholder="props.placeholder" class="w-full" />
  </UFormField>
</template>
