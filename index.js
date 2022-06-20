// Code your solution in this file!
function distanceFromHqInBlocks(distanceInBlocks){
    if (distanceInBlocks >= 42){
        return distanceInBlocks - 42;
    } else if (distanceInBlocks <= 42){
        return 42 - distanceInBlocks
    }
}

function distanceFromHqInFeet(distanceInBlocks){
  distanceFromHqInBlocks(distanceInBlocks)
     if (distanceInBlocks >= 42){
         return (distanceInBlocks - 42) * 264;
    } else if (distanceInBlocks <= 42){
         return (42 - distanceInBlocks) * 264;
    }
    return distanceFromHqInBlocks;
}

function distanceTravelledInFeet (start, destination, distance){
    distance = (destination - start) * 264;
   if (distance > 0) {
       return distance
   } else if (distance < 0) {
       return distance * -1
   }
}

function calculatesFarePrice (start, destination, distance){
    distance = Math.abs(destination - start) * 264; 
    if (distance < 400){
        return  0;
    } else if (distance >= 400 && distance < 2000){
        return 2.56;
    } else if (distance >= 2000 && distance <= 2500){
        return 25;
    } else if (distance > 2500){
        return 'cannot travel that far'
    }
}
