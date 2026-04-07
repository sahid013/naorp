function addurl (dir) {
  document.data.dir.value = dir;
  a = document.createElement('input');
  a.name = 'mode';
  a.type = 'hidden';
  a.value = 1;
  document.data.appendChild(a);
  document.data.submit();
}
