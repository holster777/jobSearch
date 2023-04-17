const { computed, reactive, toRef } = require('vue')

const person = reactive({
  firstName: 'Boris',
  lastName: 'Lord'
})

const title = computed(() => `${person.firstName} ${person.lastName} the Great`)

console.log(title.value)
console.log(person)

person.firstName = 'Hollie'

console.log(title.value)
console.log(person)
