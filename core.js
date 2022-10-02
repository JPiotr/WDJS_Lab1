function przelicz(){

    let Dmin = document.querySelector("#min");
    let Dmax = document.querySelector("#max");
    let Davg = document.querySelector("#avg");
    let Dsum = document.querySelector("#sum");

    let in1 = parseInt(document.querySelector("#in1").value);
    let in2 = parseInt(document.querySelector("#in2").value);
    let in3 = parseInt(document.querySelector("#in3").value);
    let in4 = parseInt(document.querySelector("#in4").value);


    let sum = in1 + in2 + in3 + in4;
    let max = Math.max(in1,in2,in3,in4);
    let min = Math.min(in1,in2,in3,in4);
    let avg = sum / 4;

    Dmin.innerHTML = "Min: " + min;
    Dmax.innerHTML = "Max: " + max;
    Dsum.innerHTML = "Sum: " + sum;
    Davg.innerHTML = "Avg: " + avg;

    console.log(sum);
    console.log(max);
    console.log(min);
    console.log(avg);
}

let x = document.querySelectorAll("input");
for (i = 0; i<=3; i++){
    x[i].addEventListener("input",przelicz);

}
