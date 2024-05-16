let data=[
    {id:1,name:"Amar", email:"amar@gmail.com",scholarno:2311,phoneno:7896,address:"Delhi"},
    {id:2,name:"Evan", email:"evan@gmail.com",scholarno:2321,phoneno:7364,address:"Laxmi vihar"}
]
function readAll(){
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata=document.querySelector(".datatable");
    var object=localStorage.getItem('object');
    var objectdata=JSON.parse(object);
    var element= "";
    objectdata.map(record =>{
        element += `<tr>
              <td>${record.name}</td>
               <td>${record.email}</td>
               <td>${record.scholarno}</td>
               <td>${record.phoneno}</td>
               <td>${record.address}</td>
              <td>
                <button class="edit" onclick={edit(${record.id})}>edit</button>
                <button class="delete" onclick={delet(${record.id})}>delete</button>

              </td>
        </tr>`
    })
    tabledata.innerHTML=element;
}
function create(){
    document.querySelector(".createform").style.display="block";
    document.querySelector(".add-div").style.display="none";
}
function add(){
    var name= document.querySelector(".name").value;
    var email= document.querySelector(".email").value;
    var scholarno= document.querySelector(".scholarno").value;
    var phoneno= document.querySelector(".phoneno").value;
    var address= document.querySelector(".address").value;
    var newobj={ id:3, name:name, email:email,scholarno:scholarno,phoneno:phoneno,address:address};
    data.push(newobj);
    document.querySelector(".createform").style.display="none";
    document.querySelector(".add-div").style.display="block";
    readAll();
}
function edit(id){
    document.querySelector(".updateform").style.display="block";
    var obj=data.find(rec => rec.id===id);
    document.querySelector('.uname').value=obj.name;
    document.querySelector('.uemail').value=obj.email;
    document.querySelector('.uscholarno').value=obj.scholarno;
    document.querySelector('.uphoneno').value=obj.phoneno;
    document.querySelector('.uaddress').value=obj.address;
    document.querySelector('.id').value=obj.id;


}
function update(){
    var id= parseInt(document.querySelector('.id').value);
    var name=document.querySelector('.uname').value;
    var email=document.querySelector('.uemail').value;
    var scholarno=document.querySelector('.uscholarno').value;
    var phoneno=document.querySelector('.uphoneno').value;
    var address=document.querySelector('.uaddress').value;
    var index= data.findIndex(rec =>rec.id===id);
    data[index]={id,name,email,scholarno,phoneno,address};
    document.querySelector('.updateform').style.display="none";
    document.querySelector(".add-div").style.display="block";

    readAll();
}
function delet(id){
    data=data.filter(rec=> rec.id !==id);
   readAll();
}
function handleClick() {
    alert("You just clicked there!");
}

// Function to show an alert on double-click
function handleDoubleClick() {
    alert("You just double-clicked there!");
}

// Function to show an alert on hover
function handleMouseOver() {
    alert("You just moved in!");
}

// Function to show an alert on mouse out
function handleMouseOut() {
    alert("You just moved out!");
}

// Attach the functions to the button's respective events
const button = document.getElementById("alertbutton");
button.onclick = handleClick;
button.ondblclick = handleDoubleClick;
button.onmouseover = handleMouseOver;
button.onmouseout = handleMouseOut;

