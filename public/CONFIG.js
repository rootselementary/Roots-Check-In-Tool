// Set the event length. 15 minutes * 60 seconds * 1000 ms. 
window.EVENT_LENGTH = 15 * 60 * 1000;

// Transition time between events. 5 minutes * 60s * 1000 ms.
window.TRANSITION_LENGTH = 6 * 60 * 1000;

// Images for the various locations
// TODO:  add images for all locations, with keys that are the name of the location
window.LOCATION_IMAGES = {
  'library center': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/green-paint-splatter-md.png">',
  'maker center': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/purple+paint.png">',
  'ipad center': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/yellow-splash-ink-md.png">',
  'writing center':'<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/ink-splash-orange-hi.png">',
  'flex center': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/red.png">',
  'ash': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/blue-alphabet-letter-a.png">',
  'birch': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/blue-alphabet-letter-b.png">',
  'cherry': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/blue-alphabet-letter-c.png">',
  'dahlia': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/blue-alphabet-letter-d.png">',
  'elm': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/blue-alphabet-letter-e.png">',
  'forest': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/blue-alphabet-letter-f.png">',
  'holly': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/holly.png">',
  'playground': '<img class="location-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/playground.gif">'
};

// Images for the various activity / descriptions
// TODO: add images for all activities, with keys that are the name of the activity
window.ACTIVITY_IMAGES = {
  'happy handwriting': '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/happyhands.PNG">',
  'st math': '<img class="activity-image" src="https://lh6.googleusercontent.com/naI3Chys6t4Kd2K_LCssvuxfuWacggw4UVq2aw46OYtl-9nXFJcGf1x_AVjjuiJcJLYJLfDnFw=s128-h128-e365">',
  'ST Math': '<img class="activity-image" src="https://lh6.googleusercontent.com/naI3Chys6t4Kd2K_LCssvuxfuWacggw4UVq2aw46OYtl-9nXFJcGf1x_AVjjuiJcJLYJLfDnFw=s128-h128-e365">',
  'Happy Handwriting': '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/happyhands.PNG">',
  'dance': '<img class="activity-image" src="https://maxcdn.icons8.com/Android/PNG/64/Sports/dancing-64.png">'
};

// Images for event creator
window.CREATOR_IMAGES = {
	'Jill Tew': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/jill.jpg" class="creator-image">',
	'Anna Stringfield': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/anna.jpg" class="creator-image">',
	'Leksy Wolk': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/leksy.jpg" class="creator-image">',
	'Mackenzie Wagner': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/mackenzie.jpg" class="creator-image">',
	'Eve Bunevich': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/eve.jpg" class="creator-image">',
	'Jonathan Hanover': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/jon.jpg" class="creator-image">',
	'Megan Miles': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/megan.jpg" class="creator-image">',
	'Samantha Gambino': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/sam.jpg" class="creator-image">',
	'Mahdyeh Nowkhandan': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/mahdyeh.jpg" class="creator-image">',
	'Debbie Van Roy': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/debbie.jpg" class="creator-image">',
	'Dominic Hernandez': '<img src=https://s3-us-west-2.amazonaws.com/roots-checkin/assets/dominic.jpg" class="creator-image">',
	'Idali Franco': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/idali.jpg" class="creator-image">',
	'Daniel Rondeau': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/rondeau.jpg" class="creator-image">',
	'christina@rootselementary.org': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/christina.jpg" class="creator-image">'
	
};

// The list of all possible grove calendar activities
window.GROVE_ACTIVITIES = {
	'Library Center': ['Level Reading', 'Buddy Reading','Story Book'],
	'Writing Center':["Writer's Workshop", 'Personal Narrative'],
	'Maker Center': ['Blocks', 'Legos','We Are Denver Architects'],
	'iPad Center': ['Lexia Core5','ST Math', 'Big Universe', 'Tynker',"Kids A-Z", 'RazKids','ABC Phonics','Counting Game', 'Sight Word Ninja', 'Dreambox'],
	'Flex Center':['Sound it out in Sand','Comprehension Challenge','Quick Math!','Build and Trace','Write to 100!','Greatest to Least','Dive into Data','Finger Gym!','Patterns','Extra Capital Experts']
};

// The list of all possible Focus Areas, and their associated pictures
window.FOCUS_AREAS = {
	'Fluency': '<i class="focus-area-image fa fa-comment fa-4x">',
	'Mental Math': '<i class="focus-area-image fa fa-calculator fa-4x">',
	'Noise Level': '<i class="focus-area-image fa fa-volume-up fa-4x">'
};

