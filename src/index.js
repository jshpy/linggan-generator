import "./style.scss"
import QrImg from "../assets/img/QR.jpg"

// 添加二维码
(()=>{
  const imgWarp = document.getElementById("wchat-qr")
  const img = document.createElement("img")
  img.src=QrImg
  imgWarp.style.visibility='hidden';
  imgWarp.appendChild(img)
  const wchatIcon = document.getElementById("wchat")
  wchatIcon.onmouseover = function(e) {
    imgWarp.style.visibility='visible';
  }
  wchatIcon.onmouseleave = function(e) {
    imgWarp.style.visibility='hidden';
  }
})()
