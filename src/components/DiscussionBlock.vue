<template>
  <div class="container" v-if="comment">
    <div class="quote">
      <h3>Quote: {{ quote }}</h3>
    </div>
      <div class="comment">
        <p>{{ comment.username }}</p>
        <p>{{ comment.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: () => ({ username: '', text: '' })
    },
    quote: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.quote {
  border: 1px solid teal;
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.comment {
  border: 1px solid teal;
  padding: 10px;
  border-radius: 10px;
  max-width: 30%;
}

.comment p {
  margin: 0;
}

.comment p:first-child {
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 10px;
  color: teal;
  font-size: 20px;
}

.comment p:last-child {
  font-size: 18px;
}

.container {
  width: auto;
  height: 80%;
  background-color: #d4e8d8;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-left: 20px;
  padding: 50px;
  margin: 10px;
}

</style>
