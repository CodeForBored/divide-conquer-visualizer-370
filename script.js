let array = [];

function generateArray() {

array = [];

for(let i=0;i<8;i++){
array.push(Math.floor(Math.random()*100));
}

displayArray();
}

function displayArray(){

let container = document.getElementById("array");

container.innerHTML="";

array.forEach(num=>{

let bar=document.createElement("div");

bar.classList.add("bar");

bar.style.height=num*3+"px";

container.appendChild(bar);

});
}

async function startSort(){

await mergeSort(array,0,array.length-1);

displayArray();
}

async function mergeSort(arr,l,r){

if(l>=r) return;

let mid=Math.floor((l+r)/2);

await mergeSort(arr,l,mid);

await mergeSort(arr,mid+1,r);

merge(arr,l,mid,r);

displayArray();

await new Promise(resolve=>setTimeout(resolve,600));
}

function merge(arr,l,m,r){

let left=arr.slice(l,m+1);

let right=arr.slice(m+1,r+1);

let i=0;
let j=0;
let k=l;

while(i<left.length && j<right.length){

if(left[i]<=right[j]){
arr[k++]=left[i++];
}else{
arr[k++]=right[j++];
}

}

while(i<left.length){
arr[k++]=left[i++];
}

while(j<right.length){
arr[k++]=right[j++];
}

}
