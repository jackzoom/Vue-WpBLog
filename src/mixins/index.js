import utils from '../utils/utils.js'
export default {
  methods: {
    pageTo(location) {
      window.location.href = utils.Trim(location);
    },
  }
}
