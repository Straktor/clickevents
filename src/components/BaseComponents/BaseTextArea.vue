<script>
import { VTextarea } from 'vuetify/lib';

export default {
  name: 'BaseTextArea',
  extends: VTextarea,
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
    },
    rows: {
      type: String,
      default: '2'
    }
  },
}
</script>
