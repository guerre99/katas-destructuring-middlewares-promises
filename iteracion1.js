// 1

const empleados = [
  { name: 'Luis', email: 'Luis@gmail.com' },
  { name: 'Ana', email: 'Ana@gmail.com' },
  { name: 'Andrea', email: 'Andrea@gmail.com' },
]

const [, Ana] = empleados

console.log(Ana)

// 2

const [{ email }] = empleados

console.log(email)

// 3
let a = 5
let b = 3

;[b, a] = [a, b]

// 4
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
}

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES

console.log(maximaHoy, maximaManana)
