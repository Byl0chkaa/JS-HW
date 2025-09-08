function cloner(obj) {
    if (obj === undefined || obj === null) {
        throw new Error('Object is not defined');
    }

    if (typeof obj === 'number' && isNaN(obj)) {
        throw new Error('Object is not defined');
    }
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionsClone = obj[key].bind({});
                functions.push({functionsClone, key});
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.functionsClone;
        }
        console.log(cloneObj);
        return cloneObj;
    }

const clone = cloner({
    id: 1, name: 'Oleg', age: 20, sayHello: function () {
        console.log('Hello');
    }
});