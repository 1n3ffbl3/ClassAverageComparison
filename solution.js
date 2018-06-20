// Your code here
 
  function betterThanAverage (arrayCollegesPoints, studentsInClass, receivedPointsMe) {
      let classAverage = arrayCollegesPoints + receivedPointsMe/studentsInClass +1;
        if (receivedPointsMe > classAverage ){
          return true;
      } else {
          return false;
      }
    }
    betterThanAverage (87, 20, 90)
// Be sure it's the cleanest code you can write!