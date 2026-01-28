# 🍽 自作料理API（Recipe API）

## 概要

本APIは、日本で一般的に食べられている料理を中心にした **料理データAPI** です。
HTML / CSS / JavaScript のみを使用し、GitHub Pages 上で JSON ファイルを公開することで、
サーバーサイド言語（PHP等）を使わずに API として利用できる構成になっています。

---

## 公開URL（エンドポイント）

```
https://＜GitHubユーザー名＞.github.io/＜リポジトリ名＞/data/recipes.json
```

上記URLにアクセスすると、すべての料理データを JSON 形式で取得できます。

---

## データ形式

### recipes.json

```json
[
  {
    "id": 1,
    "name": "唐揚げ",
    "category": "肉料理",
    "ingredients": [
      "鶏もも肉",
      "醤油",
      "酒",
      "にんにく",
      "生姜",
      "片栗粉"
    ]
  }
]
```

---

## フィールド説明

| キー          | 型      | 説明              |
| ----------- | ------ | --------------- |
| id          | number | 料理を識別する一意のID    |
| name        | string | 料理名             |
| category    | string | 料理カテゴリ（後から変更可能） |
| ingredients | array  | 使用する主な材料（3〜9個）  |

---

## カテゴリ例

* 肉料理
* 魚料理
* 中華
* 洋食
* 和惣菜
* サラダ
* 汁物
* 麺類
* ご飯もの
* 丼もの

※ カテゴリは表示側（JavaScript）で自由に再分類可能です。

---

## 使用例（JavaScript）

```javascript
fetch('data/recipes.json')
  .then(res => res.json())
  .then(recipes => {
    const meatDishes = recipes.filter(r => r.category === '肉料理');
    console.log(meatDishes);
  });
```

---

## このAPIの特徴

* 日本の家庭料理・定番料理中心
* 食材数を 3〜9 個に統一し、扱いやすい
* データは 1 ファイル管理でメンテナンスしやすい
* フロントエンドのみで API 利用が可能

---

## 想定用途

* 学校課題（API利用・JSON学習）
* フロントエンド練習（fetch / filter / map）
* 献立アプリのモックAPI
* ポートフォリオ作品

---

## 作成者

* 作成者：綾音
* 作成方法：HTML / CSS / JavaScript
* 公開方法：GitHub Pages

---

## 補足

本APIは学習目的で作成されたものであり、実際の分量や調理手順は含まれていません。
材料データは代表的なものを記載しています。
