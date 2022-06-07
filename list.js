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
    str= localStorage.getItem('itemsJson');
    itemJsonArray=JSON.parse(str);
    itemJsonArray.push([nem, description]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
}


 table=document.getElementById('table');
str="";
itemJsonArray.forEach((element, index) => {
    str+= `
    <tr>
                <td>${index+1}</td>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button>Done</button></td>
            </tr>`;
    
}); 
table.innerHTML = str;
}

app = document.getElementById('submit');

app.addEventListener("click", add);

   