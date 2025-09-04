<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    placeholder?: string;
    min: number;
    max: number;
    step?: number;
    formatOptions?: Intl.NumberFormatOptions;
  }>(),
  {
    label: '',
    placeholder: 'Enter Value',
    step: 1,
    formatOptions: undefined,
  }
);

const model = defineModel<number | undefined>({ required: true });
</script>

<template>
  <UFormField :label="props.label">
    <UInputNumber
      v-model="model"
      :placeholder="props.placeholder"
      :min="props.min"
      :max="props.max"
      :step="0.5"
      :step-snapping="false"
      :format-options="props.formatOptions"
      :decrement="{ color: 'neutral' }"
      :increment="{ color: 'neutral' }"
      invert-wheel-change
      class="w-full"
    />
  </UFormField>
</template>
