let doc = []

const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function addDoc(arg1) {
  for ( const data of arg1){
    doc.push(data)
  }
}
addDoc(datas)
console.log(doc)