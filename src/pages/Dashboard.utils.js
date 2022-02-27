export const chartOptions = {
  series: [
    {
      name: "Online customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

export const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "John Doe",
      order: "490",
      price: "$14,851",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,251",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
    },
    {
      username: "frank iva",
      order: "110",
      price: "$9,251",
    },
    {
      username: "Karl Marks",
      order: "80",
      price: "$8,555",
    },
  ],
};

export const latestOrders = {
  head: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "18 Jun 2021",
      price: "$250",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "23 Jun 2021",
      price: "$490",
      status: "pending",
    },
    {
      id: "#OD1713",
      user: "frank iva",
      date: "03 Feb 2021",
      price: "$399",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "01 Feb 2021",
      price: "$159",
      status: "refund",
    },
  ],
};

export const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "sucess",
  refund: "danger",
};
