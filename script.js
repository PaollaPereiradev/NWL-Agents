const apiKeyInput = document.getElementById('apiKey')
const  gameSelect = document.getElementById('gameSelect')
const questionInput =document.getElementById('questionInput')
const askButton = document.getElementById('askbButton')
const aiResponse= document.getElementById('aiResponse')
const form = document.getElementById('forme')

const enviarformulario = () => {
  Event.preventDefault()

}
form.addEventListener('submit', enviarformulario)
