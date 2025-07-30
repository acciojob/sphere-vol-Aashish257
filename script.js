function volume_sphere() {
    //Write your code here
	event.preventDefault(); 

	const radiusValue = parseFloat(document.getElementById("radius").value);

	let volume;

	if (radiusValue < 0 || isNaN(radiusValue)) {
		volume = NaN; // explicitly assign NaN
	} else {
		volume = (4 / 3) * Math.PI * Math.pow(radiusValue, 3);
	}

	document.getElementById("volume").value = volume.toFixed(4); 
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
