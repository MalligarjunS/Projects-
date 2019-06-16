var htmlItems=document.getElementById("listItems");
var count=0;
var priceCount=0;
var lstPrice=[];
var listItems=[];

function AddItems()
{  
   var item=prompt("Add Item Name");
    if(item!="" && item!=null){  
        listItems[count]=item;
 var price=parseFloat(prompt("Include price for " +item));
    lstPrice[priceCount]=price;
     htmlItems.innerHTML +="<tr><td>"+(count+1)+"</td><td>" + listItems[count].toUpperCase().trim()+"</td><td>"+lstPrice[priceCount] + "</td></tr>";
     priceCount++;
     count++;
    
    }
}

var htmlCustomer=document.getElementById("displayItems");

function DeleteItem(){
  var deleteItm=prompt("Enter the item to be deleted");
  for(var i=0;i<listItems.length;i++){
  if(deleteItem.toUpperCase().trim()===listItems[i].toUpperCase().trim())
  {
    htmlCustomer.innerHTML -="<tr><td>"+(i+1)+"</td><td>" +listItems[i].toUpperCase().trim()+"</td><td>"+lstPrice[priceCount] + "</td></tr>";
   priceCount--;
   count--;  
break;
  }
  else{
    alert("Item doesnot exist in the list");
    break;
  }}
}

var itemDisplayList=document.getElementById("displayItems");
itemDisplayList.hidden=true;

function ShowItems(){
  itemDisplayList.hidden=false;
  window.open("file:///C:/Javascript/HotelManagment/Customer.html");
  for(var i=0;i<listItems.length;i++){

    itemDisplayList.innerHTML +="<tr><td>"+(i+1)+"</td><td>" + listItems[i].toUpperCase().trim()+"</td><td>"+lstPrice[i] + "</td></tr>"+
    <select id="qnty">
    <Option value="0">--Add quantity--</Option>
    <Option value="1">1</Option>
    <Option value="2">2</Option>
    <Option value="3">3</Option>
    </select>
    +"</td></tr>";
    
  }
}
var quantity=document.getElementById("qnty").value;
var itemQuantity=[];
var htmlPayment=document.getElementById("displayItems");
var ttlBill=0.0;
var gst=0.0;

function payment(){
  itemQuantity +=quantity;
  for(var i=0;i<itemQuantity.length;i++){

htmlPayment+="<tr><td>"+(i+1)+"</td><td>" + listItems[i].toUpperCase().trim()+"</td><td>"+lstPrice[i] + "</td></tr>"+itemQuantity[i]+"</td><td>";
gst=parseFloat(itemQuantity[i])*parseFloat(lstPrice[i])*0.025;
ttlBill=parseFloat(itemQuantity[i])*parseFloat(lstPrice[i])+gst;

  }
  
document.getElementById("gstAmout").innerHTML=gst;
document.getElementById("totalBill").innerHTML=ttlBill;

}





