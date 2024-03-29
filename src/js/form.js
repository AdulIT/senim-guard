let isMobile = window.matchMedia("(max-width: 575px)").matches

const form = document.querySelector('.contact__form'),
      submitBtn = document.querySelector('.contact__footer_btn'),
      nameInput = isMobile ? form.querySelector('#nameMobile') : form.querySelector('#name'),
      phoneInput = isMobile ? form.querySelector('#telMobile') : form.querySelector('#tel'),
      emailInput = form.querySelector('#email'),
      messageInput = form.querySelector('#message'),
      textarea = form.querySelector('textarea');

const message = 'Ваша заявка принята! В ближайшее время с вами свяжется наш менеджер!'
const p = document.createElement('p');
p.innerHTML = message;

nameInput.setAttribute('required', '');
phoneInput.setAttribute('required', '');

form.addEventListener('submit', function(event)
{
    event.preventDefault()

    let body = `
        <p><b>Имя:</b> ${nameInput.value}</p>
        <p><b>Номер телефона:</b> ${phoneInput.value}</p>
        <p><b>Почта:</b> <a href="${emailInput.value}">${emailInput.value}</a></p>
        <p><b>Сообщение:</b> ${messageInput.value}</p>
    `

    Email.send({
        SecureToken : "7e61a108-ce23-4be5-b10c-599503eabc80",
        To : 'office@senimG.kz',
        From : "office@senimG.kz",
        Subject : "Новая заявка",
        Body : body,
    })
    textarea.insertAdjacentElement('afterend', p)
    resetInputs()
    setTimeout(() =>
    {
        p.remove()
    }, 10000)
});

function resetInputs()
{
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}