<script setup lang="ts">
const links = ref([
  {
    label: 'Time Entry',
    to: '/times',
    icon: 'i-lucide-timer',
  },
  {
    label: 'Register Employee',
    to: '/employees',
    color: 'neutral' as const,
    variant: 'subtle' as const,
    icon: 'i-lucide-user-round',
  },
]);
</script>

<template>
  <UPage>
    <UPageHero
      title="BWU Construction Administration"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ratione quaerat accusamus quo at."
      :links="links"
    />

    <!-- TODO Remove this if it's unused -->
    <!-- <UPageBody> </UPageBody> -->
  </UPage>
</template>
