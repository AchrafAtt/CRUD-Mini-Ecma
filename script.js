const sumRest = (... num)=>{
  console.log(num)
}

sumRest(1,2,3,4,5,6)


// template literals 

let nom = 'achraf'
let prenom ='attouaki'

//document.write('Bonjour '+ nom +' '+prenom )


//document.write(`Bonjour ${nom} ${prenom} `)

const countrie =['maroc','italia','egypte']

//console.log(...countrie)

//function array ES6 
  let str ="Maroc,Egypt,Italia"

  const contries = str.split(',')
  //console.log(contries)
 // console.log(Array.from(str)) //['M', 'a', 'r', 'o', ..

const key = contries.keys() 
//foreach  in php 
for(let k of key){
  console.log(k)
}

/*console.log(contries.find(function(val){
  return val.startsWith('M')
}))*/

    //Math Function


function exec(){
  let x = document.querySelector('#val').value
  //let reslt = Math.trunc(x)// number without ,

  //Math.sign neg => -1 positiv => 1 0=> 0
  //let reslt = Math.sign(x)

  //Math.cbrt => racin carre 
  let reslt = Math.cbrt(x)
  document.querySelector('#val').value = ''
  document.querySelector('#reslt').value = reslt
}

    //Set collection eliminer les redoublants
      //has , size , add , delete , clear 
const color = ['red','yellow','blue','red']
console.log(color)

let collection = new Set() //constructor 

collection.add('red')
collection.add('yellow')
collection.add('blue')
collection.add('red')
console.log(collection)

console.log(collection.has('red'))

    //Map => like  Set or Array 




    // api fetch

    let product = fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json.price))


    //await & async 

    const prod = async function (id){
      return await fetch('https://fakestoreapi.com/products/1'+ id).then((res)=>res.json())
      .then((product)=>product)
    }

    console.log(prod(1).then((value)=>console.log(value)))