var model = {
    ukuranPapan: 7,
    numKakashis: 3,
    panjangKakashi: 3,
    kakashiKetangkep: 0,

	kakashis: [
		{ locations: [0, 0, 0], pukuli: ["", "", ""] },
		{ locations: [0, 0, 0], pukuli: ["", "", ""] },
		{ locations: [0, 0, 0], pukuli: ["", "", ""] }
	],

	cari: function(tebakan) {

		for(var i = 0; i < this.numKakashis; i++) {
			var kakashi = this.kakashis[i];
			var index = kakashi.locations.indexOf(tebakan);

			if ( kakashi.pukuli[index] === "pukul" ) {
				view.displayPesan("Waduh, kamu udah cari ditempat itu");
				return true;
			} else if ( index >= 0 ) {
				kakashi.pukuli[index] = "pukul";
				view.displayPukul(tebakan);
				view.displayPesan("pukul!");

				if ( this.udahKetangkep(kakashi) ) {
					view.displayPesan("Kamu menghancurkan bunshin kakashi!");
					this.kakashiKetangkep++;
				}
				return true;
			}
			// $('#tebakanInput').focus();
		}
		view.displaySalah(tebakan);
		view.displayPesan("Kamu salah");
		return false;
	},

	udahKetangkep: function(kakashi) {
		for (var i = 0; i < this.panjangKakashi; i++) {
			if (kakashi.pukuli[i] !== "pukul") {
				return false;
			}
		}
		return true;
	},

	generatekakashiLocations: function() {
		var locations;
		for (var i = 0; i < this.numKakashis; i++) {
		do {
				locations = this.generatekakashi();
		} while (this.collision(locations));
			this.kakashis[i].locations = locations;
		}
	},

	generatekakashi: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { // horizontal
			row = Math.floor(Math.random() * this.ukuranPapan);
			col = Math.floor(Math.random() * (this.ukuranPapan - this.panjangKakashi + 1));
		} else { // vertical
			row = Math.floor(Math.random() * (this.ukuranPapan - this.panjangKakashi + 1));
			col = Math.floor(Math.random() * this.ukuranPapan);
		}

		var newkakashiLocations = [];

		for (var i = 0; i < this.panjangKakashi; i++) {
			if (direction === 1) {
				newkakashiLocations.push(row + "" + (col + i));
			} else {
				newkakashiLocations.push((row + i) + "" + col);
			}
		}
		return newkakashiLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numKakashis; i++) {
			var kakashi = this.kakashis[i];
			for (var j = 0; j < locations.length; j++) {
				if (kakashi.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
};

var view = {
	displayPesan: function(msg) {
		var pesan = document.getElementById("pesan");
		pesan.innerHTML = msg;
	},
	displayPukul: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "pukul");
	},
	displaySalah: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "salah");
	}
};

var controller = {
	jmlTebakan: 0,

	processtebakan: function(tebakan) {
		var location = parsetebakan(tebakan);

		if (location) {
			this.jmlTebakan++;
			var pukul = model.cari(location);
			if (pukul && model.kakashiKetangkep === model.numKakashis) {
				view.displayPesan("Kamu menangkap Kakashi yang asli dalam " + this.jmlTebakan + " tebakan");
			}
		}
	}
};

function parsetebakan(tebakan) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (tebakan === null || tebakan.length !== 2) {
		alert("Masukan koordinat papannya!.");
	} else {
		var karakterPertama = tebakan.charAt(0);
		var row = alphabet.indexOf(karakterPertama);
		var column = tebakan.charAt(1);
		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.ukuranPapan || column < 0 || column >= model.ukuranPapan) {
				alert("Tebakan diluar papan!");
		} else {
			return row + column;
		}
	}
	return null;
}

// event handlers
function handlecariButton() {
	var tebakanInput = document.getElementById("tebakanInput");
	var tebakan = tebakanInput.value.toUpperCase();
	controller.processtebakan(tebakan);
	tebakanInput.value = "";
}

function handleKeyPress(e) {
	var cariButton = document.getElementById("cariButton");
	// in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;
	if (e.keyCode === 13) {
		cariButton.click();
		return false;
	}
}

window.onload = init;

function init() {
	// cari! button onclick handler
	var cariButton = document.getElementById("cariButton");
	cariButton.onclick = handlecariButton;
	// handle "return" key press
	var tebakanInput = document.getElementById("tebakanInput");
	tebakanInput.onkeypress = handleKeyPress;
	model.generatekakashiLocations();
}
