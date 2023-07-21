

function distanceFromHqInBlocks(distance) {
  if (distance >= 42) {
    distance = distance - 42;
  } else {
    distance = 42 - distance;
  }
  return distance;
}

function distanceFromHqInFeet(distance) {
  return (distanceFromHqInBlocks(distance) * 264);
}

function distanceTravelledInFeet(start, destination) {
  if (destination >= start) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }

}

function calculatesFarePrice(start, destination) {
  const fare = distanceTravelledInFeet(start, destination);
  if (fare <= 400) {
    return 0;
  } else if (fare > 400 && fare <= 2000) {
    return (fare - 400) * 0.02;
  } else if (fare > 2000 && fare < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}