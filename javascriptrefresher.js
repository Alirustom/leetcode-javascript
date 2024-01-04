//Array Trversing

// let arr =[11,22,33,44,89,55,72];
// arr.push(111);
// function indexFinder(){
//   let inputvalue = document.getElementById("indexFinder").value;
//   if(inputvalue>0 && inputvalue<arr.length){
//   alert(arr[inputvalue]);
// }else{
// 	alert('Please Enter Valid Number');
// }
// }

//Inserat element into javascript array

// const newarr = [12,13,14,15,16,17];
// const newval =25;
// const position =3;
// for (var i = newarr.length - 1; i >= 0; i--) {
// 	 if(i>=position){
// 	 	newarr[i+1]=newarr[i];
// 	 	if (i == position) {
// 	 		newarr[i] = newval;
// 	 	}
// 	 }
// }
// console.warn(newarr);

//Delete a item from array by loop start

// let newarrdel =[10,20,30,40,50,60];

// function deleteElement(){
// let position = 2;
// //position = parseInt(position);
// for (var i = position; i<newarrdel.length - 1; i++) {
// 	newarrdel[i] = newarrdel[i+1];
// }
// console.log(newarrdel.length);
// console.warn(newarrdel.length-1);
// newarrdel.length = newarrdel.length-1;
// console.warn(newarrdel);
// }
// deleteElement();

//Search element from a array;

// let arr_element = [12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
// let search_element = 20;
// for(i=0; i<arr_element.length-1; i++){
// 	if(arr_element[i]===search_element){
// 	   index_of_element = i;
// 	   //console.log(index_of_element);
// 	}
	
// }
// console.log(arr_element);

//Merge array using for loop

// let arr_one =  [2,4,6,8,10,12,14];
// let arr_two =  [4,8,12,16,20,24,26,30,34,38,42,46,50];
// let arr_data = [];

// for(i=0; i<arr_one.length; i++){
// 	arr_data[i] = arr_one[i];
// }
// for (i=0; i<arr_two.length; i++){
// 	arr_data[arr_one.length+ i] = arr_two[i];
// }

// console.log(arr_data);


//Merge Two arryay using while loop
//alert('i m here');
// let arr_one =  [2,4,6,8,10,12,14];
// let arr_two =  [4,8,12,16,20,24,26,30,34,38,42,46,50];
// let arr_data = [];

// let d1=0;
// let d2=0;
// let d3=0;
// while(d1<arr_one.length && d2<arr_two.length){
// 	if(arr_one[d1]<arr_two[d2]){
// 		arr_data[d3] = arr_one[d1];
// 		d1++;
// 	}else{
// 		arr_data[d3] = arr_two[d2];
// 		d2++;
// 	}
// 	d3++;
// }
// while(d2<arr_two.length){
// 	arr_data[d3] = arr_two[d2];
// 	d2++;
// 	d3++;
// }
// console.log(arr_data);

/*You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.*/

// let prices = [7,1,5,3,6,4];
// let minBuy = prices[0];
// let profit = 0;
// if(prices == null || prices.length <= 1){
// 	return 0;
// }
// 	for(let i = 1; i < prices.length; i++) {
// 		minBuy = Math.min(minBuy, prices[i]);
// 		profit = Math.max(profit, prices[i] - minBuy);
// 	}


// //return profit;

// console.log(profit);

//Q.Merge Strings Alternately

//You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

//Approach 1

// let word1 ='Rsa';
// let world2 = 'utm';
// let str_res = [];
// i=0;j=0;

// while(i<word1.length && j<world2.length){
// 	str_res +=(str_res.length%2==0)?word1[i++]:world2[j++];
// }
// while(i<word1.length){
// 	str_res += word1[i++];
// }
// while(j<world2.length){
// 	str_res += world2[j++];
// }
// console.warn(str_res);

//Approach 2

// function mergeTwoString(str1,str2){
//    let merge_str = '';
//    let len_str_one = str1.length;
//    let len_str_two = str2.length;
//    let max_leght = Math.max(len_str_one,len_str_two);
//    for(i=0;i<max_leght;i++){
// 	if(i<len_str_one){
// 		merge_str += str1[i];
// 	}
// 	if(i<len_str_two){
// 		merge_str += str2[i];
// 	}
//    }
//    return merge_str;
// }

// let res_mm = mergeTwoString('Wbah','egr');
// console.warn(res_mm);


//closures

/*For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB" */


// const gcdOfStrings = (str1, str2) => {
//   if (str1 + str2 !== str2 + str1) return '';
//   const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
//   return str1.substring(0, gcd(str1.length, str2.length));
// };

// let res_gcd = gcdOfStrings('ABCABCABC','ABCABC');
// console.log(res_gcd);

// const str1 = 'abcabc';
// const str2 = 'abc';
// const findGCD = (str1 = '', str2 = '') => {
//    if (str1 + str2 !== str2 + str1){
//       // not possible
//       // no common element
//       return "";
//    } else if (str1 == str2){
//       return str1;
//    } else if (str1.length > str2.length){
//       return findGCD(str1.slice(str2.length), str2);
//    } else {
//       return findGCD(str2.slice(str1.length), str1);
//    }
// };
// console.log(findGCD(str1, str2));


// var expect = function(val) {
//   return {
//       toBe: (val2) => {
//           if (val !== val2) throw new Error("Not Equal");
//           else return true;
//       },
//       notToBe: (val2) => {
//           if (val === val2) throw new Error("Equal");
//           else return true;
//       }
//   }
// };

//No. of candies

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// var kidsWithCandies = function(candies, extraCandies) {
    
//   let res=Math.max(...candies)
//   let newArr=[]

//   for(let i=0; i<candies.length; i++) {
     
//       if(res>candies[i]+extraCandies) {
//           newArr.push(false)          
//       } else {
//        newArr.push(true)  
//       }

//   }
//     return newArr
// };

/*Can Place Flowers*/

// var canPlaceFlowers = function(flowerbed, n) {
//   if(n==0){return true}
//   for(i=0;i<flowerbed.length;i++){
//       if(flowerbed[i]==0 && (i==0 || flowerbed[i-1]==0) && (i==flowerbed.length-1 || flowerbed[i+1]==0))  {
//           flowerbed[i]=1;
//           n--;
//           i++;
//       }
      
//   }

//   return n<=0;
// };

//Reverese vowels of a string

let reverseVowels = function(s){
  let arr = s.split();
  const vowels = [a,e,i,o,u,A,E,I,O,U];
  let left = 0, right = arr.length-1;
  while(left<right){
    if(vowels.indexOf(arr[left]) === -1) {
      left++;
      continue;
    }
    if(vowels.indexOf(arr[right]) === -1){
      right++;
      continue;
    }
  }
}


