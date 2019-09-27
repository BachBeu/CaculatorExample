function a() {
    let a = parseInt(document.getElementById('a').value)
    return a

}
function b() {
    let b= parseInt(document.getElementById('b').value)
    return b

}
    function add(){
        let add = a() + b() ;
        alert("result: " + add)
    }
    function sub(){
        let sub = a() - b();
        alert("result: " + sub)
    }
    function mul(){
        let mul = a() * b();
        alert("result: " + mul);
    }
    function devision(){
        let devision = a() / b();
        alert("result: " + devision);
    }
