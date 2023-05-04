const inputText = document.getElementById('userInput');
const qrimage = document.getElementById('qrImage');

var NewImage = new QRCode(qrimage,{
    width : 200,
    height : 200
});

const generateCode=()=>{
    const data = inputText.value;
    // alert(data);
    NewImage.makeCode(data);
}
