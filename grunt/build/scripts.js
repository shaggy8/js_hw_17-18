jQuery(function () {
	'use strict'
	var originTest = {
		'test1': {
			'question': 'На клавіатурі кнопки тиснемо, а на екрані\
					нічого не відбувається. Що зробили не так?',
			'answers': [
				{'correct': 'Не вмикнули комп\'ютера'},
				{'wrong': 'Вчора щось не те з\'їли'},
				{'wrong': 'Ананаси і єноти!!!'}
			]
		},
		'test2': {
			'question': 'Вмикнули бравзера, а всі сайти якось\
					дивно відображаються. Як виправити недолік?',
			'answers': [
				{'correct': 'Під\'єднати інтернет'},
				{'correct': 'Не користуватися бравзерами Internet Explorer'},
				{'wrong': 'Постукати по монітору'}
			]
		},
		'test3': {
			'question': 'На сайтах все шевелиться, анімується,\
					змінює колір — це...',
			'answers': [
				{'correct': 'javaScript'},
				{'wrong': 'хтось трясе твого монітора'},
				{'wrong': 'класно!'}
			]
		},
	};

	localStorage['madTest'] = JSON.stringify(originTest);
	var test = JSON.parse(localStorage['madTest']);


	writeTest();
	$('input[type=submit]').click(checkResults);
	$('.modal').click(hideModal);


	function getTest() {
		for (var key in test) {
			test[key]['answers'] = test[key]['answers'].sort(function() {
				return Math.random() - 0.5});
		}
		return test;
	};

	function writeTest() {
		$('ol').html(tmpl( 'madtest', {'test': getTest()} ));
	}


	function checkResults(event) {
		var val = 0;
		var diagnos;

		$('input:checked').each(function() {
			if ($(this).attr('data-value') == 'correct') {
				val++;
			} else {
				val--;
			}
		});

		if (val == 4) {
			diagnos = 'Ви маєте всі шанси стати програмістом!!!';
		} else if (val == 3) {
			diagnos = 'Ви трохи розбираєтесь у комп\'ютерах,\
					але ви не програміст.';
		} else if (0 < val && val < 3) {
			diagnos = 'Шлях програміста вам не світить...';
		} else if (val == 0) {
			diagnos = 'От не треба клацати шо попало!';
		} else {
			diagnos = 'Ану геть від компа, доки щось не зламав!!!';
		}

		$('.modal-window-content').text(diagnos);
		$('.modal').fadeIn(400, 'easeOutCubic');
		$('.modal-window').css('margin-top', function() {
			return $('.modal').height() / 2 - $('.modal-window').height();
		});
		event.preventDefault();
	}


	function hideModal(event) {
		if ($(event.target).hasClass('close')) {
			$('.modal').fadeOut(400, 'easeOutCubic');
		}
		writeTest();
		event.preventDefault();
	}
});