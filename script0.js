function showMessage() {
    alert(
        "Hello! Thanks for visiting my Greenfolio!"
    );
}
$(document).ready(function () {
    $("main").hide().fadeIn(700);
    $(".nature-card").hover(
        function () {
            $(this).css(
                "transform",
                "translateY(-6px)"
            );
        },
        function () {
            $(this).css(
                "transform",
                "translateY(0)"
            );
        }
    );
    $(".btn").click(function () {
        console.log(
            "Greenfolio navigation clicked"
        );
    });
    console.log(
        "Welcome to Greenfolio!"
    );
});