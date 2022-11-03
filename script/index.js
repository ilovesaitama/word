function OnButtonClick() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let checkbox = document.getElementById('checkbox').checked;
    let radio = document.getElementById('radio').checked;
    if (radio) {
        var view = [1,0];
    } else {
        var view = [0,1];
    }
    let loop = number2-number1+1;
    console.log(loop);
    let output = "<tr><th></th><th></th><th>"+_0[view[0]]+"</th><th>"+_0[view[1]]+"</th></tr>";
    console.log(output);
    for (var i = 0;  i < loop;  i++) {
        let num1 = parseInt(number1);
        let num2 = parseInt(i);
        let set = num1+num2;
        console.log(set);
        if (checkbox&eval("_"+set)[3]==1){
            
        }else{
        output = ""+output+"<tr><td><label><input type='checkbox'>"+set+"</label></td><td>"+part[eval("_"+set)[2]]+"</td><td>"+eval("_"+set)[view[0]]+"</td><td><input type='checkbox' checked id='"+set+"' class='back'><label for='"+set+"'>"+eval("_"+set)[view[1]]+"</label></td></tr>";
        
        console.log(output);
        }
    }
    let area = document.getElementById("input");
    area.innerHTML = output;
}