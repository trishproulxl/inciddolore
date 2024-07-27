function touchFunction(op, opt) {
    console.log(`Touching with op=${op} and opt=${opt}`);
}

const context = {
    touch: touchFunction
};

// Usage
context.touch('press', { duration: 100 });
