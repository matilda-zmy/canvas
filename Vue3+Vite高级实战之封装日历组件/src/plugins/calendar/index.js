import calendar from './calendar.vue'

function install(_vue) {
  _vue.component('my-calendar', calendar)
}
export default {
  install
}