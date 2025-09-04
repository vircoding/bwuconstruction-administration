<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Time Entry',
    to: '/times',
    active: route.path.startsWith('/times'),
  },
  {
    label: 'Register Employee',
    to: '/employees',
    active: route.path.startsWith('/employees'),
  },
  {
    label: 'Website',
    to: 'https://bwuconstruction.com',
    target: '_blank',
  },
  {
    label: 'GitHub',
    to: 'https://github.com/vircoding/bwuconstruction-administration',
    target: '_blank',
  },
]);
</script>

<template>
  <UHeader>
    <template #title>
      <UILogo class="w-12" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <!-- ERROR Trying to add a tooltip here results in a visual error (It needs a tooltip) -->
      <UColorModeButton class="cursor-pointer" />

      <!-- GitHub -->
      <UTooltip text="Open on GitHub">
        <UButton
          icon="i-fa6-brands-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/vircoding/bwuconstruction-administration"
          target="_blank"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>
</template>
