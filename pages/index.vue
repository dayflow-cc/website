<script setup>

useSeoMeta({
  title: 'dayflow - Productivity Redefined',
  description: 'Empower your time management with dayflow: a productivity tool blending calendar with time buckets for optimal organization and seamless efficiency.',
  url: 'https://dayflow.cc',
})

</script>

<template>
  <NuxtLayout>
    <section
      id="hero"
      class="py-10 md:py-20 overflow-x-hidden relative"
    >
      <div
        class="relative mx-auto max-w-screen-xl flex flex-col-reverse md:flex-row text-center md:text-left"
      >
        <div class="lg:max-w-2xl md:w-1/2 px-4">
          <h1 class="text-2xl lg:text-5xl pb-8">
            <em class="text-5xl lg:text-8xl block font-script not-italic text-green-500">Find your
              Rhythm,</em>
            <span class="block max-w-xl">
              embrace the momentum with dayflow.
            </span>
          </h1>
          <div class="max-w-xl">
            <p class="text-xl">
              Unlock your personal <em>productivity potential</em>
              with dayflow. Effortlessly navigate your day, stay organized, and make the most of
              <em>every moment</em>.
            </p>
            <p class="mt-8 text-pink-600">
              Be among the first to experience dayflow's innovative features and embark on a
              journey to revolutionize your daily routine.
            </p>
            <form
              action="https://dayflow.us21.list-manage.com/subscribe/post?u=ffdb3529cc309693935055821&amp;id=30f2b829d9&amp;f_id=002cd9e6f0"
              class="mt-4"
              method="post"
            >
              <input
                name="subscribe"
                type="hidden"
                value="Subscribe"
              >
              <div class="mc-field-group">
                <label
                  class="sr-only"
                  for="mce-EMAIL"
                >Email Address</label><input
                  id="mce-EMAIL"
                  class="bg-zinc-800 border border-zinc-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none rounded-md py-2 px-4 block w-full lg:w-1/2 appearance-none leading-normal"
                  name="EMAIL"
                  required
                  type="email"
                  value=""
                >
              </div>
              <div
                aria-hidden="true"
                style="position: absolute; left: -5000px;"
              >
                <input
                  name="b_ffdb3529cc309693935055821_30f2b829d9"
                  tabindex="-1"
                  type="text"
                  value=""
                >
              </div>
              <input
                class="bg-pink-600 hover:bg-pink-600 cursor-pointer text-white font-bold py-2 px-4 rounded-xl mt-4"
                type="submit"
                value="Join the Waitlist"
              >
            </form>
          </div>
        </div>
        <div class="md:w-1/2 flex content-center items-center">
          <img
            alt="dayflow"
            class="mx-auto w-auto"
            height="900"
            src="/images/13.svg"
            width="600"
          >
        </div>
      </div>
    </section>
    <div class="mt-8 md:mt-32 px-4">
      <section
        id="tip"
        class="py-20 relative"
      >
        <div class="max-w-prose mx-auto text-center">
          <h2 class="text-2xl md:text-4xl font-bold">
            Why choose dayflow over traditional calendar & todo
            tools?
          </h2>
          <p class="text-lg pt-4">
            Personal and Professional Time Buckets are at the heart of
            dayflow's efficiency. Embrace a dynamic schedule that effortlessly merges your
            personal life and work commitments, empowering you to achieve more and stress
            less.
          </p>
        </div>
      </section>
    </div>
    <div class="bg-pattern relative my-8 md:my-32">
      <div class="bg-gradient">
        <section
          id="features"
          class="relative space-y-20"
        >
          <ImageFeature
            alignment="left"
            header="Unleash your Potential!"
            image="/images/104.svg"
          >
            Say goodbye to scheduling hassles with dayflow's revolutionary feature. With just a
            blink, take control of your time as our advanced system automates your day based on
            rules you define. Set your preferred time periods, allocate tasks, and watch dayflow
            create a perfectly balanced schedule for you. Embrace the future of productivity and
            make every second count!
          </ImageFeature>
          <ImageFeature
            alignment="right"
            header="Connect, Inspire, and Thrive Together!"
            image="/images/118.svg"
          >
            Experience a new dimension of productivity with dayflow's positive social platform.
            Connect with like-minded individuals, draw inspiration from their flows, and share
            your progress with the world. Our public profiles create a supportive community where
            you can stay motivated, uplift others, and embark on your productivity journey like
            never before. Join us in cultivating positivity and productivity hand in hand!
          </ImageFeature>
          <ImageFeature
            alignment="left"
            header="Supercharge with Integrations!"
            image="/images/319.svg"
          >
            Discover a whole new level of productivity with dayflow's powerful integrations.
            Effortlessly connect your favorite productivity tools, calendars, and task management
            apps to dayflow, creating a centralized hub that streamlines your day. Say goodbye
            to scattered information and overlapping schedules, as dayflow's integrations
            synchronize data in real-time, ensuring you stay organized, efficient, and in control of
            your time.
          </ImageFeature>
          <ImageFeature
            alignment="right"
            header="Elevate Your Reflection!"
            image="/images/108.svg"
          >
            Unlock a deeper level of self-awareness with dayflow's planned Journaling. Seamlessly
            integrate journaling into your routine, allowing you to reflect on your accomplishments,
            challenges, and aspirations. Set aside dedicated moments for introspection, and let
            dayflow be your companion in this journey of self-discovery. Elevate your productivity
            while nurturing your personal growth!
          </ImageFeature>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>

.bg-pattern {
  background-image: url('/images/background2.svg');
  background-size: 4rem;
  background-position: center top;
  background-repeat: repeat;
  background-attachment: fixed;
  z-index: 1;
}

.bg-gradient:before {
  height: 400px;
  width: 100%;
  background-image: linear-gradient(180deg, rgba(9, 9, 11, 1.00) 0%, rgba(9, 9, 11, 0.00) 100%);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.bg-gradient:after {
  z-index: -1;
  height: 400px;
  width: 100%;
  background-image: linear-gradient(180deg, rgba(9, 9, 11, 0.00) 0%, rgba(9, 9, 11, 1.00) 100%);
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

#hero {
  background-color: rgb(13, 13, 14);
}

</style>
