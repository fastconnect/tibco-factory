updateBannerRightVisibility();

function isIndexPage(pageName, folderName) {
	return (pageName == "index.html") || 
		  ((pageName === "") && (folderName == "fc-tibco-factory")) ||
		   (pageName == "fc-tibco-factory")
		   ((pageName === "") && (folderName == "tibco-factory")) ||
		   (pageName == "tibco-factory")
		   ((pageName === "") && (folderName == "snapshot")) ||
		   (pageName == "snapshot")
		   ;
}

function updateBannerRightVisibility() {
	var path = $(location).attr('pathname');
	var pathArray = path.split('/');
	var pageName = pathArray[pathArray.length-1];
	var folderName = pathArray[pathArray.length-2];

//	window.alert(pageName);
//	window.alert(folderName);
	
	if (isIndexPage(pageName, folderName)) {
		showElement("bannerRight");
		adjustBodyContent();
	}
}


function showElement(elementName) {
	var element = document.getElementById(elementName);
	if (element != null) {
		element.style.visibility = 'visible';
		element.style.display = 'block';
	}
}

function adjustBodyContent() {
	$(".body-content").css("width", "750px");
	$(".body-content").css("padding-bottom", "20px");
}