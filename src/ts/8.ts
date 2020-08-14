/*
 * 再帰処理の実装（フィボナッチ数列）
 */

function fibonacci(n: number): number {
    if (n <= 1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

function main(): void {
    const inputNumber = 10;
    const outputNumber: number = fibonacci(inputNumber);

    console.log(outputNumber);
}
main()
