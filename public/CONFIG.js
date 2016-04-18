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
	'Jill Carty': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/jill.jpg" class="creator-image">',
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
	'Christina Noyes': '<img src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/christina.jpg" class="creator-image">'
	
};

// The list of all possible grove calendar activities
window.GROVE_ACTIVITIES = {
	'Library Center': ['Level Reading', 'Buddy Reading','Story Book'],
	'Writing Center':["Writer's Workshop", 'Personal Narrative'],
	'Maker Center': ['Blocks', 'Legos','We Are Denver Architects'],
	'iPad Center': ['ST Math', 'Big Universe', 'Tynker',"Kids A-Z", 'RazKids','ABC Phonics','Counting Game', 'Sight Word Ninja', 'Dreambox'],
	'Flex Center':['Patterns','Extra Capital Experts','Sight Word Trains', 'Happy Handwriting', 'CVC Scramble',  "What's going on?","True or False", 'Duolingo', 'Rhyming', 'Beginning Sounds', 'CVC', 'Read and Build!', "Build-a-word!", "Reader's Theatre",  "Sight Word Superstar!", "Match Up!", "Cupcake Wars!","Pattern Block Pictures", "Match Letter!", "Meatball Madness!", "Ice Cream Capitals" ]
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
	else if (description.match('legos')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/Color/PNG/96/Logos/lego-96.png" title="Lego" width="48">';
	}
	else if (description.match('tynker')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/tynker.png">';
	}
	else if (description.match('math fact master')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/math+fact+monster.PNG">';
	}
	else if (description.match('extra capital experts')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/Color/PNG/96/Sports/trophy-96.png" title="Trophy" width="48">';
	}
	else if (description.match('screening')) {
		return '<img class="activity-image" src="http://www.jeffjonesillustration.com/images/illustration/01126-see-hear-eyes-and-ears.jpg">';
	}
	else if (description.match('sight word trains')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/sight+word+trains.PNG">';
	}
	else if (description.match("what's going on")) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/what%27s+going+on.PNG">';	
	}
	else if (description.match("big universe")) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/biguniverse.PNG">';	
	}
	else if (description.match('cvc scramble')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/cvc+scramble.PNG">';
	}
	else if (description.match('mystery box')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/mysterybox.png">';
	}
	else if (description.match('español')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/espanol.jpg">';
	}
	else if (description.match('science lab')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/sciencelab.jpg">';
	}
	else if (description.match('match up')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/match+up.PNG">';
	}
	else if (description.match('match letter')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/matchletter.jpg">';
	}
	else if (description.match('meatball madness')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/meatballmadness.PNG">';
	}
	else if (description.match('cupcake')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/cupcake.PNG">';
	}
	else if (description.match('we are denver')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/denverskyline.jpg">';
	}
	else if (description.match('duolingo')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/duolingo.png">';
	}
	else if (description.match('true or false')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/trueorfalse.PNG">';
	}
	else if (description.match('happy handwriting')) { 
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/happyhands.PNG">';
	}
	else if (description.match('st math')) {
		return '<img class="activity-image" src="https://lh6.googleusercontent.com/naI3Chys6t4Kd2K_LCssvuxfuWacggw4UVq2aw46OYtl-9nXFJcGf1x_AVjjuiJcJLYJLfDnFw=s128-h128-e365">';
	} 
	else if (description.match('ice cream capitals')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/icecreamcapitals.PNG">';
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
	else if (description.match('theatre')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/readerstheater.PNG">';
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
	else if (description.match('counting game')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/countingtool.PNG">';
	}
	else if (description.match('personal narrative')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/personal+narratives.PNG">';
	}
	else if (description.match('number practice')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/numberpractice.PNG">';
	}
	else if (description.match('tower')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/tower.PNG">';
	}
	else if (description.match('build-a-word')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/Android_L/PNG/48/Baby/brick-48.png">';
	}
 	else if (description.match('sound round')) {
 		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/sound+roudn.png">';
	}	
	else if (description.match('letter time')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/letter+time.jpg">';
	}
	else if (description.match('beginning sounds')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/beginning+sounds.png">';
	}
	else if (description.match('cvc')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/cvc.jpg">';
	}
	else if (description.match('rhyming')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/rhyming.png">';
	}
	else if (description.match('read and build')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/read+and+build.PNG">';
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
	else if (description.match('pattern block pictures')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/patternblockpictures.PNG">';
	}
	else if (description.match('patterns')) {
		return '<img class="activity-image" src="https://maxcdn.icons8.com/windows10/PNG/64/Data/workflow-64.png" title="Workflow" width="64">';
	}
	else if (description.match('sight word superstar!')) {
		return '<img class="activity-image" src="https://s3-us-west-2.amazonaws.com/roots-checkin/assets/sightwordsuperstar.PNG">';
	}
	// For all of our predefined activities, if the name of the activity is in the summary somewhere, use that image
	Object.keys(ACTIVITY_IMAGES).forEach( function(activity) {
 		if(description.match(activity)) {
 			return ACTIVITY_IMAGES[activity];
 		}
 	});
};
