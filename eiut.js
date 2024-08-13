// Defaults for basic mark types

const defaultMarkTypes = {
    point: {
        size: 5,
        color: 'blue',
        opacity: 0.8
    },
    line: {
        strokeWidth: 2,
        color: 'black',
        opacity: 1.0
    },
    bar: {
        width: 20,
        color: 'green',
        opacity: 0.9
    }
};

// Example usage:
function createMark(type, customProps = {}) {
    if (!defaultMarkTypes[type]) {
        throw new Error(`Unknown mark type: ${type}`);
    }

    const markProps = {
        ...defaultMarkTypes[type],
        ...customProps
    };

    // Code to create the mark with `markProps` goes here
    // For demonstration, we'll just return the properties
    return markProps;
}

// Usage examples:
console.log(createMark('point')); // { size: 5, color: 'blue', opacity: 0.8 }
console.log(createMark('line', { color: 'red' })); // { strokeWidth: 2, color: 'red', opacity: 1.0 }
console.log(createMark('bar', { width: 30, opacity: 0.5 })); // { width: 30, color: 'green', opacity: 0.5 }
