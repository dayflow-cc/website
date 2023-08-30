<script lang="ts" setup>

const { alignment } = defineProps({
  header: {
    type: String,
    required: true
  },
  cta: {
    type: Object,
    required: true
  },
  image: {
    type: String,
    default: undefined
  },
  alignment: {
    type: String,
    default: 'left'
  },
  icon: {
    type: String,
    required: true
  }
})

const alignmentClass = computed(() => {
  return alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
})

</script>

<template>
  <div
    :class="alignmentClass"
    class="max-w-screen-lg px-4 md:py-20 mx-auto md:flex"
  >
    <div
      v-if="image"
      class="md:w-1/2 flex content-center items-center mb-10 md:mb-0"
    >
      <img
        :alt="header"
        :src="image"
        class="mx-auto w-2/3"
      >
    </div>
    <div class="md:w-1/2">
      <img
        v-if="icon"
        :alt="header"
        :src="icon"
      >
      <h3 class="text-3xl font-bold mb-6 text-center md:text-left">
        {{ header }}
      </h3>
      <div class="leading-7  text-center md:text-left">
        <slot />
      </div>
      <NuxtLink
        v-if="cta"
        :to="cta.link"
        class="bg-pink-400 text-white font-bold p-7 text-xl shadow-lg rounded-full mb-3 hover:bg-pink-700 hover:scale-105 transition"
      >
        {{ cta.text }}
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
