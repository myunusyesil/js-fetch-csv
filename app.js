

// declare an array 
const numArr = [42,29,55,1,2,6,3,4,5,22,56,23,8,19];

// finding multiple peaks
function findPeaks(arr) {
    // uçları dahil etmek için
    arr[-1]  = -Infinity;
    arr[arr.length] = -Infinity;
    let peaks = [];
    
    for (let i = 0; i < arr.length-1; i++) {
        if( arr[i-1] < arr[i]  &&  arr[i] > arr[i+1] ) {
            peaks.push(arr[i]);
        }      
    }
    console.log("The peaks of the dataset: " + peaks);
    } 


    async function readCSV() {
        
        const indexArr = [];
        const heightArr = [];
        const weightArr = [];

        let url = 'hw_200.csv';
        const response = await fetch(url);
        const data = await response.text();
        let table = data.split('\n').splice(1);
        // console.log(table);

        table.forEach(element => {
            
            column = element.split(',');
            // console.log(column);
            column[0] = parseFloat(column[0]);
            column[1] = parseFloat(column[1]);
            column[2] = parseFloat(column[2]);

            indexArr.push(column[0]);
            heightArr.push(column[1]);
            weightArr.push(column[2]);
        });
        // console.log(heightArr);
        // findPeaks(heightArr); // when the data is ready we can find peaks via func
        // console.log("Finished fetching the data")
         // we need to update chart when we fetch the data

        return {indexArr, heightArr, weightArr};
    }


    async function chartIt() {
    const testData = await readCSV();
    // console.log(testData)

    const ctx = document.querySelector('#myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: testData.indexArr,
        datasets: [{
            label: 'Weight',
            data: testData.weightArr,
            backgroundColor: [
                'rgba(250, 0, 0, 0.4)'
            ],
            borderColor: [
                'rgba(250, 0, 0, 0.8)'
            ],
            borderWidth: 1
        },
        {
            label: 'Height',
            data: testData.heightArr,
            backgroundColor: [
                'rgba(0, 0, 0, 0.4)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 0.8)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        },
        responsive: true,
        
    }
});

    myChart.update();
} 

chartIt();
                




