function add(){
    console.log("Updating list...");
    nem=document.getElementById('text').value;
    description=document.getElementById('pop').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        itemJsonArray.push([nem, description]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
else{
    itemJsonArraystr= localStorage.getItem('itemsJson');
    itemJsonArray=JSON.parse(itemJsonArraystr);
    itemJsonArray.push([nem, description]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
}
added();
}
function added(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArraystr= localStorage.getItem('itemsJson');
        itemJsonArray=JSON.parse(itemJsonArraystr);
    }
    

 table=document.getElementById('table');
str="";
itemJsonArray.forEach((element, index) => {
    str+= `
    <tr>
                <td>${index+1}</td>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button onclick = "deleted(${index})">Done</button></td>
            </tr>`;
    
}); 
table.innerHTML = str;
}
app = document.getElementById('submit');
app.addEventListener("click", add);
added();
// don= document.getElementById('fck');
// don.addEventListener("click", del);
function deleted(item){
    console.log("Delete", item);
    itemJsonArraystr= localStorage.getItem('itemsJson');
    itemJsonArray=JSON.parse(itemJsonArraystr);
    itemJsonArray.splice(item,1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    added();
}
function clr(){
    console.log("Clearing");
    localStorage.clear();
    added();
}
clear=document.getElementById('clr');
clear.addEventListener("click", clr);





   