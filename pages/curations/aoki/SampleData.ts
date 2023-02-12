"use strict";

type UserType = {
  icon: string;
  name: string;
};

type ContentType = {
  id: number;
  image: string;
  title: string;
  evaluation: number;
  reviews: number;
  user: UserType;
  price: number;
};

type CardType = {
  title: string;
  subtitle: string;
  contents: ContentType[];
};

type CategoryPageType = {
  id: number;
  title: string;
  subtitle: string;
  products: CardType[];
};

export const SampleEcData: CategoryPageType[] = [
  {
    id: 66,
    title: "ECサイト運営特集",
    subtitle:
      "ECサイト作成からWeb集客のお手伝いまで！お客様の課題に合わせたECサイトを運営するための多様なサービスをそろえました。",
    products: [
      {
        title: "ECサイト制作",
        subtitle:
          "自社ECサイトから各ECモールでのストア構築まで制作依頼できます。 いますぐ始めたい方からカスタマイズの方法や現状の改善まで、幅広いサイト制作を気軽に相談できます。",
        contents: [
          {
            id: 1,
            image: "画像",
            title: "Shopifyで日英越境ECサイトをつくります",
            evaluation: 4.9,
            reviews: 10,
            user: {
              icon: "画像",
              name: "Liy",
            },
            price: 150000,
          },
        ],
      },
      {
        title: "物撮りの依頼",
        subtitle:
          "ECサイト販売するための「物撮り」してくれるカメラマンがいなくてお困りではありませんか？ 商品写真次第で売上は変わります。お気軽にご相談ください。",
        contents: [
          {
            id: 2,
            image: "画像",
            title: "物撮り撮影代行いたします",
            evaluation: 5.0,
            reviews: 7,
            user: {
              icon: "画像",
              name: "永井_結弐",
            },
            price: 3000,
          },
        ],
      },
    ],
  },
];

export const SampleYoutubeData: CategoryPageType[] = [
  {
    id: 69,
    title: "YouTuber・VTuber特集",
    subtitle:
      "これからYouTuber、VTuberになりたい人も！運用中の人も！歌い手さんやライバーさんも！定期配信のクオリティをアップし、手間を省くサービスが充実しています。",
    products: [
      {
        title: "動画編集",
        subtitle:
          "ゲーム実況編集から、人気の切り抜き動画まで、多種多様なジャンルの動画編集サービスがそろっています。",
        contents: [
          {
            id: 1,
            image: "画像",
            title: "YouTubeの切り抜き動画を作ります",
            evaluation: 5.0,
            reviews: 11,
            user: {
              icon: "画像",
              name: "ぶれない男",
            },
            price: 50000,
          },
        ],
      },
      {
        title: "SNS・メディア用OP・ED動画制作",
        subtitle:
          "視聴者を増やす鍵を握るOP動画のクオリティをUPしませんか？YouTube向けのOP・ED・アイキャッチ動画を扱うサービスを集めました。",
        contents: [
          {
            id: 2,
            image: "画像",
            title: "2月限定価格☆高品質動画制作 丁寧に対応いたします",
            evaluation: 5.0,
            reviews: 160,
            user: {
              icon: "画像",
              name: "ROM8 映像クリエイター",
            },
            price: 150000,
          },
        ],
      },
    ],
  },
];
