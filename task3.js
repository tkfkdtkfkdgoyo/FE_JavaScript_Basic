/* 3번 문제 답안을 작성해주세요. */
function solution(n) {
    var result = 1;
    let i=1  
    while(result * i <=n){
        result*=i; // 2
        i+=1 // 3
    }
    return i-1;
}