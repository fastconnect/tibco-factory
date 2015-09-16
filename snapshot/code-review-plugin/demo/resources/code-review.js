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
var currentElementId = null;

function bold(elementId) {
	var obj = document.getElementById(elementId);
	if (obj != null) {
	//	obj.style.fontWeight = 'bold';
		obj.style.border = '2px solid #FFF';
		obj.style.backgroundColor = '#B0B0B0';
	}
}

function slim(elementId) {
	var obj = document.getElementById(elementId);
	if (obj != null) {
	//	obj.style.fontWeight = 'inherit';
		obj.style.border = '1px solid #FFF';
		obj.style.backgroundColor = '#A0A0A0';
	}
}

function hide(elementId) {
	var obj = document.getElementById(elementId);
	if (obj != null) {
		obj.style.visibility = 'collapse';
		obj.style.display = 'none';
	}
}

function show(elementId) {
	var obj = document.getElementById(elementId);
	if (obj != null) {
		obj.style.display = 'inherit';
		obj.style.visibility = 'inherit';
	}
}

function switchVisibility(elementId) {
	var obj = document.getElementById(elementId);
	if (obj.style.display != 'inherit') {
		show(elementId);
	} else {
		hide(elementId);
	}
}

function menue(elementId) {
	if (currentElementId != null) {
		hide(currentElementId);
		slim('b' + currentElementId);
	}
	currentElementId = elementId;
	show(elementId);
	bold('b' + elementId);
}

function codeReviewSectionMaskData(elementId) {
	switchVisibility(elementId);
}