// function calc(){
//     let birthday=document.getElementById("birthday").value;
//     const date1=new Date();
//     const date2=new Date(birthday)
//     const diffTime=Math.abs(date1-date2);
//     const diffDate=new Date(diffTime)
//     const years=diffDate.getUTCFullYear()-1970;
//     const months=diffDate.getUTCMonth()
//     const days=diffDate.getUTCDate()-1;
//     document.getElementById("result").innerHTML=`your age is ${years}`
//
// }
function calc(){
    let birthday=document.getElementById("birthday").value;
    let myArray=birthday.split("-");
    let years=Number(myArray[0]);
    let month=Number(myArray[1]);
    let days=Number(myArray[3]);
    let dateNow=new Date();
    let yearNow=dateNow.getUTCFullYear();
    const diffYears=yearNow-years;
    let monthNow=dateNow.getUTCMonth();
    const diffMonts=monthNow-month;
    let dayNow=dateNow.getUTCDate();
    const difDays=dayNow-days;
    document.getElementById("result").innerHTML=`age:${diffYears}`
}