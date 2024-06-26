// 変数宣言:letとconst
// constは可変（ミュータブル）なオブジェクトのプロパティを不変にする保護効果はない
const obj = { a: 1 };

// Error: Cannot assign to 'obj' because it is a constant or a read-only property
// obj = { a: 2 }; // 再代入は不可

obj.a = 2; // プロパティの変更はできる

// 配列も同様
const arr = [1, 2];

// Cannot assign to 'arr' because it is a constant.
// arr = [3, 4]; // 再代入は不可

arr.push(3); // 要素の変更はできる

// 【変数宣言と型注釈】
// 変数宣言時にどんな値を代入可能かを指定できる（そのことを型注釈又は型アノテーションと言う）
const num: number = 1;
