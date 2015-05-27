function refreshFeatures() {

//  ------------------------------------------------ PPA Add scripts ------------------------------------------------///
var PPA = "";

if (document.getElementById("")) PPA += !document.getElementById("").checked ? '' : '\n' ;if (document.getElementById("")) PPA += !document.getElementById("").checked ? '' : '\n' ;if (document.getElementById("")) PPA += !document.getElementById("").checked ? '' : '\n' ;if (document.getElementById("")) PPA += !document.getElementById("").checked ? '' : '\n' ;


PPA = PPA.substring(0, PPA.length - 1);

//  ------------------------------------------------ // Install scripts //------------------------------------------------///

var INSTALL = "";


if (document.getElementById("")) INSTALL += !document.getElementById("").checked ? '' : '\n' ;if (document.getElementById("")) INSTALL += !document.getElementById("").checked ? '' : '\n' ;if (document.getElementById("")) INSTALL += !document.getElementById("").checked ? '' : '\n' ;if (document.getElementById("")) INSTALL += !document.getElementById("").checked ? '' : '\n' ;



// Show Install scripts
var packagelist = "";

packagelist +="################################################################################" + "\n" +"######** Use this Package List with Cleanstart shell Script to install **#######"+ "\n" + "################################################################################" + "\n" + PPA + "\n" + INSTALL;

$('#editor').html( packagelist );


};	

