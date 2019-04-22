function randomBackground(time) { // daily, weekly, or every time
	// var categories = ['buildings', 'food', 'nature', 'people', 'technology' 'objects'];
	var categories = ['buildings', 'nature', 'objects'];
	var randomCategory = categories[Math.floor((Math.random() * categories.length))];
	var photo = new UnsplashPhoto();

	if (time == 'daily' || time == 'weekly')
		photo.all().randomize(time).fromCategory(randomCategory).fetch();
	else
		photo.all().fromCategory(randomCategory).fetch();

	document.body.style.backgroundImage = "url(" + photo.url + ")";
}

randomBackground();
