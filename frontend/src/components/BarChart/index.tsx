import Chart from 'react-apexcharts';
function BarChart() {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Juliana Adrade', 'Márcio Neto', 'Adriana Silva', 'Bernardo Lucas', 'Matheus Santiago']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };
   
    return (
         <Chart 
             options={{...options, xaxis: mockData.labels}}
             series={mockData.series}
             type="bar"
             height="240"

         />   
    );
}

export default BarChart;