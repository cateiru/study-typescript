function main_1(): void {
    const num: number = 10;

    console.log(`number of ${num}`);

    const li: string[] = ['Hello', 'World'];

    for (const listIndex in li){
        console.log(`index of ${listIndex}`);
    }
}

main_1()
