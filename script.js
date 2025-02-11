$(document).ready(function () {
    $("#generate").click(function () {
        let name = $("#name").val();
        let message = $("#message").val();
        
        if (name.trim() === "" || message.trim() === "") {
            alert("Please enter both name and message.");
            return;
        }

        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        let image = new Image();
        image.src = "template.jpg"; // Make sure to add your image file
        
        image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);

            ctx.font = "30px Cairo";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";

            // Name placement
            ctx.fillText(name, canvas.width / 2, canvas.height * 0.83);

            // Message placement
            ctx.font = "24px Cairo";
            ctx.fillText(message, canvas.width / 2, canvas.height * 0.88);

            // Enable download button
            let imageData = canvas.toDataURL("image/png");
            $("#download").attr("href", imageData);
        };
    });
});