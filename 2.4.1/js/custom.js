/*
 * (C) Copyright 2011-2015 FastConnect SAS
 * (http://www.fastconnect.fr/) and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
updateBannerRightVisibility();

function isIndexPage(pageName, folderName) {
	return (pageName == "index.html") || 
		  ((pageName === "") && (folderName == "fc-tibco-factory")) ||
		   (pageName == "fc-tibco-factory") ||
		   ((pageName === "") && (folderName == "tibco-factory")) ||
		   (pageName == "tibco-factory") ||
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