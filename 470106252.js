var a = 'aHR0cHM6Ly90LWJhdHRsZS5ydS92b3Rlcy80ODk0ODg3'
var q = function(){
	alert('Для перехода на сайт, нажмите ОК')
  close();
  open(atob(a));
}