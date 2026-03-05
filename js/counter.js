export class Counter {
    constructor(selector, initialValue = 0) {
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.button = document.createElement("button");

        // Add Buttons, decrement, reset
        // this.decrement
        // this.reset

        // set button text
        this.button.textContent = "Increment";
        // Set new button text

        // Append display and button into the container div
        container.appendChild(this.display);
        container.appendChild(this.button);
        // append new buttons
        
        // When this first get mounted, update the display
        this.update();

        this.button.addEventListener("click", () => {
            this.increment()
        });
        // add new button event listeners
    }

    // State methods
    increment() {
        this.count++;
        this.update();
    }
    // add new state methods, and "if" restrictions
    // // decrement() {
    //     this.count--;
    //     this.update();
    // }
    // // reset() {
    //     this.count=0;
    //     this.update();
    // }


    update() {
        this.display.textContent = `Count: ${this.count}`;

        // classList.toggle() this.count===0;
    }
}


// Counter is the super class
// StepCounter is the sub class


class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        // add step property
        // this.step = step;
    }
    // increment() {}
    // decrement() {} both at different values
}   