<template>
  <div class="w-full max-w-sm mx-auto rounded-2xl shadow-md overflow-hidden opacity-90 transform transition duration-500 hover:scale-110 hover:opacity-100">
    <div
      :style="{ 'background-image': `url(${product.img_url})` }"
      class="flex items-end justify-end h-56 w-full bg-cover"
    >
      <button
        class="
          p-1
          rounded-full
          text-white
          mx-5
          -mb-4
          focus:outline-none
          opacity-2
        "
        :class="
          isAdded
            ? 'bg-red-600 hover:bg-red-500 focus:bg-red-500 '
            : 'bg-blue-500 hover:bg-blue-500 focus:bg-blu-500 '
        "
        @click="addToCart(product)"
      >
        <div class="flex p-2 gap-2">
          <svg
            v-if="!isAdded"
            class="w-6 h-6"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            ></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
    </div>
    <div class="px-5 py-3">
      <h3>{{ product.title }}</h3>
      <span>{{ product.price }}$</span>
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";
import { ref, computed } from "vue";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isAdded = ref(false);
    const cart = computed(() => {
      return store.state.cart;
    });
    function addToCart(product) {
      isAdded.value = !isAdded.value;
      if (isAdded.value) {
        store.commit("addToCart", product);
        store.commit("storeProduct");
      } else {
        store.commit("removeProduct", product);
        store.commit("storeProduct");
      }
    }

    function checkAdded() {
      const product = props.product.id;
      const check = cart.value.some((el) => {
        return el.id == product;
      })
      if(check){
          isAdded.value=true;
      }
    }
    return {
      cart,
      addToCart,
      isAdded,
      checkAdded
    };
  },
  mounted(){
      this.checkAdded()
  }
};
</script>

<style>
</style>