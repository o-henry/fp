document.querySelector("#msg").innerHTML = "<h1>Hello world!</h1>";

function printMessage(elementId, format, message) {
    document.querySelector(
        `#${elementId}`
    ).innerHTML = `<${format}>${message}</${format}>`;
}

const printMessage = run(addToDom("msg"), h1, echo);
printMessage("Hello world!");

/**
 * impure
 */

let counter = 0;

function increment() {
    return ++counter;
}

const _increment = (counter) => counter + 1;
