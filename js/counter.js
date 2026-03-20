export class Counter {
    constructor(selector, initialValue = 0) {
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.IncButton = document.createElement("button");
        this.DecButton = document.createElement("button");
        this.ResButton = document.createElement("button");
        // Add Buttons, decrement, reset
        // this.decrement
        // this.reset

        // set button text
        this.IncButton.textContent = "Increment";
        this.DecButton.textContent = "Decrement";
        this.ResButton.textContent = "Reset";
        // Set new button text

        // Append display and button into the container div
        container.appendChild(this.display);
        container.appendChild(this.IncButton);
        container.appendChild(this.DecButton);
        container.appendChild(this.ResButton);
        // append new buttons
        
        // When this first get mounted, update the display
        this.update();

        this.IncButton.addEventListener("click", () => {
            this.increment();
        });

        this.DecButton.addEventListener("click", () => {
            this.decrement();
        })

        this.ResButton.addEventListener("click", () => {
            this.reset();
        })
        // add new button event listeners
    }

    // State methods
    increment() {
        this.count++;
        this.update();
    }

    decrement() {

        if (this.count > 0) {
            this.count--;    
        } else {
            return;
        }
        
        this.update();
    }

    reset() {
        this.count = 0;
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


export class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        // super is the keyword that allows parent inheritance
        super(selector, initialValue);
        this.step = step;
        // add step property
        // this.step = step;
    }

    mount() {
        super.mount();

        const stepContainer = document.querySelector(this.selector);

        this.stepDisplay = document.createElement("div");
        this.stepButtonInc = document.createElement("button");
        this.stepButtonInc.textContent = "Increment by Step";

        this.stepButtonDec = document.createElement("button");
        this.stepButtonDec.textContent = "Decrement by Step";

        stepContainer.appendChild(this.stepDisplay);
        stepContainer.appendChild(this.stepButtonInc);
        stepContainer.appendChild(this.stepButtonDec);
    }

    // override parent increment
    increment() {
        this.count = this.count + this.step;
        this.update();
    }

    decrement() {
        this.count = this.count - this.step;
        this.update();
    }
    // increment() {}
    // decrement() {} both at different values
}   