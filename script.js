document.addEventListener("DOMContentLoaded", function () {
    //klik button persegi dan persegi panjang
    const btnPersegi = document.getElementById("btn-persegi");
    const btnPersegiPanjang = document.getElementById("btn-persegipanjang");
    const sectionPersegi = document.querySelector(".persegi");
    const sectionPersegiPanjang = document.querySelector(".persegi-panjang");

    // Sembunyikan semua section di awal
    sectionPersegi.style.display = "none";
    sectionPersegiPanjang.style.display = "none";

    btnPersegi.addEventListener("click", function () {
        sectionPersegi.style.display = "block";
        sectionPersegiPanjang.style.display = "none";
    });

    btnPersegiPanjang.addEventListener("click", function () {
        sectionPersegi.style.display = "none";
        sectionPersegiPanjang.style.display = "block";
    });

    /*input angka*/
    inputFields.forEach(input => {
        input.addEventListener("input", function () {
            if (this.value === "" || isNaN(this.value) || this.value <= 0) {
                this.setCustomValidity("Harap masukkan angka lebih dari 0");
            } else {
                this.setCustomValidity("");
            }
        });
    });

    
});
