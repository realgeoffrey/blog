type outputDataType = {
  id: string;
  nickname: string;
  time: string;
  value: number;
}[];

let originChartdata: outputDataType = [];
let chartdata: outputDataType = [];
(function () {
  // 原始数据
  const rawData: {
    [name: string]: {
      nickname?: string;
      data: { time: string; value: number }[];
    };
  } = {
    zhengfeijie: {
      nickname: "✈️🐔",
      data: [
        {
          time: "2020/08/16",
          value: -512,
        },
        {
          time: "2020/08/22",
          value: 242,
        },
        {
          time: "2020/09/06",
          value: -322,
        },
      ],
    },
    ruanyujing: {
      nickname: "ECHO🐰",
      data: [
        {
          time: "2020/08/16",
          value: -101,
        },
        {
          time: "2020/08/22",
          value: 242,
        },
        {
          time: "2020/09/06",
          value: -656,
        },
      ],
    },
    caofangning: {
      nickname: "经理",
      data: [
        {
          time: "2020/08/16",
          value: 362,
        },
      ],
    },
    dongchencheng: {
      nickname: "cc",
      data: [
        {
          time: "2020/09/06",
          value: 1433,
        },
      ],
    },
    yousiyao: {
      nickname: "siyao",
      data: [
        {
          time: "2020/08/16",
          value: 631,
        },
        {
          time: "2020/08/22",
          value: -53,
        },
      ],
    },
    zhaohaibo: {
      nickname: "波哥",
      data: [
        {
          time: "2020/08/16",
          value: -374,
        },
        {
          time: "2020/08/22",
          value: 25,
        },
        {
          time: "2020/09/06",
          value: -405,
        },
      ],
    },
    linyanzhi: {
      nickname: "yanzhi",
      data: [
        {
          time: "2020/08/16",
          value: 73,
        },
        {
          time: "2020/09/06",
          value: 364,
        },
      ],
    },
    chenqiaojun: {
      nickname: "Kendy",
      data: [
        {
          time: "2020/09/06",
          value: 0,
        },
      ],
    },
    chenkangyi: {
      nickname: "Jerry",
      data: [
        {
          time: "2020/08/22",
          value: -5,
        },
        {
          time: "2020/09/06",
          value: 731,
        },
      ],
    },

    weichangjiang: {
      nickname: "长江",
      data: [
        {
          time: "2020/08/22",
          value: -309,
        },
      ],
    },
    yangbai: {
      nickname: "柏哥",
      data: [
        {
          time: "2020/09/06",
          value: -1145,
        },
      ],
    },
    huangzhaobiao: {
      nickname: "袜子",
      data: [
        {
          time: "2020/08/22",
          value: -137,
        },
      ],
    },
    tie: {
      nickname: "铁同学",
      data: [
        {
          time: "2020/08/16",
          value: 251,
        },
      ],
    },
    weisiyu: {
      nickname: "siyu",
      data: [
        {
          time: "2020/08/16",
          value: -115,
        },
      ],
    },
    leiyu: {
      nickname: "雷宇",
      data: [
        {
          time: "2020/08/16",
          value: -215,
        },
      ],
    },
  };

  const outputData: outputDataType = [];
  Object.entries(rawData).filter(([name, detail]) => {
    detail.data.filter((timeAndValue) => {
      outputData.push({
        id: name,
        nickname: `${detail.nickname || name}(${detail.data.length})`,
        ...timeAndValue,
      });
    });
  });

  // 要展示的id
  const filteredId: Array<number | string> = [
    "zhengfeijie",
    "ruanyujing",
    "caofangning",
    "dongchencheng",
    "yousiyao",
    "zhaohaibo",
    "linyanzhi",
    "chenqiaojun",
    "chenkangyi",
  ];

  originChartdata = outputData;

  chartdata = outputData.filter((data) => {
    return filteredId.includes(data.id);
  });
})();

console.log(originChartdata, chartdata);
