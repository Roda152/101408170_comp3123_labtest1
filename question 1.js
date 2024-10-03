function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject(new Error("Input should be an array"));
        }

        const filteredArray = arr
            .filter(item => typeof item === 'string')
            .map(item => item.toLowerCase());

        resolve(filteredArray);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));
