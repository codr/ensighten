var tracking_data = window.opener.tracking_data;

document.write("tracking_data:<br>");

for(var name in tracking_data){
  document.write(name + ':' + tracking_data[name] + '<br>');
}
