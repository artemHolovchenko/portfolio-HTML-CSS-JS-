 $(document).ready(function(){
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


 $(function(){
    let filter = $("[data-filter]");

    filter.on('click', function(event){
      event.preventDefault;
       
       let cat = $(this).data
      })
  })




  



