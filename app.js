
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
        let url = 'test.csv';
        const response = await fetch(url);
        const data = await response.text();
        let table = data.split('\n').splice(1);
        // console.log(table);
        const height = [];
        const weight = []
        table.forEach(element => {
            
            column = element.split(',');
            // console.log(column);
            height.push(column[1]);
            weight.push(column[2]);
        });
        console.log(height);
        // findPeaks(height);
    }

readCSV();


