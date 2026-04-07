function nothing () {
  window.status = "";
  return true;
}

function exec (command) {
  this.document.form.command.value = command;
  this.document.form.submit();
}

function view (structure_id) {
  this.document.form.structure_id.value = structure_id;
  exec('view');
}

function view_ad(edit_ad_id, structure_id)
{
    this.document.form.edit_ad_id.value = edit_ad_id;
    this.document.form.structure_id.value = structure_id;
    this.document.form.command.value = 'view_ad';
    this.document.form.submit();
}
function ad_new(structure_id)
{
    document.form.command.value = 'ad_new';
    document.form.structure_id.value = structure_id;
    copy_form('new_ad');
    document.form.submit();
}
function update_old(structure_id)
{
    document.form.command.value = 'update_old';
    document.form.structure_id.value = structure_id;
    copy_form('edit_ad');
    document.form.submit();
}
function delete_old(structure_id)
{
    if(confirm("Are you sure you want to delete this ad ?"))
    {
	document.form.command.value = 'delete_old';
	document.form.structure_id.value = structure_id;
	document.form.submit();
    }
}
function copy_form(form_name)
{
    var ff = document.forms[form_name];
    var node;
    for(i=0; i<ff.elements.length; i++)
    {
	if(ff.elements[i].type != 'submit' && ff.elements[i].type != 'reset')
	{
	if (ff.elements[i].type != 'select-one'){
	    add_hidden(ff.elements[i].name, ff.elements[i].value);
	}
	else{
	    var index = ff.elements[i].selectedIndex;
	    add_hidden (ff.elements[i].name, ff.elements[i].options[index].text);
	}
	}
    }
}
function add_hidden (name, val) {
  var e   = document.createElement('input');
  e.type  = 'hidden';
  e.name  = name;
  if (val != undefined) e.value = val;
  document.form.appendChild(e);
  return e;
}

function limitText(limitField, limitCount, limitNum) {
    if (limitField.value.length > limitNum) {
	limitField.value = limitField.value.substring(0, limitNum);
    } 
    else {
	limitCount.value = limitNum - limitField.value.length;
    }
}
