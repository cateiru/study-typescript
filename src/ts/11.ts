function main_2(): void {
    const a = [];
    for (let i = 0; 10 >= i; ++i){
        a.push(i);
    }

    // ~~() 2重の否定ビット演算子をしようすることでMath.floor()の高速な代替として利用できる

    for (const index in a){
        console.log(~~(a[index] + 0.11));
        console.log(Math.floor(a[index] + 0.11));
    }
}

main_2();
