let myForm = document.querySelector('#submitBtn');
let AmountTag = document.querySelector('#amountinput_Id');
let interestTag = document.querySelector('#interestinput_Id');
let yearTag = document.querySelector('#yearinput_Id');
let mainForm = document.querySelector('#mainForm_Id');


myForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    let P = +AmountTag.value;
    let R = +interestTag.value;
    let N = (+yearTag.value) * 12;
    calaculateLoan(P , N , R);
});

function calaculateLoan(P , N , R) {
   let myTr = document.createElement('tr');
   let regularInterest = P * (R / 100);
   let totAmount = P + regularInterest;
   let monthlyDue = (totAmount / N).toFixed(3);
   let myArray = [totAmount , monthlyDue];
   let deleteBtn = document.createElement('button');
   deleteBtn.type="submit";
   deleteBtn.className = 'del_btn';
   deleteBtn.textContent = "Delete";
   for(let i = 1 ; i <=3 ; i++) {
    
    let mydata = document.createElement('td');
    
    mydata.textContent = myArray[i-1];
    
    myTr.appendChild(mydata);
    if(i === 3) {
        mydata.appendChild(deleteBtn);
    }
   } 
   mainForm.appendChild(myTr);
}

mainForm.addEventListener('click' , (e) => {
    e.preventDefault();
    e.target.parentNode.parentNode.remove();
});




