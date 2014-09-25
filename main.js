$(document).on('ready', function() {


// var month = $('<div class="month">Month</div>');
// var week = $('<div class="week"></div>');
// var day = $('<div class="day"></div>');
// var sunday = $('<div class="day-word sunday">Sunday</div>');
// var monday = $('<div class="day-word monday">Monday</div>');
// var tuesday = $('<div class="day-word tuesday">Tuesday</div>');
// var wednesday = $('<div class="day-word wednesday">Wednesday</div>');
// var thursday = $('<div class="day-word thursday">Thursday</div>');
// var friday = $('<div class="day-word friday">Friday</div>');
// var saturday = $('<div class="day-word saturday">Sasturday</div>');
// var date = $('<div class="date">September 11, 2014</div>');
// var appointments = $('<div class="appointments"></div>');

// $('.main').append(week);
// $(week).append(day);
// $(day).append(sunday, date, appointments);
// $(week).append(day);


/////////////////////////////////////////////////

	// var week1 = $('<ul class="days-list"><li class="day">Sunday</li><li class="day">Monday</li><li class="day">Tuesday</li><li class="day">Wednesday</li><li class="day">Thursday</li><li class="day">Friday</li><li class="day">Saturday</li></ul>');
	// // var day = $('<li class="day">today</li>');
	// var week2 = $('<ul class="days-list"><li class="day">Sunday</li><li class="day">Monday</li><li class="day">Tuesday</li><li class="day">Wednesday</li><li class="day">Thursday</li><li class="day">Friday</li><li class="day">Saturday</li></ul>');

	// var week3 = $('<ul class="days-list"><li class="day">Sunday</li><li class="day">Monday</li><li class="day">Tuesday</li><li class="day">Wednesday</li><li class="day">Thursday</li><li class="day">Friday</li><li class="day">Saturday</li></ul>');

	// var week4 = $('<ul class="days-list"><li class="day">Sunday</li><li class="day">Monday</li><li class="day">Tuesday</li><li class="day">Wednesday</li><li class="day">Thursday</li><li class="day">Friday</li><li class="day">Saturday</li></ul>');

	// var week5 = $('<ul class="days-list"><li class="day">Sunday</li><li class="day">Monday</li><li class="day">Tuesday</li><li class="day">Wednesday</li><li class="day">Thursday</li><li class="day">Friday</li><li class="day">Saturday</li></ul>');

	// $('.main').append(week1);
	// $(daysList).append(day);
	// $('.main').append(day);
	// $(daysList).append(day);
	// $(document).scroll(function(){
	// 	var windowHeight = $(window).height();
	// 	var bottom = $(document).scrollTop() + windowHeight;
	// 	console.log(bottom);
	// 	if (bottom > windowHeight){
	// 		$('.main').append(week2);
	// 	}
	// 	if (bottom > windowHeight * 2 - 500){
	// 		$('.main').append(week3);
	// 	}
	// 	if (bottom > windowHeight * 3 - 500){
	// 		$('.main').append(week4);
	// 	}
	// 	if (bottom > windowHeight * 4 - 500){
	// 		$('.main').append(week5);
	// 	}

	// });

	// var now = moment();
	var now = new Date($.now());
	var day = now.getDay();
	var date = now.getDate();
	var month = now.getMonth();
	var year = now.getYear();
	var dayDayblock = $('<div class="day"></div>')

	$('.main').append(day);
	$(dayBlock).text(now);





});