
var app = (function() {

  var points = {};
   
  return {
    
    init: function () {

      points = [{
        "description":"Recieved at National Hub",
        "name":"nsc",
        "visualStatus":"green"
      },{
        "description":"Dispatched to Local Hub",
        "name":"truck",
        "visualStatus":"green",
      },{
        "description":"Recieved at Local Hub",
        "name":"local-hub",
        "visualStatus":"green"
      },{
        "description":"Dispatched to Store",
        "name":"truck",
        "visualStatus":"error",
      },{
        "description":"Recieved at Store | Ready to Collect",
        "name":"store",
        "visualStatus":"grey"  // ok, false Recieved at Store | Ready to Collect
      }];
      
      var myTracker = new tracker(points);
      myTracker.init();
    }
  };
}());