const objA = {
  name: 'Obj A',

  print() {
    console.log(`manually bind this then this is ${this.name}`)
  }
}

const objB = {
  name: 'Obj B'
}

objA.print()
objA.print.call(objB)