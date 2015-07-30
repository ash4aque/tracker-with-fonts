

function tracker (data) {
    this.points = data;
    this.numberOfPoints = data.length;
    this.increament = Math.floor(100/(data.length - 1));
    this.childPosition = 0;
    this.stateCls = "icon-grey";
    this.arrowCls = "arrow-grey";
    this.iconCls = "";
    this.description = "";
    this.arrowMarkup = "";
    this.isErrorIcon = false;
    this.errorMarkup = "";
    this.labelMarkup = "";
}

tracker.prototype.init = function() {
  this.trackerBar = $('<div>', {class: 'tracker-bar'});
  this.tracker = $(".tracker");
  this.render();
};

tracker.prototype.render = function() {
  $(this.tracker).html($('<div>', {class: 'footprints'}));
  this.footprints = $(".footprints");

  for (var i=0; i<this.points.length; i++) {
    var n = i+1,
    label =  this.points[i].label,
    nthClass = '.tracker .footprints .footprint:nth-child('+n+')',
    leftVal = this.childPosition+'%',
    arrowCls = "arrow-grey",
    iconCls, stateCls, imageUrl = "";

    this.setCssClass(this.points[i]);

    if (i !== this.points.length -1) {
      this.arrowMarkup = '<span class="arrow '+this.arrowCls+'"></span>';
      this.labelMarkup = '<span class="infograph-label">'+this.description+'</span>';
    } else {
      this.arrowMarkup = "";
      this.labelMarkup = '<span class="infograph-last-node-label">'+
                           '<span class="infograph-label part1">Recieved at Store</span>'+
                           '<span class="infograph-label part2"> Ready to Collect</span>'+
                          '</span>';
    }
    if (this.isErrorIcon) {
      this.errorMarkup = '<span class="icon-error icon-red"></span>';
    } else {
      this.errorMarkup = "";
    }

 
    $(this.footprints).append('<div class="footprint">'+
                                '<span class="'+this.iconCls+" "+this.stateCls+'">'+ this.errorMarkup+
                                '</span>'+ this.labelMarkup + this.arrowMarkup +
                              '</div>'
                              );
    $(nthClass).css("left", leftVal);
    this.childPosition += this.increament;
  }

  $(this.tracker).append(this.trackerBar);

};

tracker.prototype.setCssClass = function(point){
    
  this.description = point.description;
  if (point.visualStatus === "green"){
      this.stateCls = "icon-green";
      this.arrowCls = "arrow-green";
      this.isErrorIcon = false;
  } else if (point.visualStatus === "grey"){
      this.stateCls = "icon-grey";
      this.arrowCls = "arrow-grey";
      this.isErrorIcon = false;
  } else {
      this.stateCls = "icon-grey";
      this.arrowCls = "arrow-grey";
      this.isErrorIcon = true;
  }

  switch (point.name) {
    case "nsc":
      this.iconCls = "icon-nsc";
      break;
    case "local-hub":
      this.iconCls = "icon-local-hub";
      break;
    case "truck":
      this.iconCls = "icon-truck";
      break;
      case "store":
      this.iconCls = "icon-store";
        break;
    default:
      this.iconCls = "no-image";
  }
}