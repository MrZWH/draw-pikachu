!function() {
  function writeCode (prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setInterval(() => {
      n+=1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n >= code.length) {
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 20)
  }
  
  let code = `
/*
* 首先需要准备皮卡丘的皮
*/
.preview{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: #ffe600;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
#container{
    height: 300px;
    width: 460px;
    position: relative;
}
/*
* 接下来画皮卡丘的鼻子
*/
#nose{
    border: 1px solid black;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
    top: 100px;
    border: 10px solid transparent;
    border-top-color: black;
    z-index: 2;
}
#nose::before{
    content:'';
    display: block;
    width: 20px;
    height: 5px;
    background: black;
    position: absolute;
    top: -15px;
    left: -10px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}
/*
* 接下来画皮卡丘的眼睛
*/
.eye{
    position: absolute;
    width: 60px;
    height: 60px;
    background: #2e2e2e;
    border: 2px solid black;
    border-radius: 30px;
    top: 65px;
}
/*
* 眼珠...
*/
.eye::before{
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 15px;
    top: 0px;
    position: absolute;
    left: 6px;
    border: 2px solid black;
}
/*
* 左眼...
*/
.eye-left{
    right: 50%;
    margin-right: 90px;
}
/*
* 右眼...
*/
.eye-right{
    left: 50%;
    margin-left: 90px;
}
/*
* 上嘴唇...
*/
.upperLip{
    position: absolute;
    top: 110px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 1;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.upperLip::before{
    content: '';
    display: block;
    width: 80px;
    height: 30px;
    border: 3px solid black;
    border-top: none;
    border-right: none;
    border-bottom-left-radius:50px 30px;  
    -webkit-transform: rotateZ(-20deg);  
        -ms-transform: rotate(-20deg);  
            transform: rotateZ(-20deg);
    background: #ffe600;
}
.upperLip::after{
    content: '';
    display: block;
    width: 80px;
    height: 30px;
    border: 3px solid black;
    border-top: none;
    border-left: none;
    border-bottom-right-radius:50px 30px; 
    -webkit-transform: rotateZ(20deg); 
        -ms-transform: rotate(20deg); 
            transform: rotateZ(20deg); 
    background: #ffe600;
}
/*
* 下嘴唇...
*/
.lowerLip-wrapper{
    position: absolute;
    width: 100%;
    top: 120px;
    height: 200px;
    overflow: hidden;
}
/*
* 性感小红舌...
*/
.lowerLip{
    position: absolute;
    border: 5px solid black;
    width: 200px;
    bottom: 0;
    height: 1800px;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
    border-top: none;
    border-bottom-left-radius: 100px 900px;
    border-bottom-right-radius: 100px 900px;
    border-top-left-radius: 100px 100px;
    border-top-right-radius: 100px 100px;
    background: #ff485f;
    -webkit-box-shadow: inset 0 1610px 0 20px #98000a;
            box-shadow: inset 0 1610px 0 20px #98000a;
}
/*
* 然后，画可爱的脸
*/
.face{
    border: 3px solid black;
    position: absolute;
    width: 90px;
    top: 148px;
    height: 90px;
    border-radius: 45px;
    background: #ff0000;
}
/*
* 将脸放到正确的位置
*/
.face-left{
    right: 50%;
    margin-right: 130px;
}
.face-right{
    left: 50%;
    margin-left: 130px;
}
/*
* 好了，一首凉凉的...啊不一只漂亮的皮卡丘送给各位:P
*/
`
  writeCode('', code)
}.call()
