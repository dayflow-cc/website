<script setup>

const showMenu = ref(false)

</script>

<template>
  <div class="border-t border-gray-50/[0.06] py-10">
    <div
      class="mx-auto max-w-7xl px-6"
    >
      <template
        v-if="showMenu"
      >
        <div class="flex items-center">
          <a href="/">
            <img
              alt="dayflow"
              height="35"
              src="/images/logo.svg"
              width="163"
            >
          </a>
        </div>
        <div
          class="mt-8 mb-16 grid gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
        >
          <div>
            <h2 class="mb-4 text-lg font-bold">
              dayflow
            </h2>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Features
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Pricing
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Testimonials
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Roadmap
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  About Us
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-4 text-lg font-bold">
              Resources
            </h2>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  The dayflow Method
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  FAQs
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Changelog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Community Discord
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-4 text-lg font-bold">
              Spread the word
            </h2>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Featured on Product
                  Hunt
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Like us on
                  AlternativeTo
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Review us on
                  Capterra
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Like us on Slant
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-4 text-lg font-bold">
              Legal
            </h2>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Terms of Service
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition-colors hover:text-pink-700"
                  to="/"
                >
                  Privacy Statement
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </template>
      <div class="mt-4 text-center">
        &copy; {{ new Date().getFullYear() }} ⋅ A
        <a
          class="text-pink-600 transition-colors hover:text-pink-700"
          href="https://coderscantina.com"
          target="_blank"
        >Coder's Cantina</a> project ⋅ Built in public ⋅ All rights reserved.
      </div>
    </div>
  </div>
</template>
