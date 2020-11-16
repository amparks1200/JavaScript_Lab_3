const submissions = [ 
{
    name: 'Jane',
    score: 45,
    date: '2020-01-24',
    passed: true,
},
{
    name: 'Joe',
    score: 77,
    date: '2018-05-14',
    passed: true,
},
{
    name: 'Jack',
    score: 59,
    date: '2019-07-05',
    passed: false,
},
{
    name: 'Jill',
    score: 88,
    date: '2020-04-22',
    passed: true,
},
]
//Declare a function named addSubmission
function addSubmission(array, newName, newScore, newDate) {
    let newPassed;
    if(newScore < 60) {
        newPassed = false;
    } else {
        newPassed = true;
    }
    const newObject = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newPassed,
    }
    let count = array.push(newObject);
}
// addSubmission(submissions, 'Jimothy', 40, '2020-11-02');
// console.log(submissions);

//Declare a function named deleteSubmissionByIndex
function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions);

//Declare a function named deleteSubmissionByName
function deleteSubmissionByName(array, name) {
    let subIndex = array.findIndex(submission => submission.name === name);
    array.splice(subIndex, 1);
}
// deleteSubmissionByName(submissions, 'Jill');
// console.log(submissions);

//Declare a function named editSubmission
function editSubmission(array, index, score) {
    let passed;
    if (score < 60) {
        passed = false;
    } else {
        passed = true;
    }
   array[index].score = score;
   array[index].passed = passed;
}
editSubmission(submissions, 3, 90);
console.log(submissions);
//Declare a function named findSubmissionByName
function findSubmissionByName(array, name) {
    let foundSub = array.find(s => s.name === name);
    return foundSub;
}
//console.log(findSubmissionByName(submissions, 'Jane'));

//Declare a function named findLowestScore
function findLowestScore(array) {
    let lowestObject = null;
    array.forEach(function(object){
        let newScore = object.score;
        if(lowestObject === null || newScore < lowestObject.score) {
        lowestObject = object;
    }
});
    return lowestObject;
}
//console.log(findLowestScore(submissions));

//Declare a function named findAverageScore
function findAverageScore(array) {
    let totalScore = 0;
    for (const student of array) {
    totalScore = totalScore + student.score
    }
    let averageScore = totalScore / array.length;
    console.log(averageScore);
    return averageScore;
}
findAverageScore(submissions);

//Declare a function named filterPassing
function filterPassing(array) {
    let passScore = array.filter(function(filtered) {
    //return array.filter(function(filtered) {
        return filtered.passed == true;
});
   console.log(passScore);
}
filterPassing(submissions);

//Declare a function named filter90AndAbove
function filter90AndAbove(array) {
    let filterNum = array.filter(function(submission) {
        return submission.score >= 90;
    });
    console.log(filterNum);
}
filter90AndAbove(submissions);