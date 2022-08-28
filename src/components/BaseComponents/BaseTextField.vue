<script>
import { VTextField } from 'vuetify/lib';

export default {
  name: 'BaseTextField',
  extends: VTextField,
  props: {
    outlined: {
      type: Boolean,
      default: true
    },
    dense: {
      type: Boolean,
      default: true
    },
    hideDetails: {
      type: Boolean,
      default: true
    }
  },
}
</script>
