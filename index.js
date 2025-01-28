
// function Savelead(){
//     console.log("Save Lead");
// }

let myleads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myleads.push(inputEl.value)
    console.log(myleads)

    
})


for (let i = 0; i < myleads.length; i++) {
    ulEl.innerHTML += "<li>" + myleads[i] + "</li>"
}

