webpackJsonp([1],[function(t,exports,n){function a(t,n){var a=r(t).attr("data-name"),e=r(n).attr("data-name");return r(n).hasClass("Found")-r(t).hasClass("Found")||(a>e)-1||1}function e(t){return t.split(" ").map(function(t){return t[0].toUpperCase()+t.slice(1)}).join(" ")}function s(t){var n=r("<div>").addClass("studentLocationDisplay").addClass("col-md-2").attr("id",t.googleId).attr("data-name",t.name),a=r("<div>").addClass("nameImageContainer"),e=r("<button>").addClass("btn btn-xs btn-primary absent-toggle").text(t.absent?"Present":"Absent"),s=r("<div>").append(e),i=r("<div>").addClass("studentInfoContainer"),o=r("<div>").addClass("name").text(t.name),d=r("<div>").append(r("<img>").addClass("studentImage").attr("src",t.image));return a.append(o).append(d),n.append(a).append(i).append(s),e.on("click",this.toggleAbsent.bind(this)),n}function i(t){var n=o.find(l,function(n){return n.data.googleId===t.googleId});n&&(n.transitionTimeout&&window.clearTimeout(n.transitionTimeout),n.recentScan=t,n.onScan.call(n,t))}var o=n(1),d=n(3),r=n(90),c=o.partial(n(106),EVENT_LENGTH,TRANSITION_LENGTH),l=[],p="All",u=function(t){if(this.data=o.pick(t,["_id","email","name","image","googleId","absent"]),this.el=s.call(this,t),t.absent)this.status="Absent",this.updateDisplay();else if(t.recentScan){scan=t.recentScan;var n=!1,a=scan.event[0];a&&a.end&&d(a.end).subtract(TRANSITION_LENGTH,"ms").isAfter(Date.now())?n=!0:a&&!a.end&&d(scan.time).add(EVENT_LENGTH-TRANSITION_LENGTH,"ms").isAfter(Date.now())&&(n=!0),n?(this.recentScan=scan,this.onScan(scan)):(this.status="Lost",this.updateDisplay())}else this.status="Lost",this.updateDisplay()};u.prototype.toggleAbsent=function(t){t.preventDefault(),this.status="Absent"===this.status?"Lost":"Absent";var n=this;r.post("/api/user/",{id:this.data.googleId,absent:!this.data.absent},n.updateDisplay.bind(n))},u.prototype.updateDisplay=function(){if("Absent"!=this.status&&this.el.find(".absent-toggle").text("Absent"),"Found"===this.status){var t=this.recentScan.event[0],n=o.chain(["summary","activity","focus_area"]).map(function(n){return t[n]}).filter().join(" | ").value(),a=r("<p>").addClass("last-scan-info").addClass("text-primary").text(n);this.el.find(".studentInfoContainer").empty().append(a),this.el.removeClass("Lost").addClass("Found"),this.render()}else if("Lost"===this.status){var e=this;r.get("/current-event/"+this.data.googleId,function(t){e.el.removeClass("Found").addClass("Lost");var n=e.el.find(".studentInfoContainer");n.empty(),r("<p>").addClass("correct-location-info text-primary").text(t.location).appendTo(n),e.recentScan&&r("<p>").addClass("last-scan-info text-danger").text(e.recentScan.scannedLocation).appendTo(e.el.find(".studentInfoContainer")),e.currentLocation=t.location,e.render()})}else"Absent"===this.status&&(this.el.removeClass("Found").addClass("Lost"),this.currentLocation="Absent",this.el.find(".absent-toggle").text("Present"),this.render())},u.prototype.render=function(){this.el&&this.el.remove();var t=r("#"+this.currentLocation.replace(/ /g,""));t.append(this.el);var n=t.find(".studentLocationDisplay").sort(a);n.detach().appendTo(t),this.el.find(".absent-toggle").off("click").on("click",this.toggleAbsent.bind(this))},u.prototype.onScan=function(t){var n=this;if(t&&t.correct){this.currentLocation=t.scannedLocation,this.status="Found";var a=t.event[0].end?d(t.event[0].end).subtract(TRANSITION_LENGTH,"ms").diff(Date.now()):c()+EVENT_LENGTH-TRANSITION_LENGTH;this.transitionTimeout=window.setTimeout(n.onScan.bind(n,null),a)}else t?this.status="Lost":(this.status="Lost",this.recentScan=null);n.updateDisplay()},r(function(){["Lost"].concat(o.keys(LOCATION_IMAGES),"Absent").forEach(function(t){var n=t.match(/ipad/i)?"iPad Center":e(t),a=r("<button>").addClass("btn btn-info btn-block").text(n),s=r("<li>").append(a);r("#location-filters").append(s),r("<div>").addClass("row").attr("id",n.replace(/ /g,"")).append(r("<h3>").text(n)).appendTo(r("#locations-container"))}),r("#location-filters button").click(function(t){p=r(this).text(),"All"===p?r("#locations-container > div").show():(r("#locations-container > div").hide(),r("#"+p.replace(/ /g,"")).show()),r("#location-filters button.btn-warning").removeClass("btn-warning").addClass("btn-info"),r(this).removeClass("btn-info").addClass("btn-warning")}),r.get("api/user",function(t){l=o.map(t,function(t){return new u(t)})});var t=io.connect();t.on("SCAN!",i),r(".all-absent").on("click",function(){r.ajax("/api/user/bulk",{type:"PUT",contentType:"application/json",data:JSON.stringify({absent:!0})})})})}]);