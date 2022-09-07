<template>
  <v-col :cols="getColSize(field?.size)">
    <p>{{ field.label }}</p>

    <component
      v-if="!(isProgressField && !readOnly) && !isCheckbox"
      :is="field.type"
      :value="internalValue"
      :placeholder="field.placeholder"
      outlined
      dense
      hide-details
      :disabled="readOnly"
      :class="getColorClass()"
      v-bind="getComponentProperties()"
      @input="e => internalValue = e"
    >
      <strong
        v-if="isProgressField"
        class="white--text"
      >
        {{ internalValue ? Math.ceil(internalValue) : 0 }}%
      </strong>
      <template
        v-if="isRatingField"
        v-slot:item="props"
      >
        <v-icon
          :color="props.isFilled ? 'cBlue' : 'grey lighten-1'"
          large
          @click="props.click"
        >
          {{ props.isFilled ? 'mdi-star-circle' : 'mdi-star-circle-outline' }}
        </v-icon>
      </template>
    </component>
    <!--
      Second v-progress-linear to handle
      weird behaviours when v-model is set
    -->
    <v-progress-linear
      v-if="isProgressField && !readOnly"
      v-model="internalValue"
      height="25"
    >
      <strong
        v-if="isProgressField"
        class="white--text"
      >
        {{ internalValue ? Math.ceil(internalValue) : 0 }}%
      </strong>
    </v-progress-linear>

    <v-checkbox
      v-if="isCheckbox"
      dense
      :disabled="readOnly"
      v-model="internalValue"
    />
  </v-col>
</template>

<script>

import {
  VTextarea,
  VCombobox,
  VProgressLinear,
  VRating,
  VCheckbox,
} from "vuetify/lib";

export default {
  components: {},
  props: {
    value: {},
    field: {
      type: Object,
      default: undefined
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      internalValue: undefined,
    }
  },
  watch: {
    value: {
      handler (nv, ov) {
        if (nv !== ov) this.internalValue = nv
      },
      deep: true,
      immediate: true,
    },
    internalValue: {
      handler (nv, ov) {
        if (nv !== ov) this.$emit('input', nv)
      },
      deep: true,
      immediate: true,
    }
  },
  computed: {
    isRatingField () {
      return VRating === this.field.type
    },
    isProgressField () {
      return VProgressLinear === this.field.type
    },
    isCheckbox () {
      return VCheckbox === this.field.type
    },
  },
  methods: {
    getComponentProperties () {
      switch (this.field?.type) {
        case VCombobox: return { items: this.field.items }
        case VProgressLinear: return { height: "25" }
        case VTextarea: return { rows: 2 }
        case VRating: return { readonly: this.readOnly }
      }
    },
    getColorClass () {
      if ([VProgressLinear, VCheckbox, VRating].includes(this.field?.type)) {
        return ''
      }

      return 'white'
    },
    getColSize (size) {

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          break;
        case 'md':
          if (size === "s") return 6
          else break;
        case 'lg':
        case 'xl':
          if (size === "s") return 4
          else if (size === "m") return 6
      }

      return 12
    }
  }
}
</script>


<style lang="scss" scoped>
.col {
  padding-top: 1em;
  padding-bottom: 0;

  p {
    margin: 0;
  }
}
</style>
