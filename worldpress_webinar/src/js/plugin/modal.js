function _createModal() {
   const modal = document.createElement('div')
   modal.classList.add('modal')
   modal.insertAdjacentHTML('afterbegin', `
  <div class="modal_overlay">
      <div class="modal_window">
         <div class="modal_header">
            <div class="modal_title">Регистрация</div>
            <div class="modal_close" data-close = 'closed'>&times;</div>
         </div>
         <form action="#">
            <p>Имя:</p><input type="text" placeholder="Ваше имя:">
            <p>e-mail:</p><input type="e-mail" placeholder="Ваш E-mail адресс:">
            <p>Телефон:</p><input type="tel" placeholder="Ваш номер телефона:" value="+380">
            <button class="modal_btn">Зарегистрироваться</button>
         </form>
      </div>
</div>`)

   document.body.appendChild(modal)
   return modal
}


$.modal = function () {

   const ANIMATION_SPEED = 1000
   const $modal = _createModal()
   let closing = false



   const modal = {
      open() {
         !closing && $modal.classList.add('open')
      },
      close() {
         closing = true
         $modal.classList.remove('open')
         $modal.classList.add('hide')
         setTimeout(() => {
            $modal.classList.remove('hide')
            closing = false
            console.log(ANIMATION_SPEED)
         }, ANIMATION_SPEED)
      }
   }

   return modal
}