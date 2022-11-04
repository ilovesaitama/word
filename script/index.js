function OnButtonClick() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let checkbox = document.getElementById('checkbox').checked;
    let radio = document.getElementById('radio').checked;
    let radio2 = document.getElementById('radio2').checked;
    if (radio) {
        var view = [1,0];
    } else {
        var view = [0,1];
    }
    if (radio2) {
        var check = "";
    } else {
        var check = "checked";
    }
    let loop = number2-number1+1;
    let output = "<tr><th></th><th class='size'>"+_0[view[0]]+"</th><th class='size'>"+_0[view[1]]+"</th></tr>";
    for (var i = 0;  i < loop;  i++) {
        let num1 = parseInt(number1);
        let num2 = parseInt(i);
        let set = num1+num2;
        if (checkbox&eval("_"+set)[2]==1){

        }else{
        output = ""+output+"<tr><td><label><input type='checkbox' id='_"+set+"'>"+set+"</label></td><td>"+eval("_"+set)[view[0]]+"</td><td><input type='checkbox' "+check+" id='"+set+"' class='back'><label for='"+set+"'>"+eval("_"+set)[view[1]]+"</label></td></tr>";
        let loopset = eval("_"+set).length;
        let loop2 = (loopset - 3) / 2; 
        for (var n = 0;  n < loop2;  n++) {
            console.log(loop2);
            output = ""+output+"<tr><td><label><input type='checkbox' id='_"+set+""+n+"'>"+set+"</label></td><td>"+eval("_"+set)[view[0]+3+n*2]+"</td><td><input type='checkbox' "+check+" id='"+set+""+n+"' class='back'><label for='"+set+""+n+"'>"+eval("_"+set)[view[1]+3+n*2]+"</label></td></tr>";
        }
        }
    }
    let area = document.getElementById("input");
    area.innerHTML = output;
}