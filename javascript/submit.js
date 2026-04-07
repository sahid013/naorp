function to_medbanner () {
  for (i = 0; i < document.param.length; i++) {
    a = document.param.elements[i];
    if (a.name != "joinmed" && a.name != "") 
       add_element(document.param.elements[i].name, document.param.elements[i].value);
  }
  add_element('mode', 1);
  add_element('joinmed', document.param.joinmed.checked ? 1 : 0);
  document.temp.submit();
}

function add_element (name, value) {
  var e = document.createElement('input');
  e.type  = 'hidden';
  e.name  = name;
  e.value = value ? value : '';
  document.temp.appendChild(e);
}
