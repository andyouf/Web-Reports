const title = {
  application: "Application Submissions Projection",
  premium: "Submitted Premium Projections",
  paid: "Projected Paid Premium",
};
const subTitle = {
  application: "Application Gap",
  premium: "Target Pre. Gap ",
  paid: "Paid Potential Gap",
};
const value = {
  application: [1211, 1425, 214],
  premium: ["$14.8M", "$20M", "-$5M"],
  paid: ["$8.3M", "$9.2M", "-$0.9M"],
};
const percent = {
  application: ["2.7%", "0.1%"],
  premium: ["25.9%", "2.3%"],
  paid: ["19%", "4.1%"],
};
const keys = {
  application: [
    "Growth in Distributor A",
    "Negative growth Distributor B",
    "Negative growth IUL submissions",
    "35-50 years old Term growth",
  ],
  premium: [
    "Negative growth IUL submitted premium",
    "Growth VUL submitted premium",
    "Negative Growth in Distributor C",
    "Negative growth IUL submissions ",
  ],
};

const gaps = {
  application: [
    "16% (35 apps)",
    "5% (12 apps)",
    "4% (11 apps)",
    "7% (24 apps)",
  ],
  premium: ["36% ($1.63M)", "34% ($1.52M)", "24% ($1.3M)", "16% ($762k)"],
};

const measurings = [
  {
    title: "Term",
    category: [
      {
        subTitle: "Submissions",
        chartData: [
          {
            text: "Me",
            value: "123",
            percent: "42%",
            status: "up",
          },
          {
            text: "Benchmark Avg.",
            value: "234",
            percent: "49%",
            status: "up",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Submitted Premium",
        chartData: [
          {
            text: "Me",
            value: "9.7",
            percent: "28%",
            status: "up",
          },
          {
            text: "Benchmark Avg.",
            value: "11",
            percent: "29%",
            status: "up",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Paid Potential",
        chartData: [
          {
            text: "Me",
            value: "7.8",
            percent: "18%",
            status: "down",
          },
          {
            text: "Benchmark Avg.",
            value: "2.8",
            percent: "5%",
            status: "down",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Premium Loss/Gain",
        value: "+$3.9M",
        comment: "Negative growth predicted at ",
        distributor: "Distributor D",
        type: "total",
      },
    ],
  },
  {
    title: "Whole Life",
    category: [
      {
        subTitle: "Submissions",
        chartData: [
          {
            text: "Me",
            value: "123",
            percent: "42%",
            status: "up",
          },
          {
            text: "Benchmark Avg.",
            value: "234",
            percent: "49%",
            status: "up",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Submitted Premium",
        chartData: [
          {
            text: "Me",
            value: "9.7",
            percent: "28%",
            status: "up",
          },
          {
            text: "Benchmark Avg.",
            value: "12",
            percent: "29%",
            status: "up",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Paid Potential",
        chartData: [
          {
            text: "Me",
            value: "7.8",
            percent: "18%",
            status: "down",
          },
          {
            text: "Benchmark Avg.",
            value: "2.8",
            percent: "5%",
            status: "down",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Premium Loss/Gain",
        value: "+$3.9M",
        comment: "Negative growth predicted at ",
        distributor: "Distributor D",
        type: "total",
      },
    ],
  },
  {
    title: "VUL",
    category: [
      {
        subTitle: "Submissions",
        chartData: [
          {
            text: "Me",
            value: "123",
            percent: "42%",
            status: "up",
          },
          {
            text: "Benchmark Avg.",
            value: "234",
            percent: "49%",
            status: "up",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Submitted Premium",
        chartData: [
          {
            text: "Me",
            value: "9.7",
            percent: "28%",
            status: "up",
          },
          {
            text: "Benchmark Avg.",
            value: "7",
            percent: "29%",
            status: "up",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Paid Potential",
        chartData: [
          {
            text: "Me",
            value: "7.8",
            percent: "18%",
            status: "down",
          },
          {
            text: "Benchmark Avg.",
            value: "2.8",
            percent: "5%",
            status: "down",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Premium Loss/Gain",
        value: "+$3.9M",
        comment: "Negative growth predicted at ",
        distributor: "Distributor D",
        type: "total",
      },
    ],
  },
  {
    title: "Universal Life",
    category: [
      {
        subTitle: "Submissions",
        chartData: [
          {
            text: "Me",
            value: "123",
            percent: "42%",
            status: "up",
          },
          {
            text: "Benchmark Avg.",
            value: "234",
            percent: "49%",
            status: "up",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Submitted Premium",
        chartData: [
          {
            text: "Me",
            value: "9.7",
            percent: "28%",
            status: "up",
          },
          {
            text: "Benchmark Avg.",
            value: "3.6",
            percent: "29%",
            status: "up",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Paid Potential",
        chartData: [
          {
            text: "Me",
            value: "7.8",
            percent: "18%",
            status: "up",
          },
          {
            text: "Benchmark Avg.",
            value: "2.8",
            percent: "5%",
            status: "down",
          },
        ],
        type: "chart",
      },
      {
        subTitle: "Premium Loss/Gain",
        value: "+$3.9M",
        comment: "Negative growth predicted at ",
        distributor: "Distributor D",
        type: "total",
      },
    ],
  },
];

const distributors = [
  {
    num: 1,
    title: "Top Distributors - Carrier ",
    small: "vs. Benchmark Avg.",
    tableData: [
      {
        name: "LPL Insurance Associates, Inc",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "down",
          carrier: "-7%",
          avg_status: "up",
          avg: "34%",
        },
        loss: "-$1.4M",
        con: "90",
      },
      {
        name: "Diversified Brokerage Services",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "70",
      },
      {
        name: "Protective Distributors",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "down",
          carrier: "-9%",
          avg_status: "up",
          avg: "24%",
        },
        loss: "-$1.4M",
        con: "40",
      },
      {
        name: "Distributor D",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "down",
          carrier: "-29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "23",
      },
      {
        name: "Distributor E",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "80",
      },
    ],
  },
  {
    num: 2,
    title: "Top Positive Growth - Carrier ",
    small: "vs. Industry",
    tableData: [
      {
        name: "Distributor A",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "80",
      },
      {
        name: "Distributor B",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "80",
      },
      {
        name: "Distributor C",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "20",
      },
      {
        name: "Distributor D",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "10",
      },
      {
        name: "Distributor E",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "80",
      },
    ],
  },
  {
    num: 3,
    title: "Top Negative Growth - Carrier ",
    small: "vs. Industry",
    tableData: [
      {
        name: "Distributor A",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "30",
      },
      {
        name: "Distributor B",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "60",
      },
      {
        name: "Distributor C",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "20",
      },
      {
        name: "Distributor D",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "40",
      },
      {
        name: "Distributor E",
        sub: {
          car_status: "up",
          carrier: "10%",
          avg_status: "up",
          avg: "18%",
        },
        subed: {
          carrier: "$5.6M",
          avg: "$3.1M",
        },
        pre: {
          car_status: "up",
          carrier: "29%",
          avg_status: "up",
          avg: "54%",
        },
        loss: "-$1.4M",
        con: "10",
      },
    ],
  },
];

export {
  title,
  subTitle,
  value,
  percent,
  keys,
  gaps,
  measurings,
  distributors,
};
