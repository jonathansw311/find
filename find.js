const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
 
  function findUserByUsername(obj, str){
    return  obj.find(function(ob){
      return  ob['username']===str
           
    })
   
 }

 
  
function removeUser(obj, str){
   const idx = findUserByUsername(obj, str);
   if (idx === undefined)
   {return idx;}
   let idxx = obj.findIndex(function(ob){
      return ob['username']===str;
   })
   obj.splice(idxx,1);
   return idx;
}