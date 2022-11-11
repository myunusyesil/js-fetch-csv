

// declare a sample array 
const numArr = [42,29,55,1,2,6,3,4,5,22,56,23,8,19];
// findPeaks(numArr);

// finding multiple peaks
function findPeaks(arr) {
    // uçları dahil etmek için
    arr[-1]  = -Infinity;
    arr[arr.length] = -Infinity;
    //////////////

    let peaks = [];
    
    for (let i = 0; i < arr.length-1; i++) {
        if( arr[i-1] < arr[i]  &&  arr[i] > arr[i+1] ) {
            peaks.push(arr[i]);
        }      
    }
    console.log("The peaks of the dataset: " + peaks);
    } 

    async function readCSV() {
        
        // define colomn arrays
        const x1 = [];
        const x2 = [];
        const x3 = [];

        let url = 'portfoy-deneme.csv';
        const response = await fetch(url);
        const data = await response.text();
        let table = data.split('\n').splice(1);
        // console.log(table);

        table.forEach(element => {
            
            column = element.split(',');
            // console.log(column);
            // column[0] = parseFloat(column[0]);
            column[1] = parseFloat(column[1]);
            column[2] = parseFloat(column[2]);

            x1.push(column[0]);   // 1. colomn
            x2.push(column[1]);  // 2. colomn
            x3.push(column[2]);  // 3. colomn
        });
        // console.log(heightArr);
        // findPeaks(heightArr); // when the data is ready we can find peaks via func
         
        return {x1, x2, x3};
    }

    async function chartIt() {

    // calling csv data to initialize chart will use it on
    const csvData = await readCSV();
    // console.log("Finished fetching the data")
    // console.log(testData)

    const ctx = document.querySelector('#myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    
    data: {
        labels: csvData.x1,
        datasets: [{
            type: 'bar',
            label: 'TRY (₺)',
            data: csvData.x2,
            yAxisID: 'A',
            backgroundColor: [
                'rgba(0, 0, 0, 0.4)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 0.8)'
            ],
            borderWidth: 1,
            
        },
        {
            type: 'line',
            label: 'DOLLARS ($)',
            yAxisID: 'B',
            data: csvData.x3,
            backgroundColor: [
                'rgba(0, 240, 0, 0.4)'
            ],
            borderColor: [
                'rgba(0, 240, 0, 0.8)'
            ],
            borderWidth: 1,
            
        }]
    },
    options: {
        scales: {
            A: {
                type: 'linear',
                position: 'left',
                beginAtZero: false
                
            },
            B: {
                type: 'linear',
                position: 'right',
                ticks: {
                    max: 1,
                    min: 0
                }
                                
            }
        },
        responsive: true,
        tension: 0.5,
        animations: {
            tension: {
              duration: 1500,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
      
    }
});

    myChart.update();
} 

chartIt();
                




