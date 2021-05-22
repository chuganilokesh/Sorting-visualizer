export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array; //edge condition 
  const auxiliaryArray = array.slice(); //copy of array into auxillary 
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;//when you have only one element 
  const middleIdx = Math.floor((startIdx + endIdx) / 2);  //index of middle element od subarray or the array
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);//main merging comed over here after getting in with recursion
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {

    animations.push([i, j]); //first push to compare and change color

    animations.push([i, j]); // second push to change one more color
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      //  overwriting the value at index k in the original array with the value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      //  overwriting the value at index k in the original array with the value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {

    animations.push([i, i]);//first push to compare and change color

    animations.push([i, i]); // second push to change one more color

    animations.push([k, auxiliaryArray[i]]); //  overwriting the value at index k in the original array with the value at index i in the auxiliary array.
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {

    animations.push([j, j]);//first push to compare and change color

    animations.push([j, j]);// second push to change one more color

    animations.push([k, auxiliaryArray[j]]); //  overwriting the value at index k in the original array with the value at index i in the auxiliary array.
    mainArray[k++] = auxiliaryArray[j++];
  }
}
