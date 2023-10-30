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
const obj = { a: 5, b: 3 }

const { a: b, b: a } = obj

console.log(a, b)

// 4
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
}

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES

console.log(maximaHoy, maximaManana)
