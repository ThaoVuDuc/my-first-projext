const achievements = [
        {
            id: 1,
            scores: [7, 8, 3, 4]
          },
          {
            id: 2,
            scores: [5, 10, 9, 6]
          },
          {
            id: 3,
            scores: [9, 7, 4, 8]
          }
        
];
const getScoreById1 = achievements.find(achievements => achievements.id == 1);
let score1 =  getScoreById1.scores;
let sumScoreId1 = score1.reduce((total, scor1, index, score1) => {
    return total += scor1;
}, 0);
console.log("Score of Id 1 : "+sumScoreId1);

const getScoreById2 = achievements.find(achievements => achievements.id == 2);
let score2 =  getScoreById2.scores;
let sumScoreId2 = score2.reduce((total, scor2, index, score2) => {
    return total += scor2;
}, 0);
console.log("Score of Id 2 : "+sumScoreId2);

const getScoreById3 = achievements.find(achievements => achievements.id == 3);
let score3 =  getScoreById3.scores;
let sumScoreId3 = score3.reduce((total, scor3, index, score3) => {
    return total += scor3;
}, 0);
console.log("Score of Id 3 : "+sumScoreId3);
