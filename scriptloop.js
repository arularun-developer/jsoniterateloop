
var ctrl = [{
    "id" : "arunkumar1", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "loop method check task",
    "mail": "arularun6@gmail.com"
},
{
    "id" : "arunkumar2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "loop method check task",
    "mail": "arularun6@gmail.com"
}]
console.log(ctrl)
// for loop //
for(var i = 0; i < ctrl.length; i++) {
    var obj = ctrl[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);
}


//for Each
ctrl.forEach(function(obj) { 
    console.log(obj.id);
 });



//for In
for (var key in ctrl) {
    if (ctrl.hasOwnProperty(key)) {
      console.log(ctrl[key].id);
      //console.log(json[key].msg)
    }
}


