<template>
  <div class="container mx-auto px-6">
    <h3 class="text-gray-700 text-2xl pt-6 font-medium">Products</h3>
    <div
      class="
        grid
        gap-12
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        mt-6
      "
    >
      <Product
        :product="product"
        v-for="(product, index) in products"
        :key="index"
      />
      <Pagination/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Product from "@/components/Product";
import Pagination from '@/components/Pagination';
import { ref } from "vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Product,
    Pagination
  },

  setup() {
    const products = ref([]);

    function getProducts() {
      axios
        .get("/api/products")
        .then((response) => {
          products.value = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      products,
      getProducts,
    };
  },
  mounted() {
    this.getProducts();
  },
};
</script>
