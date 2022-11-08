const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

function judgeVegetable(vegetables, metric) {
  let winner = "";
  let maxMetric = 0;
  for (let vegetable of vegetables){
    if (vegetable[metric] > maxMetric){
      maxMetric = vegetable[metric];
      winner = vegetable.submitter;
    }
  }
  return winner;
}

console.log(judgeVegetable(vegetables, metric));