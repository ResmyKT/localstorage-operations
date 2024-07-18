function storeRecords(){
    event.preventDefault();
    car={
        brand:carbrand.value,
        price:carprice.value,
        key:carkey.value,
       
    }
    if(car.brand=="" ||car.price==""|| car.key==""){
        alert("please fill missing fields")
    }
    else{
        if(car.key in localStorage){
            alert("car already exists")
        }
        else{
            localStorage.setItem(car.key,JSON.stringify(car))
            alert("Car added successfully")
        }
    }
}


function retrieveRecords()
{
    let key=retrieve.value
   if(key in localStorage){
    let car=JSON.parse(localStorage.getItem(key))
    result.innerHTML=`
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    Car-Details
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${car.brand}</li>
    <li class="list-group-item">${car.price}</li>
    <li class="list-group-item">${car.key}</li>
     
  </ul>
</div>`}
else{
    alert("Item not found")
}

}

function removeRecords(){
    event.preventDefault();
    var key = document.getElementById("remove").value;
    if(key in localStorage){
      localStorage.removeItem(key);
      alert("Car removed successfully");
    } else{
      alert("Car not found");
    }
  }

  function clearAll(){
    localStorage.clear();
  alert("All records cleared");
  }
  
