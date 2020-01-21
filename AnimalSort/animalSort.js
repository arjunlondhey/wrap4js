
const animalSort = (animalList) => {
    return animalList.sort((animal1, animal2) => {
        //        console.log(typeof animal1.numberOfLegs)
        if (animal1.numberOfLegs > animal2.numberOfLegs) {
            return 1;
        } else if (animal1.numberOfLegs < animal2.numberOfLegs) {
            return -1;
        }
        return animal1.name.toUpperCase() >= animal2.name.toUpperCase() ? 1 : -1;
    })
}

module.exports = { animalSort }