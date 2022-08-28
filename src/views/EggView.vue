<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2
      v-for="(t, i) in todos"
      :key="i"
    >
      TODO: {{ t }}
    </h2>

  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [
        'Dropdown component',
        'ProgessBar component',
        'New Entry in Timeline component',
        'Rules page',
        'Team page for an "example"',
        'Show only teams "events"',
        'Easter eggs page',
        'Add firestore',
        'Add live updates',
        'Firebase Auth',
        'Add cloud functions'
      ]
    };
  }
}
</script>

<style scoped>
h1 {
  font-size: 50px;
  font-family: pricedown;
}

h1,
h2 {
  color: var(--v-cYellow-base);
}

h2 {
  margin-left: 5em;
  margin-right: 5em;
  font-size: 25px;
  text-align: left;
  background-color: darkgray;
}
</style>