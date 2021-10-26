const orderCoffee = (type) => {
    const types = {
        SPECIAL: 'SPECIAL',
        REGULAR: 'REGULAR'
    }

    if(Object.values(types).indexOf(type) === -1) {
        throw new Error('coffee error')
    } else {
        console.log(`preparing ${type} coffee`)
    }
}

const increaseSalary = (array, nr) => {
    if(!Array.isArray(array)) {
        throw new Error('array bad type')
    } else if (typeof nr !== "number") {
        throw new Error('number bad type')
    } else {
        for (let i = 0; i < array.length; i++) {
            array[i] += (nr / 100) * array[i] 
        }
    }
}

const arr = new Array(1000, 400, 3000)

try {
    // orderCoffee('REGULAR')
    // orderCoffee('Sweet_COFFEE_NO_SUGAR_CO_CAFFEINE')
    increaseSalary(arr, 10)
    console.log(arr)
    increaseSalary(10, 10);
    increaseSalary(arr, 'da')
} catch (err) {
    console.error(err)
}