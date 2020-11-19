function showID(id) {
    // alert(id);
    sessionStorage.setItem("ID", id);
    window.location.href = "../../Science Page/lesson-sci.html";
}

$(function() {
    $(".meter > span").each(function() {
        $(this)
            .data("origWidth", $(this).width())
            .width(0)
            .animate({
                width: $(this).data("origWidth")
            }, 1200);
    });
});