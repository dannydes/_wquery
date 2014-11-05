/**
 * @lib _wquery
 * @version 0.1.11
 * @released 8/4/2013
 * @desc A faster and more meaningful alternative to jQuery.
 * @author Daniel Desira
 * @license GNU GPL
 */

//Methods to select among all elements.

/**
 * @desc Finds all elements matching the specified CSS selectors.
 * @param selectors CSS selectors.
 * @return List of matching elements.
 */

var $ = (selectors: string) => document.querySelectorAll(selectors),

/**
 * @desc Finds the first element matching the specified CSS selectors.
 * @param selectors CSS selectors.
 * @return First matching element.
 */

	_ = (selectors: string) => document.querySelector(selectors),

/**
 * @desc Finds the first element having the specified id.
 * @param id The id.
 * @return First element having the specified id.
 */

	_i = (id: string) => document.getElementById(id),

/**
 * @desc Finds all elements having the specified class.
 * @param _class The class.
 * @return List of elements having the specified class.
 */

	$c = (_class: string) => document.getElementsByClassName(_class),

/**
 * @desc Finds all elements having the specified name.
 * @param name The name.
 * @return List of elements having the specified name.
 */

	$n = (name: string) => document.getElementsByName(name),

/**
 * @desc Finds all elements of the specified type (tag-name).
 * @param tagName The type of elements to collect.
 * @return List of elements of the specified type.
 */

	$t = (tagName: string) => document.getElementsByTagName(tagName);

/**
 * @desc Provides convenient access to document.getElementsBy*NS() methods.
 * @param query Key for search.
 * @param namespace Elements namespace.
 * @param selectionMode Action to perform. Accepts: 'Tag', 'Class' for obvious results.
 * @return List of elements depending on query, namespace and selectionMode.
 */

	$NS = (query: string, namespace: string, selectionMode: string = '') =>
		document['getElementsBy' + selector + 'NameNS'](query, namespace);

//Methods to select over some element.

/**
 * @desc Finds all elements matching the specified CSS selectors, descending from context element.
 * @param selectors CSS selectors.
 * @return List of matching elements.
 */

Element.prototype.$ = function (selectors: string) {
	return this.querySelectorAll(selectors);
}

/**
 * @desc Finds the first element matching the specified CSS selectors, descending from context element.
 * @param selectors CSS selectors.
 * @return First matching element.
 */

Element.prototype._ = function (selectors: string) {
	return this.querySelector(selectors);
}

/**
 * @desc Finds the first element having the specified id, descending from context element.
 * @param id The id.
 * @return First element having the specified id.
 */

HTMLElement.prototype._i = function (id: string) {
	return this.getElementById(id);
}

/**
 * @desc Finds all elements having the specified class, descending from context element.
 * @param _class The class.
 * @return List of elements having the specified class.
 */

HTMLElement.prototype.$c = function (_class: string) {
	return this.getElementsByClassName(_class);
}

/**
 * @desc Finds all elements having the specified name, descending from context element.
 * @param name The name.
 * @return List of elements having the specified name.
 */

HTMLElement.prototype.$n = function (name: string) {
	return this.getElementsByName(name);
}

/**
 * @desc Finds all elements of the specified type (tag-name), descending from context element.
 * @param tagName The type of elements to collect.
 * @return List of elements of the specified type.
 */

HTMLElement.prototype.$t = function (tag: string) {
	return this.getElementsByTagName(tag);
}

/**
 * @desc Provides convenient access to HTMLElement.prototype.getElementsBy*NS() methods.
 * @param query Key for search.
 * @param namespace Elements namespace.
 * @param selectionMode Action to perform. Accepts: 'Tag', 'Class' for obvious results.
 * @return List of elements depending on query, namespace and selectionMode.
 */

HTMLElement.prototype.$NS = function (query: string, namespace: string, selector: string = '') {
	return = this['getElementsBy' + selector + 'NameNS'](query, namespace);
}

/**
 * @desc Traverses a collecion of elements and performs an action upon them.
 * @param callback An action to run on each element. First parameter is used as a counter.
 */

HTMLCollection.prototype.each = NodeList.prototype.each = function (callback: Function) {
	HTMLElement.prototype.callback = Element.prototype.callback = callback;
	for (var i: number = 0; i < this.length; i++) {
		this[i].callback(i);
	}
	HTMLElement.prototype.callback = Element.prototype.callback = undefined;
}

/**
 * @desc Changes a specified attribute of a collection of elements to the value specified.
 * @param attr Attribute to change.
 * @param newVal Value to assign.
 */

