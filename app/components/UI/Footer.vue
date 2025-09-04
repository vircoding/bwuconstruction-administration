<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>

    <template #right>
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
  </UFooter>
</template>
