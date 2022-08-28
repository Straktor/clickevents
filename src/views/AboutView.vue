<template>
  <div class="egg">
    <h1>This is a list of easter eggs ideas</h1>

    <div>
      <div
        class="egg__item"
        v-for="(e, i) in eggs"
        :key="i"
      >
        <h2>
          -{{ e.name }}
        </h2>
        <p>{{ e.idea }} - <span>tags: {{ e.tags }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      eggs: [
        {
          name: 'In plain sight',
          idea: 'component with display none',
          tags: 'css'
        },
        {
          name: 'The explorer',
          idea: 'Background image has the flag on it (on a different theme)',
          tags: 'exploring'
        },
        {
          name: 'Useless loading',
          idea: 'Force the download of a useless asset which contains the flag',
          tags: 'network'
        },
        {
          name: 'The obvious one',
          idea: 'Flag in the source file easly found by searching key works like "easter egg" or "flag" or "secrect"',
          tags: 'javascript'
        },
        {
          name: 'Encoded',
          idea: 'Flag encoded in the source code in Base64',
          tags: 'javascript'
        },
        {
          name: 'Hacker!',
          idea: 'The post call to "verify flag" will a param that can be modify (from false to true) if modify this flag will be maked as captured',
          tags: 'network'
        },
        {
          name: 'Thanks for reading',
          idea: 'flag in the about page',
          tags: 'exploring'
        },
        {
          name: 'On the wire',
          idea: 'One response from the cloud function should have "too much" info which will contain the flag',
          tags: 'network'
        },
        {
          name: 'Smart Planning',
          idea: 'Hidden on the miro board',
          tags: 'exploring'
        },
        {
          name: "The PO's favorite",
          idea: 'Hidden in a task description',
          tags: 'exploring'
        },
        {
          name: "Smart People",
          idea: 'Useless questions that can be searched ex: 10001th prime number or Who is Bell CEO?',
          tags: 'random'
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.egg {
  div {
    border-radius: 1em;
    background-color: var(--v-cGreen-base);
    color: white;

    margin-left: 3em;
    margin-right: 3em;
    padding: 0.5em;
    text-align: left;

    .egg__item {
      span {
        color: var(--v-cYellow-base);
      }
    }
  }
}

h1 {
  font-size: 50px;
  font-family: pricedown;
}

h1,
h2 {
  color: var(--v-cYellow-base);
}

h2 {
  font-size: 15px;
}
</style>