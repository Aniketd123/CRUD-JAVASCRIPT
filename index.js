// let globalTaskData = [];
// taskContents = document.getElementById("taskContentsrow");

// const addCard = () => {
//     const newTaskDetails = {
//         id: `${Date.now()}`,
//         url: document.getElementById("imageURL").value,
//         title: document.getElementById("taskTitle").value,
//         type: document.getElementById("taskType").value,
//         description: document.getElementById("taskDescription").value
//     };

//     taskContents.insertAdjacentHTML('beforeend', generateTaskCard(newTaskDetails));

//     globalTaskData.push(newTaskDetails);
//     saveToLocalStorage();
// }

// const generateTaskCard = ({id, url, title, type, description}) => {
//     return (`<div class="col-md-6 col-lg-4 mt-3 " id=${id} key=${id}>
//         <div class="card" >
//             <div class="card-header">
//                 <div class="d-flex justify-content-end">
//                     <button type="button" class="btn btn-outline-info" name=${id} onclick="editTask(this)">
//                         <i class="fas fa-pencil-alt" name=${id} onclick="editTask(this)"></i>
//                     </button>
//                     <button type="button" class="btn btn-outline-danger" name=${id} onclick="deleteTask(this)">
//                         <i class="far fa-trash-alt" name=${id} onclick="deleteTask(this)"></i>
//                     </button>
//                 </div>
//             </div>
//             <img src=${url} class="card-img-top" alt="image"/>
//             <div class="card-body">
//                 <h5 class="card-title">${title}</h5>
//                 <p class="card-text">${description}</p>
//                 <span class="badge bg-primary">${type}</span>
//             </div>
//             <div class="card-footer">
//                 <button class="btn btn-outline-primary float-end">OPEN TASK</button>
//             </div>
//         </div>
//     </div>`)
// }

// const saveToLocalStorage = () => {
//     localStorage.setItem("nikhiltasks", JSON.stringify({nikhil: globalTaskData}));
// }

// const reloadTaskCard = () => {
//     const localStorageCopy = JSON.parse(localStorage.getItem("nikhiltasks"));
//     console.log(localStorageCopy);
//     if(localStorageCopy) {
//         globalTaskData = localStorageCopy["nikhil"];
//     }
//     console.log(globalTaskData)
//     globalTaskData.map((cardData) => {
//         taskContents.insertAdjacentHTML('beforeend', generateTaskCard(cardData));
//     })
// }

// const deleteTask = (e) => {
//     const targetID = e.getAttribute("name");
//     globalTaskData = globalTaskData.filter((cardData) => cardData.id!==targetID);
//     saveToLocalStorage();
//     window.location.reload();
// }

// const editTask = (e) => {
//     console.log(e)
//     console.log(e.parentNode)
//     console.log(e.parentNode.parentNode.parentNode.childNodes)
//     console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1])
//     console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3])
//     console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5])

//     e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].setAttribute("contenteditable", "true")
//     e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].setAttribute("contenteditable", "true")
//     e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5].setAttribute("contenteditable", "true")

//     console.log(e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1])
//     e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].style.setProperty("border", "1px solid red")
//     e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].style.setProperty("background", "blue")
//     e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].setAttribute("onclick", "saveEditTask(this)")
//     e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].innerHTML = "SAVE CHANGES"
// }

// // const saveEditTask = (e) => {
// //     const targetID = e.getAttribute("name");
// //     console.log(e)
// //     // console.log(e.parentNode)
// //     // console.log(e.parentNode.parentNode.parentNode.childNodes)
// //     // console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1])
// //     // console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3])
// //     // console.log(e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5])

// //     // you will get all the updated fields
// //     // then update it inside the localStorage corresponding to that card id
// //     // after that saveToLocalStorage
// //     // window.location.reload();
// // }


// const saveEditTask = (e) => {
//     const targetID = e.getAttribute("name");
//     const newTaskDetails = {
//         id: e.parentNode.parentNode.parentNode.getAttribute("id"),
//         url: e.parentNode.parentNode.childNodes[3].getAttribute("name"),
//         title: e.parentNode.parentNode.childNodes[5].childNodes[1].innerHTML,
//         type: e.parentNode.parentNode.childNodes[5].childNodes[5].innerHTML,
//         description: e.parentNode.parentNode.childNodes[5].childNodes[3].innerHTML
//     }
//     const refid = e.parentNode.parentNode.parentNode.getAttribute("id")
//     console.log(refid)
//     objIndex = globalTaskData.findIndex((obj => obj.id == refid ));
//     console.log(objIndex)
//     globalTaskData[objIndex] = newTaskDetails
//     // globalTaskData.push(newTaskDetails);
//     saveToLocalStorage()
//     window.location.reload();
// }

// // var suppose = {id: "1631720624226", url: "egtrshs", title: "tshdj", type: "dyjdyj", description: "dyjydj"}
// // suppose.description = "my name is nikhil agarwal"
let globalTaskData=[];
const taskContents=document.getElementById('taskContents');
const addCard=()=>{
      const newTaskDetails={
          id:`${Date.now()}`,
          url:document.getElementById('imageURL').value,
          type:document.getElementById('type').value,
          task:document.getElementById('taskTitle').value
      };
     
      taskContents.insertAdjacentHTML("beforeend",generateTaskCard(newTaskDetails));
      globalTaskData.push(newTaskDetails);
       saveToLocalStorage();
      

}

const generateTaskCard=({id, url, type,task})=>{
    return(
        ` <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div style="background-color: rgb(127, 182, 255);" class="card">
            <div class="card-header ">
              <div class="d-flex justify-content-end">
                <button class="btn btn-outline-dark">
                    <i class="fas fa-pencil-alt"></i>
                </button>
               <button name=${id} onClick="deleteTask(this)" class="btn btn-outline-dark">
                <i name=${id} onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
               </button>

              </div>
            </div>
            <img src=${url} alt="">
          <div class="card-body">
            
            
         
            <h6 class="card-title">${type}</h6>
            <p class="card-text">${task}</p>

          </div>
        </div>
    </div>`
    );

 

};

const saveToLocalStorage=()=>{

    localStorage.setItem("aniketTasks",JSON.stringify({aniket:globalTaskData}));
}
const reloadTaskCard=()=>{
   const localStorageCopy=JSON.parse(localStorage.getItem("aniketTasks"));
   if(localStorageCopy)
   {
       globalTaskData=localStorageCopy["aniket"]
   }
   globalTaskData.map(cardData=>{
       taskContents.insertAdjacentHTML("beforeend",generateTaskCard(cardData));

   })
}



const deleteTask=(e)=>{
const targetID=e.getAttribute("name");
globalTaskData=globalTaskData.filter((cd)=>
    cd.id!==targetID);
    saveToLocalStorage();
window.location.reload();

};

