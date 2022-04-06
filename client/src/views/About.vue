<template>
  <div class="about">
    <!-- Display the data with a structured table, element-ui is ready for use -->
    <el-table :data="facts" style="width: 100%">
      <el-table-column prop="text" label="Text" />
    </el-table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getAllFacts } from "../services/index.js";

export default {
  name: "facts",
  setup() {
    const facts = ref([]);
    const getFacts = async () => {
      // Get data from backend
      const data = await getAllFacts();

      if (data) {
        facts.value = data;
      }
    };
    onMounted(() => {
      getFacts();
    });

    return {
      facts,
    };
  },
};
</script>
