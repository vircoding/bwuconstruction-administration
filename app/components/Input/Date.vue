<script setup lang="ts">
import { DateFormatter, parseDate } from '@internationalized/date';

const props = withDefaults(
  defineProps<{
    label?: string;
    tooltipText?: string;
    placeholder?: string;
  }>(),
  {
    label: '',
    tooltipText: 'Pick Date',
    placeholder: 'Pick Date',
  }
);

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
});

const model = defineModel<string>({ required: true });
const value = shallowRef(parseDate(model.value));

watch(value, (newValue) => {
  model.value = newValue.toString();
});
</script>

<template>
  <div class="text-base">
    <div class="cursor-default">
      <div class="flex content-center items-center justify-between">
        <span class="block font-medium text-default">{{ props.label }}</span>
      </div>
    </div>

    <div class="mt-1 relative">
      <UPopover :content="{ align: 'center', side: 'right' }">
        <UTooltip :text="props.tooltipText">
          <UButton color="neutral" block variant="outline" icon="i-lucide-calendar-days">
            {{ df.format(value.toDate('America/New_York')) }}
          </UButton>
        </UTooltip>

        <template #content>
          <UCalendar v-model="value" :fixed-weeks="false" class="p-3" />
        </template>
      </UPopover>
    </div>
  </div>
</template>
