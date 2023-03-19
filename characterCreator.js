function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "charOptions.xml", false);
    xhttp.send();
    PopulateDropDownList(xhttp);//(this);
}
function PopulateDropDownList(xml)
{
    var xmlText = xml.responseXML;
	var xmlDoc;
	if (window.DOMParser) {
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(xmlText, "text/xml");
	}
	else //For IE
	{
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = false;
		xmlDoc.loadXML(xml);
	}

	var classes = xmlDoc.getElementsByTagName("Classes");
	var sccn = document.getElementById("selectCharClassName");

	for (var i = 0; i < classes.length; i++) {
		var option = document.createElement("option");

		//Set Customer Name in Text part.
		option.text = classes[i].getElementsByTagName("Name")[0].textContent;

		//Set Customer CustomerId in Value part.
		option.value = classes[i].getElementsByTagName("Name")[0].textContent;

		//Add the Option element to DropDownList.
		sccn.options.add(option);
	}
	
    alert(x);
}

window.addEventListener("load", function() {
	loadDoc();
});

// document.getElementById("content").innerHTML = "whatever";
