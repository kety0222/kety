document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formPesan");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const nama = document.getElementById("nama").value;

            document.getElementById("hasil").innerHTML =
                "Terima kasih, " + nama +
                ". Pesan Anda berhasil diterima. 🌿";

            form.reset();
        });
    }

});
