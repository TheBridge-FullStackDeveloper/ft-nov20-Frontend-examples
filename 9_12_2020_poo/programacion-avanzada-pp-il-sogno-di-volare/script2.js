const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
       let pos =  Math.floor(Math.random() * 5);
       return this.civilImages[pos];
    }
    
    getRandomMilitary() {
        let pos =  Math.floor(Math.random() * 5);
        return this.civilImages[pos];
    }
    
    getAll() {
        return this.civilImages.concat(this.militaryImages);
    }
}

class Painter {
    constructor() {
        this.createGallery();
        this.$gallery;
    }

    createGallery() {
        let section = document.createElement("section")
        this.$gallery = section;
        document.body.appendChild(this.$gallery);

    }

    createImageTag(imageUrl) {
        let picture = document.createElement("picture")
        let img = document.createElement("img")
        img.src = imageUrl
        picture.appendChild(img)
        return picture
    }

    paintSingleImage(imageUrl) {
        let imageTag = this.createImageTag(imageUrl)
        console.log(imageUrl)
        this.$gallery.appendChild(imageTag)
    }

    paintMultipleImages(arrayOfImages) {
        for(let i=0;i<arrayOfImages.length;i++){
            this.paintSingleImage(arrayOfImages[i])
        }
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();