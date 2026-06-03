function calculateSIP(){

let amount =
parseFloat(document.getElementById("sip").value);

let years =
parseFloat(document.getElementById("years").value);

let rate = 12;

let months = years*12;

let r = rate/12/100;

let maturity =
amount*((Math.pow(1+r,months)-1)/r)*(1+r);

document.getElementById("result").innerHTML =
"Estimated Value: ₹"+
Math.round(maturity).toLocaleString();

}

const testimonials = [
"Excellent Mutual Fund Guidance",
"Professional Financial Planning",
"Best SIP Advisory Services"
];

let i=0;

setInterval(()=>{
document.getElementById("testimonial").innerHTML=
testimonials[i];
i++;
if(i>=testimonials.length)i=0;
},3000);