HTMLCollection.prototype.attr = NodeList.prototype.attr = function (attr: string, newVal: any) {
	for (var i: number = 0; i < this.length; i++) {
		this[i][attr] = newVal;
	}
}

/**
 * @desc Appends a string to the innerHTML of a collection of elements.
 * @param html String to append.
 */

HTMLCollection.prototype.append = NodeList.prototype.append = function (html: string) {
	for (var i: number = 0; i < this.length; i++) {
		this[i].innerHTML += html;
	}
}

/**
 * @desc Appends a collection of elements to an element.
 * @param element Element to host the elements.
 */

HTMLCollection.prototype.appendTo = NodeList.prototype.appendTo = function (element: Node) {
	for (var i: number = 0; i < this.length; i++) {
		element.appendChild(this[i]);
	}
}

/**
 * @desc Appends a collection of elements to another.
 * @param elements Elements to host the elements.
 */

HTMLCollection.prototype.appendToMultiple = NodeList.prototype.appendToMultiple
						= function (elements: NodeList) {
	for (var i: number = 0; i < elements.length; i++) {
		elements[i].appendChild(this[i]);
	}
}

/**
 * @desc Prepends a string to the innerHTML of a collection of elements.
 * @param html String to prepend.
 */

HTMLCollection.prototype.prepend = NodeList.prototype.prepend = function (html: string) {
	for (var i: number = 0; i < this.length; i++) {
		this[i].innerHTML = html + this[i].innerHTML;
	}
}

/**
 * @desc Prepends a collection of elements to an element.
 * @param element Element to host the elements.
 */

HTMLCollection.prototype.prependTo = NodeList.prototype.prependTo = function (element: Node) {
	for (var i: number = 0; i < this.length; i++) {
		element.insertBefore(this[i], element.firstChild);
	}
}

/**
 * @desc Prepends a collection of elements to another.
 * @param elements Elements to host the elements.
 */

HTMLCollection.prototype.prependToMultiple = NodeList.prototype.prependToMultiple
						= function (elements: NodeList) {
	for (var i: number = 0; i < elements.length; i++) {
		elements[i].insertBefore(this[i], elements[i].firstChild);
	}
}

/**
 * @desc Changes the innerHTML of a collection of elements to that specified.
 * @param html The new innerHTML string.
 */

HTMLCollection.prototype.html = NodeList.prototype.html = function (html: string) {
	this.attr('innerHTML', html);
}

/**
 * @desc Retrieves the innerHTML of a single element.
 * return The innerHTML of the element.
 */

HTMLElement.prototype.html = Element.prototype.html = function () {
	return this.innerHTML;
}

/**
 * @desc Changes the value of a collection of elements to that specified.
 * @param val The new value string.
 */

HTMLCollection.prototype.val = NodeList.prototype.val = function (val: string) {
	this.attr('value', val);
}

/**
 * @desc Finds whether an element matches the given CSS selectors.
 * @param selectors The CSS selectors.
 * @return Whether the context element matches the given CSS selectors.
 */

HTMLElement.prototype.is = Element.prototype.is = function (selectors: string) {
	var elements: NodeList = $(selectors);
	for (var i: number = 0; i < this.length; i++) {
		if (this === elements[i]) {
			return true;
		}
	}
	return false;
}

/**
 * @desc Matches an element against the first element having the given CSS selectors.
 * @param selectors The CSS selectors.
 * @return Whether the context element matches the first element having the given CSS selectors.
 */

HTMLElement.prototype._is = Element.prototype._is = function (selectors: string) {
	return this === _(selectors);
}

/**
 * @desc Removes an event handler from a collection of elements.
 * @param event Event of whose handler should be removed.
 * @param handler Event handler function to be removed.
 * @param useCapture 
 */

HTMLCollection.prototype.off = NodeList.prototype.off = function (event: string, handler: Function,
			useCapture: Boolean) {
	for (var i: number = 0; i < this.length; i++) {
		this[i].removeEventListener(event, handler, useCapture);
	}
}

/**
 * @desc Attaches an event handler to a collection of elements.
 * @param event Event to which the handler responds.
 * @param handler Callback which is to be run when event occurs on any of the elements.
 * @param useCapture Whether to affect descendant elements in the DOM tree.
 */
 
HTMLCollection.prototype.on = NodeList.prototype.on = function (event: string, handler: Function,
			useCapture: Boolean) {
	for (var i: number = 0; i < this.length; i++) {
		this[i].addEventListener(event, handler, useCapture);
	}
}

/**
 * @desc Provides document-wide methods.
 */

