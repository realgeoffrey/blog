"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var originChartdata = [];
var chartdata1 = [];
var chartdata2 = [];
(function () {
    // 原始数据
    var rawData = {
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
                {
                    time: "2020/09/13",
                    value: 130,
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
                {
                    time: "2020/09/13",
                    value: 37,
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
                {
                    time: "2020/09/13",
                    value: 52,
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
        qilin: {
            nickname: "70",
            data: [
                {
                    time: "2020/09/13",
                    value: -122,
                },
            ],
        },
        liucheng: {
            nickname: "成哥",
            data: [
                {
                    time: "2020/09/13",
                    value: -147,
                },
            ],
        },
        maoyong: {
            nickname: "charles",
            data: [
                {
                    time: "2020/09/13",
                    value: 164,
                },
            ],
        },
        wangwei: {
            nickname: "老王",
            data: [
                {
                    time: "2020/09/13",
                    value: -144,
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
    var outputData = [];
    Object.entries(rawData).filter(function (_a) {
        var name = _a[0], detail = _a[1];
        detail.data.filter(function (timeAndValue) {
            outputData.push(__assign({ id: name, nickname: (detail.nickname || name) + "(" + detail.data.length + ")" }, timeAndValue));
        });
    });
    // 数组去重
    function uniqueArr(arr) {
        return Array.from(new Set(arr));
        // 或：return [...new Set(arr)];
    }
    // 要展示的id：✈️🐔的朋友
    var filteredId1 = uniqueArr([
        "zhengfeijie",
        "ruanyujing",
        "dongchencheng",
        "yousiyao",
        "zhaohaibo",
        "linyanzhi",
        "chenqiaojun",
        "chenkangyi",
    ]);
    // 要展示的id2：经理的朋友
    var filteredId2 = uniqueArr([
        "zhengfeijie",
        "ruanyujing",
        "caofangning",
        "liucheng",
        "qilin",
        "maoyong",
        "wangwei",
    ]);
    originChartdata = outputData;
    chartdata1 = outputData.filter(function (data) {
        return filteredId1.includes(data.id);
    });
    chartdata2 = outputData.filter(function (data) {
        return filteredId2.includes(data.id);
    });
})();
console.log(originChartdata, chartdata1, chartdata2);
