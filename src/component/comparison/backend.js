class person{
    index
    id
    website
    country
    description
    founded
    industry
    number
    name
    constructor(){
        this.index = null;
        this.id = null;
        this.website= null;
        this.country = null;
        this.description = null;
        this.founded = null;
        this.industry = null;
        this.number = null;
        this.name  = null ;
    }
}
// document.getElementById("myBtn").addEventListener("click", function () {

//     var reader = new FileReader();
//     reader.addEventListener('load', function () {
//         document.getElementById('file').innerText = this.result;
//     });
//     reader.readAsText(document.querySelector('input').files[0]);

// });

/*------------------------- To get data ------------------------*/

function getdata() {
    var sort = document.getElementById("sorting-type");
    var arr1 = readdata();
    var arr_size = arr1.length;
    arr1.then((arr) => {
        if (sort.options[sort.selectedIndex].value === "Selection") {
            selectionsort(arr);
        }
        else if (sort.options[sort.selectedIndex].value === "Bubble") {
            BubbleSort(arr);
        }
        else if(sort.options[sort.selectedIndex].value === "Insertion")
        {
            insertionSort(arr);
        }
        else if(sort.options[sort.selectedIndex].value === "Count")
        {
            CountSort(arr);
        }
        else if(sort.options[sort.selectedIndex].value ==="Merge")
        {
            var start = new Date().getTime();
            mergeSort(arr, 0, arr_size - 1);
            alert("okk");
            var end = new Date().getTime();
            var time = end - start;
            document.getElementById("result").value = time + "nano sec";
            insert("m", time,arr.length);
        }
    });
}

/*------------------------- To read data ------------------------*/

async function readdata() {
    // var per = " ";
    let myPromise = new Promise(function (resolve, reject) {
        var arr = [];
        // const responce = await fetch('hello.csv');
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            // document.getElementById('file').innerText = this.result;

            const row = this.result.split('\n');
            row.forEach(ele => {
                const row = ele.split(',');
                let per = new person;
                per['index'] = row[0];
                per['id'] = row[1];
                per['website'] = row[2];
                per['country'] = row[3];
                per['description'] = row[4];
                per['founded'] = row[5];
                per['industry'] = row[6];
                per['number'] = row[7];
                per['name'] = row[8];
                arr.push(per);
            })
            resolve(arr);
        });
        reader.readAsText(document.querySelector('input').files[0]);


    });
    // const data = await responce.text();
    // response().then(res =>{console.log('test=>',res)})
    return myPromise;
}

/*------------------------ Count Sort ----------------------------*/
function CountSort(arr) {
    var start = new Date().getTime();
    var helper = []; // This helper will note how many times each number appeared in the arr
    // Since JS arrary is an object and elements are not continuously stored, helper's Space Complexity minor that n
    for (var i = 0; i < arr.length; i++) {
        if (!helper[arr[i]]) {
            helper[arr[i].founded] = 1;
        } else {
            helper[arr[i].founded] += 1;
        }
    }

    var newArr = [];
    for (i in helper) {
        while (helper[i] > 0) {
            newArr.push(parseInt(i));
            helper[i]--;
        }
    }
    var end = new Date().getTime();
    var time = end - start;
    document.getElementById("result").value = time + "nano sec";
    insert("c", time,arr.length);
   // return newArr;
}



/*------------------------- Selection sort ------------------------*/

function selectionsort(arr) {
    var start = new Date().getTime();
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].founded > arr[minIndex].founded) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [
            arr[minIndex],
            arr[i],
        ];
    }
    var end = new Date().getTime();
    var time = end - start;
    document.getElementById("result").value = time + "nano sec";
    insert("s", time,arr.length);
}

/*------------------------- Bubble sort ------------------------*/

function BubbleSort(arr) {
    var start = new Date().getTime();
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].founded > arr[j + 1].founded) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    var end = new Date().getTime();
    var time = end - start;
    document.getElementById("result").value = time + "nano sec";
    insert("b", time,arr.length);
}

/*------------------------- Insertion sort ------------------------*/

function insertionSort(arr) {

    var start = new Date().getTime();
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j;
        for (
            j = i - 1;
            j >= 0 && arr[j].founded > currentValue.founded;
            j--
        ) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    var end = new Date().getTime();
    var time = end - start;
    document.getElementById("result").value = time + "nano sec";
    insert("i", time,arr.length);
}
/*------------------------- Merge Sort-----------------------*/
function mergeSort(arr,l, r){
    if(l>=r){
        alert("return");
        return;//returns recursively
    }
    alert("no return");
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}

function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
 

/*------------------------- to get id of table ------------------------*/


function insert(m , time , length )
{
    var len = length - 2 ;
    var z = m + "-" +(Math.round(Math.log10(len)) -1 );
    var tablee = document.getElementById(z);
    tablee.innerHTML = time+ "nano sec"; 
    //document.getElementById(z);
}


export default getdata;