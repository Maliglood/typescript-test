import * as $ from "jquery";

export class jqueryTextComponent {
    constructor() {
    }

    /**
     * Пишет "Hello" в элемент по переданному селектору.
     * @param selector
     * @returns Успешность действия.
     */
    public sayHello(selector: string): boolean {
        let element = $(selector);
        if (element.length > 0) {
            element.html("Hello!");
            return true;
        } else {
            return false;
        }
    }

    public sayTsIsCool(): void {
        alert("TS is cool!");
    }
}