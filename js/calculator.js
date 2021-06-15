const values = []
const modes = ['plus', 'minus', 'multiply', 'divide', 'point', 'equal']
const mode = []

const display = document.getElementById('display')

const num1 = document.getElementById('num1').addEventListener('click', () => {
  display.innerText += '1'
})
const num2 = document.getElementById('num2').addEventListener('click', () => {
  display.innerText += '2'
})
const num3 = document.getElementById('num3').addEventListener('click', () => {
  display.innerText += '3'
})
const num4 = document.getElementById('num4').addEventListener('click', () => {
  display.innerText += '4'
})
const num5 = document.getElementById('num5').addEventListener('click', () => {
  display.innerText += '5'
})
const num6 = document.getElementById('num6').addEventListener('click', () => {
  display.innerText += '6'
})
const num7 = document.getElementById('num7').addEventListener('click', () => {
  display.innerText += '7'
})
const num8 = document.getElementById('num8').addEventListener('click', () => {
  display.innerText += '8'
})
const num9 = document.getElementById('num9').addEventListener('click', () => {
  display.innerText += '9'
})
const num0 = document.getElementById('num0').addEventListener('click', () => {
  display.innerText += '0'
})

const plus = document.getElementById('plus').addEventListener('click', () => {
  operation(modes[0])
})

const minus = document.getElementById('minus').addEventListener('click', () => {
  operation(modes[1])
})

const multiply = document
  .getElementById('multiply')
  .addEventListener('click', () => {
    operation(modes[2])
  })

const divide = document
  .getElementById('divide')
  .addEventListener('click', () => {
    operation(modes[3])
  })

const equals = document
  .getElementById('equals')
  .addEventListener('click', () => {
    const value = parseFloat(display.innerText)
    values.push(value)
    console.log(values)

    mode.forEach((item) => {
      if (item === 'plus') display.innerText = values[0] + values[1]
      if (item === 'minus') display.innerText = values[0] - values[1]
      if (item === 'multiply') display.innerText = values[0] * values[1]
      if (item === 'divide') display.innerText = values[0] / values[1]
    })

    mode.splice(0, mode.length)
    values.splice(0, values.length)
  })

const point = document.getElementById('point').addEventListener('click', () => {
  display.innerText += '.'
})

const del = document.getElementById('delete').addEventListener('click', () => {
  values.splice(0, values.length)
  display.innerText = ''
})

const reset = document.getElementById('reset').addEventListener('click', () => {
  values.splice(0, values.length)
  display.innerText = ''
})

const operation = (flag) => {
  mode.push(flag)
  const value = parseFloat(display.innerText)
  display.innerText = ''
  values.push(value)
  console.log(values)
}
