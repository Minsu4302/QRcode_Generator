let imgBx = document.getElementById("imgBx");
let qrImg = document.getElementById("qrImg");
let qrInput = document.getElementById("qrInput");


function generateQR() {
    if(qrInput.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;
        qrImg.classList.add("show-img");
    }else{
        qrInput.classList.add("error");
        setTimeout(()=>{
            qrInput.classList.remove("error");
    }, 1000);
    }
}