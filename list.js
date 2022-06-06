app = document.getElementById('submit');
app.addEventListener("click", ()=>{
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

});