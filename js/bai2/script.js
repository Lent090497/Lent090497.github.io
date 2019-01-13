var day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var month=[
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
			];
//create calender
function createCalendar(){
	var container=document.getElementById("container");
	var table=document.createElement("table");
	createNav(table);
	createRow(table);

	var i,j;
	var today = new Date();
	var currentMonth=today.getMonth();
	var currentYear=today.getFullYear();

}
function dayInMonth(){
	
}
//Create Nav part in calendar
function createNav(table){
	var rowNav = document.createElement("tr");
	var preYear= document.createElement("th");
	preYear.setAttribute("id","preYear");
	preYear.innerHTML="<<";
	var preMonth= document.createElement("th");
	preMonth.setAttribute("id","preMonth");
	preMonth.innerHTML="<";
	var cboMonth=document.createElement("th");
	cboMonth.setAttribute("id","cboMonth");
	cboMonth.setAttribute("colspan",2);
	var cboYear=document.createElement("th");
	cboYear.setAttribute("id","cboYear");
	var nextMonth=document.createElement("th");
	nextMonth.setAttribute("id","nextMonth");
	nextMonth.innerHTML=">";
	var nextYear=document.createElement("th");
	nextYear.setAttribute("id","nextYear");
	nextYear.innerHTML=">>";

	var cboM=document.createElement("select");

	for(var i=0;i<12;i++){
		var option=document.createElement("option");
		option.setAttribute("value",i);
		option.innerHTML=month[i];
		cboM.appendChild(option);
	}

	var cboY=document.createElement("select");
	for(var i=1900; i<=2099; i++){
		var option=document.createElement("option");
		option.setAttribute("value",i);
		option.innerHTML=i;
		cboY.appendChild(option);
	}
	cboYear.appendChild(cboY);
	cboMonth.appendChild(cboM);
	rowNav.appendChild(cboMonth);
	rowNav.appendChild(preYear);
	rowNav.appendChild(preMonth);
	rowNav.appendChild(cboMonth);
	rowNav.appendChild(cboYear);
	rowNav.appendChild(nextMonth);
	rowNav.appendChild(nextYear);
	table.appendChild(rowNav);

}
function createDateofWeek{
	var row=document.createElement("tr");

	for(var i=0; i<=6; i++){
		var cell= document.createElement("th");
		cell.innerHTML=day[i];
		row.appendChild(cell);
	}
	table.appendChild(row);
}
