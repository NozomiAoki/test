import { rest } from "msw";

export const handlers = [
  rest.get("/users", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          {
            "66":{
              id: 5,
              title: "ECサイト運営特集",
              sub_title: "EC作って一儲けしましょう",
              content:
                "ECサイト作成からWeb集客のお手伝いまで！お客様の課題に合わせたECサイトを運営するための多様なサービスをそろえました。",
              evaluation: 4.8,
              comment: 12,
              name: "のぞみん",
              price: 1500000,
              image_url:
                "https://coconala.akamaized.net/coconala-public-files/service_images/214x177/08d5ebc6-4149744.jpg",
            },
            },
          {
             "69":{
            id: 6,
            title: "YouTuber・VTuber特集",
            sub_title: "EC作って一儲けしましょう",
            content:
              "これからYouTuber、VTuberになりたい人も！運用中の人も！歌い手さんやライバーさんも！定期配信のクオリティをアップし、手間を省くサービスが充実しています。",
            evaluation: 5,
            comment: 10,
            name: "中澤",
            price: 1000000,
            image_url:
              "https://coconala.akamaized.net/coconala-public-files/service_images/214x177/bd284807-4827556.png",
             },
          },
        ],
      })
    );
  }),
];
