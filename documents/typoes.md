# TypeScriptの型のあれこれ

[TOC]

## プリミティブ型

基本の型。

- string
- number
- boolean
- symbol
- bigint
- null
- undefined

```typescript
const a: number = 3;

const b: string = a; // error
```

## リテラル型

[プリミティブ型](#プリミティブ型)を細分化したもの。

文字列、数値、真偽値がある。`'foo'`や`3`、`true`などと記述

```typescript
const a: 'foo' = 'foo';
const b: 'bar' = 'foo'; // error
```

```typescript
const a: 'foo' = 'foo';
const b: string = a;
```

### リテラル型と型推論

```typescript
const a = 'foo'; // aは'foo'型を持つ
const b: 'bar' = a; // error: Type '"foo"' is not assignable to type '"bar"'.
```

`'foo'`というリテラルの型が`'foo'`型であると推論される。ただし、constを使用して変数を宣言した場合であり、letやvarなどを使用して変数を宣言すると後々変数を書き換えることを意図していると解釈され最初に`'foo'`が入った場合も`'foo'`型にはならない。（型注釈を入れることでリテラル型をもたせることは可能）

```typescript
let a = 'foo'; // a: string
const b: string = a;
const c: 'foo' = a; // error
```

## オブジェクト型

- オブジェクトとは
  - 任意の数のプロパティがそれぞれ値を保持している構造。
  - `{foo: string; bar: number}`などという型。
- Interfaceとは
  - オブジェクト型に名前をつけることができるもの。

```typescript
interface MyObj {
  foo: string;
  bar: number,
}

const a: MyObj = {
  foo: 'foo';
  bar: 3,
};

// error (barはnumberのみである)
const a: MyObj = {
  foo: 'foo';
  bar: 'HOGEHOGE'
};

// error (barがない)
const b: MyObj = {
  foo: 'foo',
};
```

```typescript
interface MyObj {
  foo: string;
  bar: number;
}

interface MyObj2 {
  foo: string;
}

const a: MyObj = {foo: 'foo', bar: 3};
const b: MyObj2 = a;  // MyObj2はMyObjの型の一部と考えることができる。（部分型）
```

## 配列型

`[]`と表す。また、ジェネリックが導入されて以降は`Array<number>`とも書くことが可能。

```typescript
const foo: number[] = [0, 1, 2, 3];
foo.push(4);
```

## 関数型

`(foo: string, bar: number) => boolean`というように表現される。

```typescript
const f: (foo: string) => number = func;

function func(arg: string): number {
  return Number(arg);
}
```

### 関数の部分型関係

`(obj: MyObj2)=>void`型の値を`(obj: MyObj)=>void`型の値として扱うことができる。逆はerror。

```typescript
interface MyObj {
  foo: string;
  bar: number;
}

interface MyObj2 {
  foo: string;
}

const a: (obj: MyObj2) => void = () => {};
const b: (obj: MyObj) => void = a;
```

```typescript
const f1: (foo: string) => void = () => {};
const f2: (foo: sting, bar: number) => void = f1;
```

## 可変長引数

最後の引数と`...bar`のようにすると、それ以降の引数が全部入った配列は`bar`に渡される。

JavaScriptでの例:

```javascript
const func = (foo, ...bar) => bar;

console.log(func(1, 2, 3)); // [2, 3]
```

TypeScript:

```typescript
const func = (foo: string, ...bar: number[]) => bar;

func('foo');
func('bar', 1, 2, 3);
```

## void型

主に関数の返り値の型として使われ、「何も返さない」ということを表す。

```typescript
const a: void = undefined;
const b: undefined = a; // error
```

```typescript
function foo(): void {
  console.log('hello');
  // return undefined;
}
```

## any型

何でもありな型。プログラマの敗北。システムを無視。

```typescript
const a: any = 3;
const b: string = a;
```

## クラスの型

```typescript
class Foo {
  method(): void {
    console.log('Hello World');
  }
}
// class Fooのインスタンスの型Fooを指定する。
const obj: Foo = new Foo();
```

interfaceと代替可能な例:

```typescript
interface MyFoo {
  method: () => void;
}

class Foo {
  method(): void {
    console.log('Hello world');
  }
}

const obj: MyFoo = new Foo();
const obj2: Foo = obj;
```

## ジェネリックス

いわゆる多層型。`Foo<S, T>`のようにすることで型の定義の中でそれらの名前を型変数として使うことができる。クラス定義や関数定義でも型変数を導入できる。

```typescript
interface Foo<S, T> {
  foo: S;
  bar: T;
}

const obj: Foo<number, string> = {
  foo: 3,
  bar: 'int',
};
```

```typescript
class Foo<T> {
  constructor(obj: T) {
  }
}

const obj1 = new Foo<string>('foo');

function func<T>(obj: T): void {
}

func<number>(3);
```

```typescript
function func<T>(obj: T): void {
}

const f: <T>(obj: T)=> void = func;
```

## タプル型

配列をタプルの代わりとして用いることにしている。

```typescript
const foo: [string, number] = ['foo', 5];

const str: string = foo[0];

function makePair(x: string, y: number): [string, number] {
  return [x, y];
}
```
