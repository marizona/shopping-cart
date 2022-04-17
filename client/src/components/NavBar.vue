<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-gray p-6 shadow-2xl"
  >
    <div class="flex items-center flex-shrink-0 text-gray mr-6">
      <router-link :to="{ name: 'Home' }" class="flex items-center">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
          ></path>
        </svg>
        <h5 class="fill-current mr-2 text-xl font-semibold text-blue-500">TAKE !T</h5>
      </router-link>
    </div>
    <div class="flex items-center w-auto">
      <div class="">
        <router-link
          :to="{ name: 'Cart' }"
          class="
            flex
            text-sm
            px-4
            py-2
            leading-none
            rounded
            text-gray
            border-white
            hover:border-transparent hover:text-teal-500 hover:bg-white
            mt-4
            lg:mt-0
          "
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            ></path>
          </svg>
          <span class="text-lg font-medium">({{ cart.length }})</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import store from "@/store/index.js";
export default {
  setup() {
    const cart = computed(() => {
      return store.state.cart;
    });
    return {
      cart,
    };
  },
  mounted() {
    store.commit("getLocalStorage");
  },
};
</script>

<style>
</style>