var counter = 0;
function takeANumber(katzDeliLine, counter)
{
  counter = counter + 1;
  
  katzDeliLine.push(counter);
  return counter;
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length === 0)
    return "There is nobody waiting to be served!";
  else
  {
    var ticket = katzDeliLine.shift();
    return `Currently serving ${ticket}.`;
  }
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine.length === 0)
  {
    return "The line is currently empty."
  }
  else
  {
    var str = '';
    var i;
    for(i = 0; i<katzDeliLine.length;i++)
    {
      str += (i+1) + ". " + katzDeliLine[i];
      if(i !== katzDeliLine.length-1)
        str+= ', ';
    }
    return "The line is currently: " + str;
  }
}