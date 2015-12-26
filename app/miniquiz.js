$(document).ready(function() {

    quizzes.forEach(function(quiz, index) {
    	quiz.title = "Question " + (index + 1);
    	quiz.group = "group" + index;
    	// quiz.code = unescape(quiz.code);
    	quiz.options = quiz.options.map(function(opt, oi) {
    		return {
    			id: "option" + index + '' + oi,
    			value: opt,
    			hit: oi === quiz.index ? 1 : 0
    		};
    	});
    });

    var cardtpl = $('#tpl-card').html();
    cardtpl = decodeEntities(cardtpl);
    var $container = $('.container');
    quizzes.forEach(function(quiz) {
    	var card = ejs.render(cardtpl, quiz);
    	$container.append(card);
    });

	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      //expandable: true
    });

    $('.result-right').hide();
    $('.result-wrong').hide();

    $('input[type="radio"]').on('change', function() {
    	var $this = $(this);
    	// var group = $this.attr('name');
    	var hit = $this.data('hit') == 1;

    	if (hit) {
    		$this.siblings('.result-right').show();
    		$this.siblings('.result-wrong').hide();
    	} else {
    		$this.siblings('.result-right').hide();
    		$this.siblings('.result-wrong').show();
    	}

    	return false;
    });

    $('.toggleSpec').on('click', function() {
    	$(this).closest('.actions').siblings('.spec').toggleClass('show');
    });

    // initTimer();
    $clock.show();
    setInterval(setTimer, 1000);
    // initTimer();
    //setTimer();
});

function decodeEntities(encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}

var $clock = $('#missswiss');
function setTimer() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    var time = getTimeText(hour) + ':' + getTimeText(minute) + ':' + getTimeText(second);

    $clock.html(time);

    // setTimeout(setTimer, 1000);
}

function getTimeText(t) {
    return t > 9 ? '' + t : '0' + t;
}