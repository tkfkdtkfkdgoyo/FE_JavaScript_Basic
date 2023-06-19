/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
    let answer = [0, 0];
    num_list.map((num) => {
        if (num % 2 === 0) answer[0]++;
        else answer[1]++;
    })
    return answer;
}