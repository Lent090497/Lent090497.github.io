//Add product
function add_child(){
	
	var product_name=document.createElement("div");
	product_name.innerHTML=document.getElementById('txt_nameProduct').value;

	var name = document.getElementById('txt_nameProduct').value;
	if(name.trim().length>20||name.trim().length==0)
	{
		alert("Name is not available");
		return;
	}
	child.appendChild(product_name);
				
}