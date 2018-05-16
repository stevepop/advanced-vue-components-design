

<script>
import PrimaryButton from "./PrimaryButton"
import ToggleInput from "./ToggleInput"
export default {

  props: [],
  data () {
    return {
        toggled: true
    }
  },
  render(createElement) {
    return createElement(ToggleInput, {
        props: {
            value: this.toggled
        },
        on: {
            input: (newValue) => this.toggled = newValue
        }
    })
  }
}
</script>

