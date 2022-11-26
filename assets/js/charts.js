// Config Chart Line
const ctxLine = document.getElementById("chartLine").getContext("2d");

const gradientFillSales = ctxLine.createLinearGradient(0, 0, 0, 500);

gradientFillSales.addColorStop(0, "rgba(136, 116, 241, 0.64)");
gradientFillSales.addColorStop(1, "rgba(25, 26, 33, 0.32)");

const gradientFillExpenses = ctxLine.createLinearGradient(0, 0, 0, 500);

gradientFillExpenses.addColorStop(0, "rgba(230, 91, 255, 0.64)");
gradientFillExpenses.addColorStop(1, "rgba(25, 26, 33, 0.16)");

const labelsCtxLine = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const dataCtxLine = {
  labels: labelsCtxLine,
  datasets: [
    {
      data: [31, 40, 35, 27, 26, 34, 45, 55, 57, 47, 42, 60],
      backgroundColor: gradientFillSales,
      borderColor: "rgb(136, 116, 241)",
    },
    {
      data: [27, 30, 29, 19, 20, 21, 29, 35, 39, 36, 37, 41],
      backgroundColor: gradientFillExpenses,
      borderColor: "rgb(230, 91, 255)",
    },
  ],
};

const optionsCtxLine = {
  elements: {
    line: {
      fill: true,
      borderWidth: 4,
      tension: 0.4,
    },
    point: {
      borderWidth: 0,
      hoverRadius: 6,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const configCtxLine = {
  type: "line",
  data: dataCtxLine,
  options: optionsCtxLine,
};

new Chart(ctxLine, configCtxLine);

// Config Chart Donut
const ctxDonut = document.getElementById("chartDonut").getContext("2d");

const dataCtxDonut = {
  labels: ["Vendas", "Despesas"],
  datasets: [
    {
      data: [60, 41],
      backgroundColor: [
        "rgba(136, 116, 241, 0.36)",
        "rgba(230, 91, 255, 0.36)",
      ],
      borderColor: ["rgba(136, 116, 241, 0.64)", "rgba(230, 91, 255, 0.64)"],
      hoverBorderColor: [
        "rgba(136, 116, 241, 0.48)",
        "rgba(230, 91, 255, 0.48)",
      ],
      hoverBackgroundColor: [
        "rgba(136, 116, 241, 0.48)",
        "rgba(230, 91, 255, 0.48)",
      ],
    },
  ],
};

const optionsCtxDonut = {
  borderWidth: 3,
  cutout: "76%",
  hoverOffset: 8,
  layout: {
    padding: 8,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const configCtxDonut = {
  type: "doughnut",
  data: dataCtxDonut,
  options: optionsCtxDonut,
};

new Chart(ctxDonut, configCtxDonut);
