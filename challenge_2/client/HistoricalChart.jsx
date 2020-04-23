import React, { useEffect } from 'react';
import Chart from 'chart.js';

const HistoricalChart = ({ data }) => {
  const buildChart = () => {
    const ctx = document.getElementById('myChart');
    ctx.width = 300;
    ctx.height = 100;
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map((el) => { return el.date; }),
            datasets: [{
                label: 'Price',
                data: data.map((el) => { return el.price; }),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

  useEffect(() => { buildChart(); }, [data]);

  return (
    <div>
      <canvas
        id="myChart"
        // style={{ width: 200, height: 100 }}
      />
    </div>
  );
}

export default HistoricalChart;


// componentDidMount() {
//     const node = this.node;

//     var myChart = new Chart(node, {
//       type: "bar",
//       data: {
//         labels: ["Red", "Blue", "Yellow"],
//         datasets: [
//           {
//             label: "# of Likes",
//             data: [12, 19, 3],
//             backgroundColor: [
//               "rgba(255, 99, 132, 0.2)",
//               "rgba(54, 162, 235, 0.2)",
//               "rgba(255, 206, 86, 0.2)"
//             ]
//           }
//         ]
//       }
//     });
//   }

//   render() {
//     return (
//       <div>
//         <canvas
//           style={{ width: 800, height: 300 }}
//           ref={node => (this.node = node)}
//         />
//       </div>
//     );
//   }
// }


// import React, { useRef } from "react";

// const CustomTextInput = () => {
//   const textInput = useRef();

//   focusTextInput = () => textInput.current.focus();

//   return (
//     <>
//       <input type="text" ref={textInput} />
//       <button onClick={focusTextInput}>Focus the text input</button>
//     </>
//   );
// }