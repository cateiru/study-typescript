import * as fs from 'fs';
import {Data, Node, Input, Output, convert} from './7';

function main(): void {

    const node1: Node = {
        name: 'tf_op_layer_add/add',
        opType: 'Add',
        inputs: [1, 2],
        outputs: [3]
    }

    const input1: Input = {
        name: 'a',
        outputs: [0]
    }

    const input2: Input = {
        name: 'b',
        outputs: [1]
    }

    const output: Output = {
        name: 'tf_op_layer_truediv',
        outputs: [3]
    }

    const inputData: Data = {
        inputs: [input1, input2],
        output: output,
        nodes: [node1]
    }

    const path = 'test.sol';
    const solidity: string[] = convert(inputData);

    console.log(solidity);
    fs.writeFileSync(path, solidity.join('\n'), 'utf-8');
}

main();