// Getting activity from google descriptions
window.GET_ACTIVITY = function(description) {
	
	if (!description) {
		return null;
	}
	
	// Lower case description to ignore case on keywords 
	description = description.toLowerCase();

	// If 'read' shows up in description
	if (description.match('book')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/iOS7/PNG/75/Science/literature-75.png">';
	}
	else if (description.match('sight word ninja')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/sightwordninja.PNG">';
	}
	else if (description.match('sand')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/Color/PNG/96/Travel/beach_umbrella-96.png" title="Beach Umbrella" width="96">';
	}
	else if (description.match('comprehension')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/Color/PNG/96/Household/book_shelf-96.png" title="Book Shelf" width="96">';
	}
	else if (description.match('legos')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/Color/PNG/96/Logos/lego-96.png" title="Lego" width="48">';
	}
	else if (description.match('tynker')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/tynker.png">';
	}
	else if (description.match('math fact master')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/math+fact+monster.PNG">';
	}
	
	else if (description.match('build and trace')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/iOS7/PNG/75/Editing/ball_point_pen-75.png" title="Ball Point Pen" width="75">';
	}
	else if (description.match('quick math')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/Android/PNG/64/Animals/running_rabbit-64.png" title="Running Rabbit" width="64">';
	}
	
	else if (description.match('star testing')) {
		return '<img class="activity-image" src="http://www.renaissance.com/portals/0/img/prod/logo_star360.png" title="STAR" width="48">';
	}
	else if (description.match('write to 100')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/office/PNG/80/Editing/numbered_list-80.png" title="Numbered List" width="40">';
	}
	else if (description.match('dive')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/iOS7/PNG/50/City/no_diving-50.png" title="Dive into Data" width="50">';
	}
	else if (description.match('greatest to least')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/iOS7/PNG/50/Healthcare/scales_of_Balance_filled-50.png" title="Scales Filled" width="50">';
	}
	else if (description.match('extra capital experts')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/Color/PNG/96/Sports/trophy-96.png" title="Trophy" width="48">';
	}
	else if (description.match('finger gym')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/iOS7/PNG/50/Sports/dumbbell-50.png" title="Dumbbell" width="50">';
	}
	else if (description.match('problem of the day')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/problem+of+the+day.PNG">';
	}
	else if (description.match('shine time')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/shinetime.jpg">';
	}
	else if (description.match('patterns')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/windows10/PNG/64/Data/workflow-64.png" width="64">';
	}
	else if (description.match('lexia')) {
		return '<img class="activity-image" src="http://www.lexialearning.com/uploads/page-body/core5_icon1.png">';
	}
	else if (description.match('project wonder')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/grow.jpg">';
	}
	else if (description.match("what's going on")) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/what%27s+going+on.PNG">';	
	}
	else if (description.match("big universe")) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/biguniverse.PNG">';	
	}
	else if (description.match('español')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/espanol.jpg">';
	}
	else if (description.match('science lab')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/sciencelab.jpg">';
	}
	else if (description.match('we are denver')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/denverskyline.jpg">';
	}
	else if (description.match('duolingo')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/duolingo.png">';
	}
	else if (description.match('st math')) {
		return '<img class="activity-image" src="https://lh6.googleusercontent.com/naI3Chys6t4Kd2K_LCssvuxfuWacggw4UVq2aw46OYtl-9nXFJcGf1x_AVjjuiJcJLYJLfDnFw=s128-h128-e365">';
	} 
	else if (description.match('blocks')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/blocks.PNG">';
	} 
	else if (description.match('reading together')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/readingtogether.png">';
	} 
	else if (description.match('math')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/windows8/PNG/64/Science/math-64.png">';
	}
	else if (description.match('dance')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/Android/PNG/64/Sports/dancing-64.png">';
	}
	else if (description.match('science')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/windows8/PNG/64/Science/test_tube-64.png">';
	}
	else if (description.match('writ')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/windows8/PNG/64/Editing/ball_point_pen-64.png">';
	}
	else if (description.match('circle')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/Android/PNG/64/Healthcare/groups-64.png">';
	}
	else if (description.match('text')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/windows8/PNG/64/Editing/ball_point_pen-64.png">';
	}
	else if (description.match('breakfast')) {
		return '<img class="activity-image" src="http://rootselementary.org/wp-content/uploads/2015/08/green-apple.png">';
	}
	else if (description.match('lunch')) {
		return '<img class="activity-image" src="http://rootselementary.org/wp-content/uploads/2015/08/school-lunch-clip-art-77151.jpg">';
	}
	else if (description.match('recess')) {
		return '<img class="activity-image" src="http://rootselementary.org/wp-content/uploads/2015/08/February-Recess.jpg">';
	}
	else if (description.match('ipad')) {
		return '<img class="activity-image" src="http://rootselementary.org/wp-content/uploads/2015/08/pda-clipart-tablet-computer-clipart-l_001.png">';
	}
	else if (description.match('abc phonics')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/ABC+Phonics.PNG">';
	}
	else if (description.match('meditation')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/meditate.png">';
	}
	else if (description.match('personal narrative')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/personal+narratives.PNG">';
	}
	else if (description.match('read')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/iOS7/PNG/75/Science/literature-75.png">';
	}
	else if (description.match('dreambox')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/dreambox.PNG">';
	}
	else if (description.match('kids')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/kidsaz.PNG">';
	}
	// For all of our predefined activities, if the name of the activity is in the summary somewhere, use that image
	Object.keys(ACTIVITY_IMAGES).forEach( function(activity) {
 		if(description.match(activity)) {
 			return ACTIVITY_IMAGES[activity];
 		}
 	});
};
