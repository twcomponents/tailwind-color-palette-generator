<template>
  <section
    class="container flex flex-col items-center justify-center h-screen px-4 py-8 mx-auto"
  >
    <h1 class="text-3xl font-bold text-center">404 Not Found</h1>
    <p class="mt-4 text-center">The page you are looking for does not exist.</p>

    <RouterLink
      to="/"
      class="mt-8 px-4 py-2 text-white bg-twc-theme-600 hover:bg-twc-theme-700 duration-200 rounded-md"
    >
      Go Home
    </RouterLink>
  </section>
</template>
