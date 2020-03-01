How to use this Jquery plugin

1. Create a div element and give it a class "slider"
2. add images inside the Div and give one of the images a class called Active.
3. then add the jquery api '<script src="https://code.jquery.com/jquery-3.4.1.js"></script>'
4. add the css file inside the header element

Simple Example
<!DOCTYPE html>
<html>
<head>
	<title>Page Title</title>
	<link href="sliderStyle.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div class="slider">
		<img src="image/hsbook.jpg" class="active">
		<img src="image/profilehs.jpg">
		<img src="image/alex-seinet-8dmtbpJJJ7k-unsplash.jpg">
	</div>
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script src="sliderScript.js"></script>
</body>
</html>
