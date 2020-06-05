OGarray.push(cNode.value);
cNode= cNode.next;
}
(LL.Reverse)
cNode= LL.head;
while(cNode.next){
revArr.push(cNode.value)
}
for(let i=0; i<revArr.length; i++){
for(let n=0; n<ogArr.length; n++){
   if(ogArr[n]===revArr[i]){
     return True;
   }
 }
}
}
