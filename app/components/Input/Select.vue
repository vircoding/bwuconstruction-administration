<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui';
import type { ArrayOrNested } from '@nuxt/ui/runtime/types/utils.js';

const props = withDefaults(
  defineProps<{
    label?: string;
    placeholder?: string;
    clear?: boolean;
    clearTooltipText?: string;
    items: ArrayOrNested<SelectMenuItem>;
    valueKey?: string;
    createItem?: boolean;
  }>(),
  {
    label: '',
    placeholder: 'Select Value',
    clearTooltipText: 'Clear Value',
    valueKey: undefined,
  }
);

defineEmits<{
  (e: 'create'): void;
}>();

const model = defineModel<SelectMenuItem | undefined>({ required: true });

// ERROR Sometimes this don't updates the tooltip disabled value at time
const disabled = computed(() => !model.value);
</script>

<template>
  <div class="flex space-x-1 items-end">
    <UFormField :label="props.label" class="grow">
      <USelectMenu
        v-model="model"
        :items="props.items"
        :value-key="props.valueKey"
        :placeholder="props.placeholder"
        :create-item="props.createItem"
        :ui="{
          trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
          item: 'cursor-pointer',
        }"
        class="w-full cursor-pointer"
        @create="$emit('create')"
      >
        <template #item-label="{ item }">
          <slot name="item-label" :item="item" />
        </template>

        <template #default="{ modelValue }">
          <slot :model-value="modelValue" />
        </template>
      </USelectMenu>
    </UFormField>

    <UTooltip v-if="props.clear" :text="props.clearTooltipText" :disabled="disabled">
      <UButton
        icon="i-lucide-x"
        color="neutral"
        variant="ghost"
        :aria-label="props.clearTooltipText"
        :disabled="disabled"
        @click="model = undefined"
      />
    </UTooltip>
  </div>
</template>
