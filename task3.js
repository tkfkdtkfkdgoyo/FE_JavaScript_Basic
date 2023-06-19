/* 3번 문제 답안을 작성해주세요. */
function solution(n) {
    let answer = 1;
    let i = 1;
    while (i * answer <= n){
        answer *= i
        i += 1 
    }
    
    return i - 1; //마지막 i가 1이 더해진 상태로 반환될 테니 -1을 해줘야 조건에 맞는 i값을 return할 수 있다 
}