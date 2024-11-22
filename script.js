function calc() {
    const x = document.querySelector('#imp1').value;
    const n = document.querySelector('#imp2').value;
    const p = document.querySelector('#imp3').value;
    const q = 1-p;
    const ans = document.querySelector('h2');
    const sig = Math.sqrt(n * p * q);
    const a = (x - (n * p)) / sig;
    let abc = "";
    if(a<2.58){
        abc = `Answer is ${a} and is unbiased`;
    }
    else{
        abc = `Answer is ${a} and is biased`;
    }
    ans.innerHTML = abc;
}
