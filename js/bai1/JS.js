//Add product
function add_child(){	

	var name = document.getElementById('txt_nameProduct').value;

	//check length of product name
	if(name.trim().length>20||name.trim().length==0)
	{
		alert("Name is not available");
		return;
	}
	//check product name available
	var parent=document.createElement("div");
	parent.setAttribute("class", "parent");
	
	var list_child = document.getElementById("list_child");

	var child = list_child.children;
	
	for(var i=0; i < child.length; i++)
	{
		if(child[i].children[1].innerHTML==name)
		{
			alert("Product name is not available");
			return;
		}
	}

	var index = document.createElement("div");
	index.setAttribute("class","border");
	index.setAttribute("id", "index");
	index.innerHTML = child.length + 1;

	var product_name = document.createElement("p");
	product_name.setAttribute("id","product_name");
	product_name.innerHTML = name;

	var img = document.createElement("div");
	img.setAttribute("class", "img");

	var img_delete = document.createElement("img");
	img_delete.setAttribute("src", "image/delete-icon.png");

	img.appendChild(img_delete);
	parent.appendChild(index);
	parent.appendChild(product_name);
	parent.appendChild(img);
	list_child.appendChild(parent);

	//create event for buttom delete product

	img_delete.onclick = function()
	{
		var deleted = close.parentNode;
        var parentDelete = deleted.parentNode;
        parentDelete.removeChild(deleted);
        var dir = deleted.children[0].innerHTML;

        //set index
        for (i = dir - 1; i < parentDelete.children.length; i++) {
            parentDelete.children[i].children[0].innerHTML = i + 1;
        }
	}
				
}