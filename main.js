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

	// prior to  moment.js///////////////////////////////////////

	// var now = new Date($.now());
	// var dayIndex = now.getDay();
	// var dateIndex = now.getDate();
	// var monthIndex = now.getMonth();
	// var year = now.getYear();

	// var dayName = function(d){
	// 	if (d === 0){
	// 		return 'Sunday';
	// 	} else if (d === 1){
	// 		return 'Monday';
	// 	} else if (d === 2){
	// 		return 'Tuesday';
	// 	} else if (d === 3){
	// 		return 'Wednesday';
	// 	} else if (d === 4){
	// 		return 'Thursday';
	// 	} else if (d === 5){
	// 		return 'Friday';
	// 	} else {
	// 		return 'Saturday';
	// 	} 
	// };

	// var monthName = function(m) {
	// 	if (m = 0) {
	// 		return 'January';
	// 	} else if (m = 1){
	// 		return 'February';
	// 	} else if (m = 2){
	// 		return 'March';
	// 	} else if (m = 3){
	// 		return 'April';
	// 	} else if (m = 4){
	// 		return 'May';
	// 	} else if (m = 5){
	// 		return 'June';
	// 	} else if (m = 6){
	// 		return 'July';
	// 	} else if (m = 7){
	// 		return 'August';
	// 	} else if (m = 8){
	// 		return 'September';
	// 	} else if (m = 9){
	// 		return 'October';
	// 	} else if (m = 10){
	// 		return 'November';
	// 	} else {
	// 		return 'December';
	// 	}
	// };

	// var dateExtension = function(d) {
	// 	s = d.toString().split('');
	// 	y = s.pop();
	// 	var extension = '';
	// 	if (y = 0 || y > 3){
	// 		extension = 'th';
	// 	} else if (y = 1){
	// 		extension = 'st';
	// 	} else if (y = 2){
	// 		extension = 'nd';
	// 	} else {
	// 		extension = 'rd';
	// 	};
	// 	return d + extension;
	// };

	// var yearConversion = function(y) {
	// 	var s = y.toString().split('');
	// 	s.shift();
	// 	s.toString();
	// 	console.log('20' + s);
	// }
	// yearConversion(year);

	// var day = dayName(dayIndex);
	// var month = monthName(monthIndex);
	// var date = dateExtension(dateIndex);
	// var year = 

	// console.log(day);
	// console.log(month);
	// console.log(date);
	// // console.log(year);

	// var dateString = $(day + ' ' + month + ' ' + date + ', ' + year);
	// console.log(dateString);
	// var dayblock = $('<div class="day"></div>');

	// $('.main').append(day);
	// $(dayBlock).text(now);
	// var now = new Date($.now());
	// var dayIndex = now.getDay();
	// var dayName = function(d){
	// 	if (d === 0){
	// 		return 'Sunday';
	// 	} else if (d === 1){
	// 		return 'Monday';
	// 	} else if (d === 2){
	// 		return 'Tuesday';
	// 	} else if (d === 3){
	// 		return 'Wednesday';
	// 	} else if (d === 4){
	// 		return 'Thursday';
	// 	} else if (d === 5){
	// 		return 'Friday';
	// 	} else {
	// 		return 'Saturday';
	// 	} 
	// };
	// var day = dayName(dayIndex);


	// var today = moment().format('ll');
	// console.log(today);
	var datePlus = -1;
	var listDay = $('<div class="day"></div>');
	// var addAppointmentForm = $('<form class="appointment-form"><input type="time" class="appointment-time"><textarea class="appointment-text"></textarea></form>')
	
	var dateMaker = function (){
		var d = moment().add(datePlus, 'days').format("MMM Do YY");
		datePlus = datePlus + 1;
		return d;
	}
	var date = dateMaker();
	
	var addDay = function(){
		date = dateMaker();
		listDay = listDay.clone();
		$('.calendar').append(listDay);
		$(listDay).text(date);
		$(listDay).append('<div class="appointments"><div class="title">Appointments:</div></div><button type="button" class="add-appointment">Add Appointment</button>');
	};
	
	addDay();
	addDay();
	addDay();
	addDay();
	addDay();
	addDay();
	addDay();
	addDay();

	$(document).scroll(function(){
			var appendNewLocation = $(window).height();
			var bottom = $(document).scrollTop() + appendNewLocation;
			if (bottom > appendNewLocation){
				appendNewLocation = appendNewLocation + 110;
				addDay();
				}
		});	

	$(document).on('click', '.add-appointment', function(){
		
		var timeInfo = '';
		var textInfo = '';
		var submittedInfo = '';
		var addAppointmentForm = $('<form class="appointment-form"><input type="time" class="appointment-time"><textarea class="appointment-text"></textarea></form>');
		var info = $('<div class="appointment"><button class="delete"></button><div class="info"></div></div>');
		var deleteButton = $('<button class="delete"></button>');
		
		$(this).closest('.day').find(info).text('');

		$(this).closest('.day').append('<button type="button" class="submit-appointment">Add Appointment</button>');
		$(this).closest('.day').find('.appointments').append(addAppointmentForm);
		$(this).closest('.day').find('.appointment-form').show();
		$(this).closest('.day').find('.appointment-time').on('blur', function(){
			timeInfo = $(this).closest('.day').find('.appointment-time').val();
		});
		$(this).closest('.day').find('.appointment-text').on('blur', function(){
			textInfo = $(this).closest('.day').find('.appointment-text').val();
		});

		
	});
	
	
		
		
		$(document).on('click', '.submit-appointment', function(){

			var timeInfo = $(this).closest('.day').find('.appointment-time').val();
			var textInfo = $(this).closest('.day').find('.appointment-text').val();
			var info = $('<div class="appointment"><div class="info"></div></div>');
			var deleteButton = $('<button class="delete"></button>');
			$(this).closest('.day').find(info).text('');
			submittedInfo = '\n' + timeInfo + '  ' + textInfo;
			$(info).text(submittedInfo);
			$(this).closest('.day').find('.appointments').append(info, deleteButton);
			$('.delete').text('X');
			$('.appointment-form').hide();	
			$('.submit-appointment').hide();
			$(this).closest('.day').find('.appointment-form').remove();

		});

		$('.delete').on('click', function(){
			$(this).closest('.appointment').remove();
		});













































});