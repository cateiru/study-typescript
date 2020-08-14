/*
    引数の情報からsolidityのプログラムを生成する。

*/

export interface Node {
    name: string,
    opType: string,
    inputs: ReadonlyArray<number>,
    outputs: ReadonlyArray<number>
}

export interface Input {
    name: string,
    outputs: ReadonlyArray<number>
}

export interface Output {
    name: string,
    outputs: ReadonlyArray<number>
}

export interface Data {
    inputs: ReadonlyArray<Input>,
    output: Output,
    nodes: ReadonlyArray<Node>,

}

export function convert(data: Data): string[] {
    // TODO: 入力すべてに対しsolidityの変数宣言をする。
    // TODO: その変数に入力するようなfunctionを作成
    // TODO: outputの変数作成
    // TODO: 計算

    const contractName = 'Calculation';
    const inputFunctionName = 'input_';
    const evaluateFunctionName = 'evaluate';
    const calculate = 'a + b';


    const solidity = ['pragma solidity ^0.6.9;', ''];

    solidity.push(`contract ${contractName} {`)

    for(const element of data.inputs){
        solidity.push(`  int256 public ${element.name};`);
    }

    for(const element of data.inputs){
        solidity.push(
            '',
            `  function ${inputFunctionName + element.name}(int256 input_number) public {`,
            `    ${element.name} = input_number;`,
            '  }'
            )
    }

    solidity.push(
        '',
        `  function ${evaluateFunctionName}() public view returns (int256) {`,
        `    return ${calculate};`,
        '  }'
    )

    solidity.push('}');

    return solidity;

}
