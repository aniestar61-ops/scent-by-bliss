
const orderButtons = document.querySelectorAll(".order-button");

orderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const phoneNumber = "2347071160869";
        const product = button.dataset.product;
        const price = button.dataset.price;

        const message =
            "Hello Scent by Bliss! I want to order " +
            product + " for ₦" +
            Number(price).toLocaleString("en-NG") + ".";

        const whatsappURL =
            "https://wa.me/" + phoneNumber +
            "?text=" + encodeURIComponent(message);

        window.location.href = whatsappURL;
    });
});
