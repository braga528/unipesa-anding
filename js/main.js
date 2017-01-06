;(function(){

  let sticky = false
  let currentPosition = 0

  const imgCounter = $("[data-name='img-counter']").attr("content")
  const email = "braga528@gmail.com"

  $("#contact_form").on("submit", function(ev){
    ev.preventDefault()

    sendForm($(this))

    return false
  })

  $("#sticky-navigation").removeClass("hidden")
  $("#sticky-navigation").slideUp(0)

  setInterval(()=>{

    if(currentPosition < imgCounter){
      currentPosition++
    }else{
      currentPosition = 0 
    }
    
    $("#gallery .inner").css({
      left: "-"+currentPosition*100+"%"
    })

  },4000)

  
  $(window).scroll(()=>{
    const inBottom = isInBottom()


    if(inBottom && !sticky){
      //mostrar la navegación
      sticky = true
      stickNavigation()
    }
    if(!inBottom && sticky){
      //ocultar la navegación
      sticky = false
      unStickNavigation()
    }
  })

  function stickNavigation(){
    $("#description").addClass("fixed").removeClass("absolute")
    $("#navegation").slideUp("fast")
    $("#sticky-navigation").slideDown("fast")
  }

  function unStickNavigation(){
    $("#description").removeClass("fixed").addClass("absolute")
    $("#navegation").slideDown("fast")
    $("#sticky-navigation").slideUp("fast")
  }

  function sendForm($form) {
    console.log($form.fomrObject())
      $.ajax({
      url: $form.attr("action"),
      method: "POST",
      data: form.fomrObject(),
      dataType: "json"
    })
  }

  function isInBottom(){
    const $description = $("#description")
    const descriptionHeight = $description.height()

    return  $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
  }

})()