class MyClass {
    call(): void {
        printer();
    }
}

function printer(): void {
    console.log('Hello World!!');
}

const obj: MyClass = new MyClass();
obj.call();
