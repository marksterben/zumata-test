<template>
  <div class="about">
    <div :style="{ textAlign: 'left' }">
      <el-button type="warning" @click="create">Add</el-button>
    </div>

    <!-- Display the data with a structured table, element-ui is ready for use -->
    <el-table :data="facts" style="width: 100%">
      <el-table-column prop="text" label="Text" />

      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="edit(scope.row)">Edit</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from "element-plus";
import {
  addNewFact,
  deleteFact,
  editFact,
  getAllFacts,
} from "../services/index.js";

export default {
  data() {
    return {
      facts: [],
    };
  },

  methods: {
    async getFacts() {
      const data = await getAllFacts();

      if (data) {
        this.facts = data;
      }
    },

    async handleDelete(row) {
      const data = await deleteFact(row.id);
      if (data) {
        ElMessage({
          type: "success",
          message: data.message,
        });
        this.getFacts();
      } else {
        ElMessage({
          type: "error",
          message: "delete fact failed",
        });
      }
    },

    create() {
      ElMessageBox.prompt("Please input your fact", "Add new fact", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      })
        .then(async ({ value }) => {
          const data = await addNewFact(value);

          if (data) {
            ElMessage({
              type: "success",
              message: data.message,
            });
            this.getFacts();
          } else {
            ElMessage({
              type: "error",
              message: "create new fact failed",
            });
          }
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Input canceled",
          });
        });
    },

    edit(row) {
      ElMessageBox.prompt("Please input your fact", "Edit fact", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        inputValue: row.text,
      })
        .then(async ({ value }) => {
          const data = await editFact(row.id, value);

          if (data) {
            ElMessage({
              type: "success",
              message: data.message,
            });
            this.getFacts();
          } else {
            ElMessage({
              type: "error",
              message: "edit fact failed",
            });
          }
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Input canceled",
          });
        });
    },
  },

  mounted() {
    this.getFacts();
  },
};
</script>
