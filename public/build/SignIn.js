webpackJsonp([1],[function(e,exports,t){function a(e){var t=r(e);if(!t&&n.isEmpty(e.groveCalendar))return null;t||n.isEmpty(e.groveCalendar)||(t=e.groveCalendar[0]),window.eventData=t,window.userData=e,renderLocationImage(t.location,t.activity||t.summary,t.creator,t.focus_area);var a=i(t.start)||i(Date.now()).add(o(),"ms");renderProgressBar(a)}var n=t(1),i=t(3),s=t(90);t(106);var o=n.partial(t(107),EVENT_LENGTH,TRANSITION_LENGTH),r=n.partialRight(t(108),EVENT_LENGTH,TRANSITION_LENGTH);renderProgressBar=function(e){s(".countDown").show();var t=i(Date.now());return e&&t.isAfter(e)?null:void s(".timer").countDown({start_time:t,end_time:e||t.add(1,"ms"),progress:s(".progress-bar"),onComplete:function(){s(".timer").show(),s(".timer").replaceWith('<div class="timer ended">Time\'s Up!</div>')},update_progress:function(e,t){50===Math.floor(e)?s(t).removeClass("progress-bar-success").addClass("progress-bar-warning"):75===Math.floor(e)&&s(t).removeClass("progress-bar-warning").addClass("progress-bar-danger"),t.attr("aria-valuenow",Math.floor(e)),t.css("width",Math.floor(e)+"%"),t.text(Math.floor(e)+"%")}})},renderLocationImage=function(e,t,a,n){e&&(s("#locationImage").empty().append(LOCATION_IMAGES[e.toLowerCase()]),s("#locationText").empty().append(e)),t&&ACTIVITY_IMAGES[t.toLowerCase()]?s("#activityImage").empty().append(ACTIVITY_IMAGES[t.toLowerCase()]):s("#activityImage").empty().append(GET_ACTIVITY(t)),s("#activityText").empty().append(t||""),a?s("#creatorImage").empty().append(CREATOR_IMAGES[a]):n&&(s("#creatorImage").empty().append(FOCUS_AREAS[n]),s("#creatorText").empty().append(n))},getCalendar=function(e){var t=i(Date.now()).startOf("day").toISOString(),o=i(Date.now()).endOf("day").toISOString();gapi.client.request("https://www.googleapis.com/calendar/v3/calendars/"+e.email+"/events/?singleEvents=true&timeMin="+t+"&timeMax="+o+"&orderBy=startTime").execute(function(t){e.calendar=n.map(t.items,function(e){return{eventId:e.id,location:e.location,creator:e.creator.displayName||e.creator.email,start:e.start.dateTime,end:e.end.dateTime,description:e.description,summary:e.summary}}),s.ajax({type:"POST",url:"api/user",data:JSON.stringify(e),contentType:"application/json",success:a}),a(e)})},signinCallback=function(e){e.status.signed_in?(s("#signinButton").hide(),s("#main-container").show(),gapi.client.request("https://www.googleapis.com/plus/v1/people/me?fields=name(familyName%2Cformatted%2CgivenName)%2CdisplayName%2Cemails%2Fvalue%2Cimage%2Furl%2Cid").execute(function(e){var t={id:e.id,name:e.displayName,email:e.emails[0].value,image:e.image.url},a=function(t){t.googleId===e.id&&window.close()},n=io.connect();n.on("SCAN!",a),s("#name").append("<h2>"+e.displayName+e.image.url+"'s Next Step</h2>"),s("#scan-button").attr("href","scan://scan?callback=https%3A%2F%2Froots-elementary.herokuapp.com/scanredirect/"+e.id),s(".scan-button").show(),getCalendar(t)})):console.log("Sign-in state: "+e.error)}}]);
