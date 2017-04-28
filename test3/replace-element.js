/*Please refer: http://jsfiddle.net/Z4dEn/8/*/

var divElement = document.createElement("div");
divElement.style.cssText = 'display: inline';

function replaceTargetWith(currentNode, newNode) {
  if (currentNode && currentNode.nodeName == "SPAN" && currentNode.parentNode) {
    divClone = divElement.cloneNode();
    var i = 0;
    while (i < currentNode.childNodes.length) {
      divClone.appendChild(currentNode.childNodes[i]);
      i++;
    }
    currentNode.parentNode.replaceChild(divClone, currentNode);
  }

  if (currentNode.hasChildNodes()) {
    for (var i = 0, len = currentNode.childNodes.length; i < len; ++i) {
      if (currentNode.childNodes[i].nodeType == 1) {
        replaceTargetWith(currentNode.childNodes[i], newNode);
      }
    }
  }

}


Array.prototype.forEach.call(document.querySelectorAll('body'), function(node) {
  for (var i = 0, len = node.childNodes.length; i < len; ++i) {
    if (node.childNodes[i].nodeType == 1) {
      replaceTargetWith(node.childNodes[i], divElement);
    }
}


});
