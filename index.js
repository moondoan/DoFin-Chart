import "billboard.js/dist/billboard.css";
import bb from "billboard.js";

var chart = bb.generate({
  data: {
    x: "x",
    columns: [
	    ["x", 'A', 'B', 'C', 'D', 'E', 'F'],
	    ["data1", 30, 200, 100, 400, 150, 250]
    ],
    types: {
      data1: "bar"
    },
    labels: true
  },
  axis: {
    rotated: true,
    x: {
      type: "category"
    },
    y: {
      show: false
    }
  },
  legend: {
    show: false
  },
  bindto: "#rotatedAxis"
});