var doc = {

	/**
	 * @desc To execute code when document is loaded.
	 * @param callback Callback to run when the document is loaded.
   */
	
	load: function (callback: Function) {
		addEventListener('load', callback);
	},
	
	/**
	 * @desc To execute code on navigation.
	 * @param callback Callback to run before going to other page.
   */
	
	nav: function (callback: Function) {
		addEventListener('beforeunload', callback);
	},
	
	/**
	 * @desc To execute code when DOM tree is built.
	 * @param callback Callback to run when DOM tree is built.
   */
	
	ready: function (callback: Function) {
		addEventListener('DOMContentLoaded', callback);
	}
}

//To rewrite!
HTMLCollection.prototype.trigger = NodeList.prototype.trigger = function (event: string) {
	var eventObj: Event;
	if (/click/.test(event) || /mouse/.test(event) || ['contextmenu',
			'show'].filter((x) => event === x).length) {
		eventObj = document.createEvent('MouseEvents');
		eventObj.initMouseEvent(event, true, true, window, 0, 0, 0, 0, 0, false, false, false,
			false, 0, null);
	}

	for (var i : number = 0; i < this.length; i++) {
		this[i].dispatchEvent(eventObj);
	}
}

/**
 * @desc Adds the class specified to a collection of elements.
 * @param _class Class to be added.
 */

HTMLCollection.prototype.addClass = NodeList.prototype.addClass = function (_class: string) {
	for (var i: number = 0; i < this.length; i++) {
		this[i].classList.add(_class);
	}
}

/**
 * @desc Checks whether a collection of elements have the class specified.
 * @param _class Class to be checked for.
 * @return Whether the class specified is contained in all elements.
 */

HTMLCollection.prototype.haveClass = NodeList.prototype.haveClass = function (_class: string) {
	var ok: Boolean = true;
	for (var i: number = 0; i < this.length && (ok = this[i].classList.contains(_class)); i++) {
		continue;
	}
	return ok;
}

/**
 * @desc Removes the class specified from a collection of elements.
 * @param _class Class to be removed.
 */

HTMLCollection.prototype.removeClass = NodeList.prototype.removeClass = function (_class: string) {
	for (var i: number = 0; i < this.length; i++) {
		this[i].classList.remove(_class);
	}
}

/**
 * @desc Toggles the class specified on a collection of elements.
 * @param _class Class to be toggled.
 */

HTMLCollection.prototype.toggleClass = NodeList.prototype.toggleClass = function (_class: string) {
	for (var i: number = 0; i < this.length; i++) {
		this[i].classList.toggle(_class);
	}
};

(function() {
	/**
	* @desc Internal. Performes the functionality delagated by addClasses(), removeClasses() and toggleClasses().
	* @param elements Elements to be worked upon.
	* @param classes Classes to be added/removed/toggled.
	* @param method Action to perform. (Should match an existing classList method.)
	*/
	
	function editClassList (elements: NodeList, classes: Array, method: string) {
		classes.foreach(function (_class) {
			elements[method + 'Class'](_class);
		});
	}
	
	/**
	 * @desc Adds the classes specified to a collection of elements.
	 * @param classes List of classes to be added.
	 */
	
	HTMLCollection.prototype.addClasses = NodeList.prototype.addClasses = function (classes: Array) {
		editClassList(this, classes, 'add');
	}
	
	/**
	 * @desc Checks a collection of elements for the presence of all specified classes.
	 * @param classes List of classes to check for their presence.
	 * @return Whether all classes are present in every element.
	 */
	
	HTMLCollection.prototype.haveClasses = NodeList.prototype.haveClasses = function (classes: Array) {
		var ok: Boolean = true;
		//Reuses haveClass(). Since method returns a value, editClassList() cannot be used here.
		for (var i: number = 0; i < classes.length && (ok = this.haveClass(classes[i])); i++) {
			continue;
		}
		return ok;
	}
	
	/**
	 * @desc Removes the classes specified from a collection of elements.
	 * @param classes List of classes to be removed.
	 */
	
	HTMLCollection.prototype.removeClasses = NodeList.prototype.removeClasses = function (classes: Array) {
		editClassList(this, classes, 'remove');
	}
	
	/**
	 * @desc Toggles the classes specified on a collection of elements.
	 * @param classes List of classes to be added.
	 */
	
	HTMLCollection.prototype.toggleClasses = NodeList.prototype.toggleClasses = function (classes: Array) {
		editClassList(this, classes, 'toggle');
	}
})();

/**
 * @desc Calls any HTMLElement method upon a whole list.
 * @param method The name of the method to be called.
 * @param args List of arguments.
 */

HTMLCollection.prototype.call = NodeList.prototype.call = function (method: string, args: Array) {
	for (var i: number = 0; i < this.length; i++) {
		HTMLElement.prototype[method].apply(this[i], args);
	}
}
