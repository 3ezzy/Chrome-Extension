
// function Savelead(){
//     console.log("Save Lead");
// }

let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))

if (leadsFromLocalStorage) {
    myleads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function () {
    myleads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myleads", JSON.stringify(myleads))
    renderLeads()
    
})
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myleads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myleads[i]}'>
                    ${myleads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}


