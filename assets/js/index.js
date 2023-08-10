$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
})
    $("ul").on("click","span",function (e) {
    $(this).parent().fadeOut(500,function () {
     $(this).remove();  
    });
    e.stopPropagation();
})
$("input[type='text']").keypress(function (e) {
    if (e.which===13) {
        var todoText=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa-regular fa-trash-can'></i><span>" + todoText + "</li>")
        
    }
    
})   
$(".fa").click( function () {
        $("input[type='text']").fadeToggle()
    
}) 
