modal = $.modal()

// document.querySelector('.promo_btn').addEventListener('click', event => {
//    modal.open()
// })








document.addEventListener('click', event => {

   const reg_btn = event.target.dataset.registration
   const close_btn = event.target.dataset.close

   if (reg_btn === 'reg') {
      modal.open()
      console.log('lorem')
   }
   if (close_btn === 'closed') {
      modal.close()
   }

})