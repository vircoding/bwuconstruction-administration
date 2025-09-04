<script setup lang="ts">
import employeeData from '~/data/employee.json';
import timeData from '~/data/time.json';
import projectData from '~/data/project.json';
import taskData from '~/data/task.json';
import { today } from '@internationalized/date';

// WARNING Update onClear() to add new properties
const state = reactive<TimeEntryCreateState>({
  project: undefined,
  employee: undefined,
  entries: [
    {
      task: undefined,
      date: today('America/New_York').toString(),
      time: undefined,
    },
  ],
});

const projectItems = projectData.map((project) => project.name);
const employeeItems = employeeData.map((employee) => employee.name);

function getSelectedProjectLabel(projectName: string) {
  const selectedProject = projectData.find((project) => project.name === projectName);
  return selectedProject ? selectedProject.number + ' - ' + selectedProject.type : undefined;
}

function onAddEntry() {
  state.entries.push({
    task: undefined,
    date: today('America/New_York').toString(),
    time: undefined,
  });
}

function onRemoveEntry(index: number) {
  state.entries.splice(index, 1);
}

function onClear() {
  state.project = undefined;
  state.employee = undefined;
  state.entries = [
    {
      task: undefined,
      date: today('America/New_York').toString(),
      time: undefined,
    },
  ];
}

async function onCreateEmployee() {
  await navigateTo('/');
}
</script>

<template>
  <!-- WARNING Change the max width in all similar forms -->
  <UContainer class="max-w-xl">
    <UCard variant="subtle" :ui="{ header: 'flex justify-between items-center' }">
      <template #header>
        <h3 class="text-xl sm:text-2xl text-pretty font-bold text-highlighted">Time Entry</h3>
        <UButton icon="i-lucide-x" color="neutral" variant="ghost" aria-label="Close Time Entry" />
      </template>

      <UForm :state="state" class="space-y-3">
        <!-- INFO Project -->
        <InputSelect
          v-model="state.project"
          label="Project"
          placeholder="Select Project"
          clear-tooltip-text="Clear Project"
          :items="projectItems"
        >
          <template #default="{ modelValue }">
            <span v-if="typeof modelValue === 'string'"
              >{{ modelValue
              }}<span class="text-muted"> - {{ getSelectedProjectLabel(modelValue) }}</span></span
            >
          </template>

          <template #item-label="{ item }">
            <span v-if="typeof item === 'string'"
              >{{ item
              }}<span class="text-muted"> - {{ getSelectedProjectLabel(item) }}</span></span
            >
          </template>
        </InputSelect>

        <!-- INFO Employee -->
        <InputSelect
          v-model="state.employee"
          label="Employee"
          placeholder="Select Employee"
          clear-tooltip-text="Clear Employee"
          :items="employeeItems"
          create-item
          @create="onCreateEmployee"
        >
          <template #default="{ modelValue }">
            <span v-if="typeof modelValue === 'string'"
              >{{ modelValue
              }}<span class="text-muted">
                -
                {{ employeeData.find((employee) => employee.name === modelValue)?.position }}</span
              ></span
            >
          </template>

          <template #item-label="{ item }">
            <span v-if="typeof item === 'string'"
              >{{ item
              }}<span class="text-muted">
                - {{ employeeData.find((employee) => employee.name === item)?.position }}</span
              ></span
            >
          </template>
        </InputSelect>

        <!-- INFO Entries -->
        <div v-for="(entry, index) in state.entries" :key="index" class="space-y-3">
          <!-- INFO Separator -->
          <USeparator class="pt-3 pb-1" />

          <!-- INFO Task -->
          <InputSelect
            v-model="entry.task"
            label="Task"
            placeholder="Select Task"
            clear-tooltip-text="Clear Task"
            :items="taskData"
          />

          <div class="grid grid-cols-2 gap-x-3">
            <!-- INFO Date -->
            <InputDate v-model="entry.date" label="Date" />

            <!-- INFO Time -->
            <InputSelect
              v-model="entry.time"
              label="Time"
              placeholder="Select Time"
              clear-tooltip-text="Clear Time"
              :items="timeData"
              value-key="time"
              class="grow"
            />
          </div>

          <!-- INFO Entry CTA's -->
          <div class="flex space-x-3 pt-2">
            <!-- INFO Remove Entry -->
            <UButton
              v-if="state.entries.length > 1"
              type="button"
              color="neutral"
              variant="subtle"
              label="Remove Entry"
              block
              @click="onRemoveEntry(index)"
            />

            <!-- INFO Add Entry -->
            <UButton
              v-if="index === state.entries.length - 1"
              type="button"
              color="secondary"
              label="Add Entry"
              block
              @click="onAddEntry"
            />
          </div>
        </div>

        <!-- INFO Separator -->
        <USeparator class="py-3" />

        <!-- INFO Form CTA's -->
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
