<template>
  <div
    class="border relative border-zinc-200 dark:border-zinc-700 overflow-hidden h-full rounded-3xl p-6 w-full"
  >
    <form class="relative z-10 space-y-4">
      <div class="mb-8">
        <h3 class="dark:text-white text-black text-3xl font-bold">Sign up</h3>
        <p class="text-zinc-400 text-sm mt-2 leading-relaxed">
          Sign up for a new account and start your journey with us. Let's get
          started.
        </p>
      </div>

      <div>
        <label for="username" class="text-zinc-400 text-sm mb-2 block">
          User name
        </label>
        <div class="relative flex items-center">
          <input
            name="username"
            type="text"
            required
            class="w-full text-sm text-zinc-400 border border-gray-300 px-4 py-3 rounded-lg outline-twc-theme-600"
            placeholder="Enter user name"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            class="w-[18px] h-[18px] absolute right-4"
            viewBox="0 0 24 24"
          >
            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
            <path
              d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <label class="text-zinc-400 text-sm mb-2 block">Password</label>
        <div class="relative flex items-center">
          <input
            name="password"
            type="password"
            required
            class="w-full text-sm text-zinc-400 border border-gray-300 px-4 py-3 rounded-lg outline-twc-theme-600"
            placeholder="Enter password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
            viewBox="0 0 128 128"
          >
            <path
              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <label class="text-zinc-400 text-sm mb-2 block">Confirm Password</label>
        <div class="relative flex items-center">
          <input
            name="confirm-password"
            type="confirm-password"
            required
            class="w-full text-sm text-zinc-400 border border-gray-300 px-4 py-3 rounded-lg outline-twc-theme-600"
            placeholder="Confirm password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
            viewBox="0 0 128 128"
          >
            <path
              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>

      <div class="!mt-8">
        <button
          class="bg-twc-theme-600 hover:bg-twc-theme-700 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
        >
          Sign up
        </button>
      </div>

      <p class="text-sm !mt-8 text-center text-zinc-400">
        Already have an account
        <a
          href="javascript:void(0);"
          class="text-twc-theme-600 font-semibold hover:underline ml-1 whitespace-nowrap"
        >
          Sign in
        </a>
      </p>
    </form>

    <div
      class="bg-gradient-to-bl from-twc-theme-400 dark:via-black dark:to-black via-white to-white absolute top-0 left-0 w-full h-full opacity-50"
    ></div>
  </div>
</template>
