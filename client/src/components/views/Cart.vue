<template>
  <div class="container flex flex-col m-auto">
    <p class="text-3xl md:text-5xl font-medium">Cart/</p>
    <div class="flex w-full flex-col m-auto" v-if="cart.length >= 1">
      <div class="flex w-full flex-col md:flex-row">
        <div class="flex md:w-3/5 mt-4 w-full">
          <table class="table-auto w-11/12 m-auto">
            <thead>
              <tr class="h-12 border-b border-solid border-gray-400">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <ProductCart :product='product' v-for='(product, index) in cart' :key='index' />
            </tbody>
          </table>
        </div>
        <div class="sm:w-7/12 md:w-2/5 w-full m-auto mt-4">
          <div class="w-11/12 m-auto border rounded p-8 border-gray-400 shadow-md">
            <table class="mt-4 mb-4">
              <tr class="text-center text-2xl">
                <td>Subtotal</td>
                <td></td>
              </tr>
              <tr class="text-center text-2xl">
                <td>Tax</td>
                <td></td>
              </tr>
              <tr class="h-20 text-center text-3xl">
                <td><strong>Total</strong></td>
                <td><strong></strong></td>
              </tr>
            </table>
            <div class="w-5/6 m-auto mt-4 mb-4">
              <a href="#">
                <button
                  class="flex justify-center w-full px-10 py-3 mt-6 font-medium align-center bg-gray-800 rounded-2xl"
                >
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                  <span class="flex justify-center mt-5px text-white">Proceed to checkout</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-ful mt-20" v-if="cart.length <= 0">
      <h1 class="m-auto text-6xl">The cart is empty</h1>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import store from "@/store/index.js";
import ProductCart from "@/components/ProductCart.vue";
export default {
  components: {
    ProductCart,
  },
  setup() {
    const cart = computed(() => {
      return store.state.cart;
    });
    return {
      cart,
    };
  },
};
</script>

<style>
</style>