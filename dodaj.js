
function updateForm() {
 var id = document.getElementById("id").value;

var name = document.getElementById("name").value;

var description=
document.getElementById("description").value;

var picture = document.getElementById("picture").value;
var price =
document.getElementById("price").value;

var isAvailable =
document.getElementById("isAvailable").value;

var table=document.getElementById("results");
           var row=table.insertRow(-1);
           var cell1=row.insertCell(0);
           var cell2=row.insertCell(1);
           var cell3=row.insertCell(2);
           var cell4=row.insertCell(3);
           var cell5=row.insertCell(4);
           var cell6=row.insertCell(5);
           var cell7=row.insertCell(6);



           cell1.innerHTML=id;
           cell2.innerHTML=name;
           cell3.innerHTML=description;
           cell4.innerHTML=picture;
           cell5.innerHTML=name;
           cell6.innerHTML=price;
           cell6.innerHTML=isAvailable;
 }           
