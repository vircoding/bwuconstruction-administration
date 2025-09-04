<script setup lang="ts">
import positionData from '~/data/position.json';
import { today } from '@internationalized/date';

const formName = 'Register Employee';

// WARNING Update onClear() to add new properties
const state = shallowReactive<RegisterEmployeeState>({
  name: '',
  position: undefined,
  hiredAt: today('America/New_York').toString(),
  rate: undefined,
});

function onClear() {
  state.name = '';
  state.position = undefined;
  state.hiredAt = today('America/New_York').toString();
  state.rate = undefined;
}
</script>

<template>
  <!-- WARNING Not sure about the max width -->
  <UContainer class="max-w-xl">
    <UCard variant="subtle" :ui="{ header: 'flex justify-between items-center' }">
      <template #header>
        <h3 class="text-xl sm:text-2xl text-pretty font-bold text-highlighted">
          {{ formName }}
        </h3>
        <UButton
          icon="i-lucide-x"
          color="neutral"
          variant="ghost"
          :aria-label="`Close ${formName}`"
        />
      </template>

      <UForm :state="state" class="space-y-3">
        <!-- INFO Name -->
        <InputText v-model="state.name" label="Name" placeholder="Insert Name" />

        <!-- INFO Position -->
        <InputSelect
          v-model="state.position"
          label="Position"
          placeholder="Select Position"
          clear-tooltip-text="Clear Position"
          :items="positionData"
        />

        <div class="grid grid-cols-2 gap-x-3">
          <!-- INFO Hired At -->
          <InputDate v-model="state.hiredAt" label="Hired At" />

          <!-- TODO Rate -->
          <InputNumber
            v-model="state.rate"
            label="Rate"
            placeholder="Enter Rate"
            :min="0"
            :max="50"
            :step="0.5"
            :format-options="{
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
            }"
          />
        </div>

        <!-- INFO Separator -->
        <USeparator class="py-3" />

        <div class="flex space-x-3">
          <!-- INFO Clear -->
          <UButton
            type="button"
            color="neutral"
            variant="subtle"
            label="Clear"
            block
            @click="onClear"
          />

          <!-- INFO Submit -->
          <UButton type="submit" label="Save" block />
        </div>
      </UForm>
    </UCard>
  </UContainer>
</template>
