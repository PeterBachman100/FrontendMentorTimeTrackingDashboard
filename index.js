document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('nav ul li');
  const dataSections = document.querySelectorAll('.card-data div[data-time]');

  buttons.forEach(button => {
	button.addEventListener('click', () => {
	  buttons.forEach(btn => btn.classList.remove('selected'));
	  button.classList.add('selected');

	  const timePeriod = button.getAttribute('data-time');

	  dataSections.forEach(section => {
		if (section.getAttribute('data-time') === timePeriod) {
		  section.classList.remove('hidden');
		} else {
		  section.classList.add('hidden');
		}
	  });
	});
  });
});

