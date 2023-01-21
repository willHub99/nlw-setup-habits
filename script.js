const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  let day = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(day)
  if (!dayExists) {
    nlwSetup.addDay(day)
    alert("Dia cadastrado com sucesso")
  } else {
    alert("Dia já cadastrado")
  }
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

