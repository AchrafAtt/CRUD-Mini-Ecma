//DB IMPORT 

import { ENDPOINT } from "./constants.js"


export default class Student {

  static MAX_NOTE = 100
  constructor(name,date,note){
    this.name =name
    this.date =date
    this.note =note
  }

  getAge = ()=>(new Date()).getFullYear() - new Date(this.date).getFullYear()

  isAdmit =() => this.note >= 50



  static allEtudiants = async function() {
    const response  = await fetch(ENDPOINT)
    const students = await response.json()

    return students
}

//http://localhost:3000/students / (POST OLA PUT) SUPPRIMER
  addEtudiant = async function(){
    const reponse = await fetch(ENDPOINT,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name:this.name,
        date:this.date,
        note:this.note
      })
    })
    console.log(reponse)
    return reponse
  }

//http://localhost:3000/students / {id} (DELETE) SUPPRIMER
  static deleteStudent = async function(id){
    const reponse = await fetch(ENDPOINT+'/'+id,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
      
    })


  }

}

