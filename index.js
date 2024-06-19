
const QRAPI = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function createQr() {
    let textval = document.getElementById("text_Url").value;
    let QRimg = document.getElementById("qrimg");
    let uRltext = document.getElementById("urltext");
    let eRRor = document.getElementById("error");

    if (textval.length == 0) {

        eRRor.textContent = " Fill the feild ";
        eRRor.classList.add("p-2");

    } else {

        let result = QRAPI + textval;
        let QR = QRimg.src = result;

        document.getElementById("text_Url").value = "";

        uRltext.textContent = textval;

        let downLoadbtn = document.getElementById("downloadbtn");
        downLoadbtn.classList.add("dbtn1");
        downLoadbtn.classList.remove("dbtn");
        eRRor.textContent = "";
        eRRor.classList.remove("p-2");

    }
}
