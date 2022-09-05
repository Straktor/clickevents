<template>
  <v-col class="newEntry pb-0">
    <div v-if="!plusBtnPressed">
      <v-btn
        class="ma-2"
        :color="color"
        fab
        @click="plusBtnPressed = true"
      >
        <v-icon
          large
          color="white"
        >
          mdi-plus-thick
        </v-icon>
      </v-btn>
    </div>
    <div v-else>
      <v-combobox
        v-model="selectedNewEntry"
        hide-details
        dense
        outlined
        clearable
        :items="cards"
        item-text="label"
        :disabled="submitLoading"
        :color="selectedNewEntry?.color"
        :background-color="selectedNewEntry?.color + ' lighten-5'"
        :prepend-inner-icon="selectedNewEntry ? selectedNewEntry.icon : 'mdi-plus'"
        class="newEntryCombobox"
        @click:clear="plusBtnPressed = false"
      >
        <template #item="{item}">
          <v-row
            :class="item.color"
            class="lighten-5 pa-2 ma-0"
            style="display: flex;"
          >
            <v-icon
              :color="item.color"
              class="mr-2"
            >
              {{ item.icon }}
            </v-icon>
            {{item.label}}
          </v-row>
        </template>
      </v-combobox>

      <v-row
        v-if="selectedNewEntry"
        class="newEntryFields py-2 pt-0 pb-3 mx-0 mt-2 mb-0"
        :style="`border-color: var(--v-${selectedNewEntry.color}-base);`"
      >
        <BaseField
          v-for="(f, i) in selectedNewEntry.fields"
          :key="i"
          v-model="localValues[f.label]"
          :field="f"
          :readOnly="false"
        />
      </v-row>
      <v-row
        v-if="selectedNewEntry"
        class="newEntryActions py-2 px-4 ma-0"
        :style="`border-color: var(--v-${selectedNewEntry.color}-base);`"
      >
        <v-spacer />
        <v-btn
          class="pa-4"
          plain
          :color="selectedNewEntry.color"
          :disabled="submitLoading"
          @click="close()"
        >
          Cancel
        </v-btn>
        <v-btn
          class="pa-4"
          outlined
          :color="selectedNewEntry.color"
          :loading="submitLoading"
          @click="submit()"
        >
          Submit
        </v-btn>
      </v-row>
    </div>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex'

import BaseField from '@/components/BaseField'

export default {
  components: { BaseField },
  props: {
    color: {
      type: String,
      default: 'cRed'
    },
    cards: {
      type: Array,
      default: () => { return [] }
    },
  },
  data: () => {
    return {
      plusBtnPressed: false,
      selectedNewEntry: undefined,
      localValues: {},
      submitLoading: false,
    }
  },
  watch: {},
  computed: {},
  mounted () { },
  methods: {
    ...mapActions(['newEvent']),
    close () {
      this.selectedNewEntry = undefined
      this.localValues = {}
      this.plusBtnPressed = false
    },
    submit () {
      let event = { type: this.selectedNewEntry?.label, values: this.localValues }

      // TODO: Handle error messages
      this.submitLoading = true
      this.newEvent(event)
        .then(() => {
          this.close()
        })
        .finally(() => {
          this.submitLoading = false
        })
    },
  }
}
</script>


<style lang="scss" scoped>
.newEntry {
  display: flex;
  justify-content: center;
  align-content: center;

  .newEntryFields,
  .newEntryActions {
    border-style: dashed;
    border-width: 2px;
    border-radius: 0.5em;
    background-color: #eee;
  }

  .newEntryFields {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .newEntryActions {
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

.v-list {
  padding-top: 0;
}

:deep(.v-list-item) {
  padding: 0;
}
</style>
