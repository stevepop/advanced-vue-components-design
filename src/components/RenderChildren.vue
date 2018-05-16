<script>
import data from "./contacts.json"

export default {
  data() {
    return {
      contacts: []
    }
  },
  created() {
    this.contacts = data
  },
  render(createElement) {
    return createElement("div", {}, [
      createElement("h1", {}, "Your Contacts"),
      createElement(
        "ul",
        {},
        this.contacts.map(contact => {
          return createElement(
            "li",
            {},
            `${contact.name.first} ${contact.name.last}`
          )
        })
      )
    ])
  }
}
</script>

<style>
li {
  text-align: left;
}
</style>

