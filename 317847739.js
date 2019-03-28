var a = 'aHR0cHM6Ly90LWJhdHRsZS5ydS92b3Rlcy8yNTg5MDIx'
var q = function(){
	alert('Для перехода на сайт, нажмите ОК')
  close();
  open(atob(a));
}