import Student from "./student.js";


const displayEtudiants = async function () {
 return Student.allEtudiants()
    .then(function (response) 
      {
       return response.map((etudiant)=> {
          const {id,name,date,note}= etudiant
          
          const etud = new Student(name,date,note)


          return `
            <tr>
              <td>${id}</td>
              <td>${etud.name}</td>
              <td>${etud.getAge()}</td>
              <td> <span class="badge rounded-pill ${etud.isAdmit()? 'text-bg-success' : 'text-bg-danger'} ">${etud.note}/ ${Student.MAX_NOTE}</span></td>
              <td><button class='btn btn-danger btn-sm' class='delete' >Supprimer</button></td>
              
            </tr>
          `
        })
      });
    
  }

const addEtudiants = (event)=>{
    event.preventDefault()
    
    const [name,date,note]=document.querySelectorAll('#name,#date,#note')
    const etudiant = new Student(name.value,date.value,note.value)
    etudiant.addEtudiant()
}

const deleteButton = (event,id)=>
  event.preventDefault()
  console.log(id)

const rederEtudiant = function(){
  const body = document.querySelector('.stdent-list')
  displayEtudiants().then(data=> body.innerHTML= data.join(' '))
}




const refresh = ()=>{
  const addButton = document.querySelector('#add')
  const deleteButton = document.querySelector('.delete')
  const refButton = document.querySelector('#refresh')
  refButton.addEventListener('click',()=>{
    rederEtudiant()
  })
  addButton.addEventListener('click',(event)=>{
    addEtudiants(event)
  })
}
  deleteButton.addEventListener('click',(event)=>{
    deleteButton(event)
  })



refresh()
rederEtudiant()
