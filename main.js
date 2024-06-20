function submit(){
    let enviar = true
    let modal = document.getElementById('modal')
    let box = document.getElementById('box')

    let firstName = document.getElementById('txtFirstName')
    let lastName = document.getElementById('txtLastName')
    let avisoFirstName = document.getElementById('erroFirstName')
    let avisoLastName = document.getElementById('erroLastName')

    if(firstName.value == 0){
        firstName.style.borderColor = 'red'
        avisoFirstName.style.display = 'block'
        enviar = false
    }else{
        firstName.style.borderColor = 'grey'
        avisoFirstName.style.display = 'none'
    }

    if(lastName.value == 0){
        lastName.style.borderColor = 'red'
        avisoLastName.style.display = 'block'
        enviar = false
    }else{
        lastName.style.borderColor = 'grey'
        avisoLastName.style.display = 'none'
    }
    
    let email = document.getElementById('txtEmail')
    let avisoEmail = document.getElementById('erroEmail')

    if(email.value == 0){
        email.style.borderColor = 'red'
        avisoEmail.style.display = 'block'
        enviar = false
    }else{
        email.style.borderColor = 'grey'
        avisoEmail.style.display = 'none'
    }

    let message = document.getElementById('txtMessage')
    let avisoMessage = document.getElementById('erroMessage')

    if(message.value == 0){
        message.style.borderColor = 'red'
        avisoMessage.style.display = 'block'
        enviar = false
    }else{
        message.style.borderColor = 'grey'
        avisoMessage.style.display = 'none'
    }

    let concentCheckbox = document.getElementById('checkboxLinha05')
    let avisoConcent = document.getElementById('erroCheckboxLinha05')

    if(!concentCheckbox.checked){
        avisoConcent.style.display = 'block'
        enviar = false
    }else{
        avisoConcent.style.display = 'none'
    }


    if(enviar){
        modal.style.display = 'block'
        box.style.paddingTop = '0px'
        firstName.value = ''
        lastName.value = ''
        email.value = ''
        message.value = ''
        concentCheckbox.checked = false
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    setTimeout(fecharModal, 4000)

}

function fecharModal(){
    let modal = document.getElementById('modal')
    let box = document.getElementById('box')
    modal.style.display = 'none'
    box.style.paddingTop = '50px'
}

function querryType01(){
    let input01 = document.getElementById('input01')
    let input02 = document.getElementById('input02')
    let check01 = document.getElementById('checkbox01Linha03')
    let check02 = document.getElementById('checkbox02Linha03')

    check01.style.display = 'block'
    check02.style.display = 'none'

    input01.style.borderColor = 'rgb(12, 125, 105)'
    input01.style.backgroundColor = 'RGB(224, 241, 231)'
    input02.style.borderColor = 'grey'
    input02.style.backgroundColor = 'white'
   
}

function querryType02(){
    let input01 = document.getElementById('input01')
    let input02 = document.getElementById('input02')
    let check01 = document.getElementById('checkbox01Linha03')
    let check02 = document.getElementById('checkbox02Linha03')

    check01.style.display = 'none'
    check02.style.display = 'block'

    input01.style.borderColor = 'grey'
    input01.style.backgroundColor = 'white'
    input02.style.borderColor = 'rgb(12, 125, 105)'
    input02.style.backgroundColor = 'RGB(224, 241, 231)'
}
