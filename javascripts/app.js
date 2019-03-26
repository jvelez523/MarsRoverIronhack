var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
}
// ======================

// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'W':
      rover.direction = 'S'
      break;
  }
  console.log('You have turned left. The rover is now facing ' + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  }
  console.log('You have turned right. The rover is now facing ' + rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case 'N':
      rover.y--
      rover.travelLog.push(rover.x + ',' + rover.y)
      break;
    case 'S':
      rover.y++
      rover.travelLog.push(rover.x + ',' + rover.y)
      break;
    case 'E':
      rover.x++
      rover.travelLog.push(rover.x + ',' + rover.y)
      break;
    case 'W':
      rover.x--
      rover.travelLog.push(rover.x + ',' + rover.y)
      break;
  }
  console.log("You moved forward. Your Coordinates are now " + rover.x + ',' + rover.y)
}

function moveBackward(rover){
  switch (rover.direction) {
    case 'N':
      rover.y++
      rover.travelLog.push(rover.x + ',' + rover.y)
      break;
    case 'S':
      rover.y--
      rover.travelLog.push(rover.x + ',' + rover.y)
      break;
    case 'E':
      rover.x--
      rover.travelLog.push(rover.x + ',' + rover.y)
      break;
    case 'W':
      rover.x++
      rover.travelLog.push(rover.x + ',' + rover.y)
      break;
  }
  console.log("You moved backwards. Your Coordinates are now " + rover.x + ',' + rover.y)
}

function runCommand (command) {
  for (var i = 0; i < command.length; i++) {
    switch (command[i]) {
      case 'f':
        moveForward(rover)
        break;
      case 'b':
        moveBackward(rover)
        break;
      case 'r':
        turnRight(rover)
        break;
      case 'l':
        turnLeft(rover)
        break;
      default: // If the command isn't valid
        console.log("The command " + command[i] + " is not valid! " + 'It can only be "f", "b", "r", or "l"')
    }
  }
  console.log('Congratulations! Your rover has traveleved over the spaces:' + rover.travelLog)
}
