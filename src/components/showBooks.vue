<template>
    <div>
       <h1>Books</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, i) in books" :key="i">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.id }}</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
<script>
// import CreateBookRecord from "./CreateBookRecord.vue";
export default {
  data: function () {
    return {
      showComponent: false,
      books: [
        {
          id: 1,
          title: "A",
          author: "Ahmed",
        },
        {
          id: 2,
          title: "B",
          author: "Ali",
        },
        {
          id: 3,
          title: "C",
          author: "Oday",
        },
        {
          id: 4,
          title: "D",
          author: "Mohammed",
        },
      ],
    };
  },
//   components: {
//     CreateBookRecord,
//   },
  methods: {
    createBookRecord() {
      // this.$modal.show('CreatBookRecord')
    },
  },
  name: "ListBook",
};

</script>
<style scoped>
table {
    width: 50%;
    margin: 5% 10% 0 10%;
}</style>