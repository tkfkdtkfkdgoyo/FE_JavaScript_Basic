/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
    var answer = [0,0];
    let num1=0;
    let num2=0;
    num_list.map((num)=>{
        if (num%2===0) answer[0]++;
        else answer[1]++; //else 다음에는 조건식 안 써도 돼 
        return num //map 함수를 쓰려고 num 매개변수를 넣어줬어 
    })
    return answer;
}