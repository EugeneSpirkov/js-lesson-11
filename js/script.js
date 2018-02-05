'use strict'

$(function () {
	

		var test = [
			
				{
					question: 'What is your name?',
					answers: [
						'Eugene',
						'Max',
						'David',
					],
					rightAnswer: 'Eugene',
				},

				{
					question: 'Where are you from?',
					answers: [
						'USA',
						'China',
						'Ukraine',
					],
					rightAnswer: 'Ukraine',
				},

				{
					question: 'Do you have a bentley?',
					answers: [
						'Yes',
						'No',
						'Soon',
					],
					rightAnswer: 'Soon',
				},


		]// end test






	localStorage.setItem('data', JSON.stringify(test)); //			записываем в хранилище строку с данными вопросов и ответов
	var questions = JSON.parse(localStorage.getItem('data'));//		получаем с хранилища строку с данными и сразу делаем из неё object


	var html = $('#questionsGenerate').html();//					с помощью шаблонизатора отображаем на странице все вопросы и ответы
	var content = tmpl(html, {data : questions});
	$('#form').append(content);





	function checkAnswers() {//										ф-я проверки правильности ответов
		
			var rightAnswers = [];//								создаём массив правильных ответов и циклом заполняем его 

				for (var i = 0; i < questions.length; i++) {
					rightAnswers.push(questions[i].rightAnswer)
				}

			var userAnswers = [];//									создаем массив ответов пользователя и заполняем его

				$('input:radio:checked').each(function() {
					userAnswers.push($(this).val());
				})


			if (rightAnswers.join() == userAnswers.join()) {		//приведя к строкам оба массива сравниваем их
				$('.modal-content h2').html('You are right');		//и в зависимости от правильности ответов меняем контент модального окна
			} else {
				$('.modal-content h2').html('You made a mistake')
			}



	}//end checkAnswers



	var checkButton = $('#checkButton');
	checkButton.on('click', checkAnswers);


});