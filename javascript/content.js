function addurl (dir) {
  document.data.dir.value = dir;
  a = document.createElement('input');
  a.name = 'mode';
  a.type = 'hidden';
  a.value = 1;
  document.data.appendChild(a);
  document.data.submit();
}

function odplink (link) {
  var links = [ "http://dmoz.org/add.html", "http://dmoz.org/about.html", "http://dmoz.org/cgi-bin/apply.cgi" ];
  
  odp = window.open(links[link], "ODP");
}
function open_link (link)
{
  window.open(link, "Site");
}
