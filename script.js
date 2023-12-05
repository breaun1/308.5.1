// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// sum of 1st two assignments
const avgTwo =  AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible;


//points possible for the 1st two assignments
let scoreForAssignmentOne = AssignmentGroup.assignments[0].points_possible;

let ScoreForAssigmentTwo = AssignmentGroup.assignments[1].points_possible;


// console.log(AvgTwo)

// The provided learner submission data.

const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// Avg scores between assignments
const learnerOneTotalScore =  LearnerSubmissions[0].submission.score + LearnerSubmissions[1].submission.score;

let learnerTwoTotalScore= LearnerSubmissions[3].submission.score + LearnerSubmissions[4].submission.score;

// Scores for Assignments

let user1ScoreForAssignmentOne = (LearnerSubmissions[0].submission.score/scoreForAssignmentOne) *100;

let user1ScoreForAssignmentTwo = (LearnerSubmissions[1].submission.score/ScoreForAssigmentTwo)*100;

let user2ScoreForAssignmentone  = (LearnerSubmissions[3].submission.score/scoreForAssignmentOne)*100;

let user2ScoreForAssignmentTwo =  (LearnerSubmissions[4].submission.score/ScoreForAssigmentTwo)*100;



// console.log(learnerOneTotalScore)
// console.log(learnerTwoTotalScore)

let userOneAvg = (learnerOneTotalScore / avgTwo)* 100;
// console.log(userOneAvg)

let userTwoAvg = (learnerTwoTotalScore / avgTwo)*100;
// console.log(userTwoAvg)


function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result

  const result = [
    {
       
      id: 125,
      avg: userOneAvg, // (47 + 150) / (50 + 150)
      Assignment_One:user1ScoreForAssignmentOne, // 47 / 50
      Assignment_2: user2ScoreForAssignmentTwo // 150 / 150
    },
    {
      id: 132,
      avg: userTwoAvg, // (39 + 125) / (50 + 150)
     Assignment_One:user2ScoreForAssignmentone, // 39 / 50
      Assignment_2: user2ScoreForAssignmentTwo // late: (140 - 15) / 150
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);