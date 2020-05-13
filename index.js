// Code your solutions in this file

const names= ["Ada", "Brendan", "Ali"];
function writeCards(names,events){
  let messages=[]
  for(let i=0;i<names.length;i++)
  {    
    messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    
    
  }
  return messages
}
writeCards(names, "birthday");

function countDown(num){
    let i=num;
    while(i>=0)
    {
     console.log(i--)

    }
  }
countDown(10)
countDown(4)