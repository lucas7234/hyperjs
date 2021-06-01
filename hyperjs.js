function makeelement(tag, attrname="", attrvalue="", textnode=""){
   var tagdom=document.createElement(tag);
   var textdom=document.createTextNode(textnode);
   tagdom.appendChild(textdom);
   var attrdom=document.createAttribute(attrname);
   attrdom.value=attrvalue;
   tagdom.setAttributeNode(attrdom);
   document.body.appendChild(tagdom);
}

function getElementsByAttribute(attribute, value){
   var attrelem=document.querySelectorAll("["+attribute+'="'+value+'"]');
   return attrelem;
}

function getElementByAttribute(attribute, value){
   var attrelem=document.querySelectorAll("["+attribute+'="'+value+'"]')[0];
   return attrelem;
}

function promptanswer(q){
 var ansq=prompt(q); return ansq; 
}

function openpopup(href){
 window.open(href, "", "left=100, top=100, width=300, height=300");  
}

function timezone(){
   return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
