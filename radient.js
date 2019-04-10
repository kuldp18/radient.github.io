var generate = document.querySelector('.generate-btn');
var area = document.querySelector('.gradient-area');
// var randomAngle = Math.floor(Math.random() * (180 + 1));
// console.log(randomColor);
// Working!!!
// document.body.style.backgroundImage = 'linear-gradient(84deg, ' + randomColor1 + ',' + randomColor2 + ')';
generate.addEventListener('click', function() {
	var randomColor1 = '#000000'.replace(/0/g, function() {
		return (~~(Math.random() * 16)).toString(16);
	});
	var randomColor2 = '#000000'.replace(/0/g, function() {
		return (~~(Math.random() * 16)).toString(16);
	});
	area.style.backgroundImage = 'linear-gradient(72deg, ' + randomColor1 + ',' + randomColor2 + ')';
});
