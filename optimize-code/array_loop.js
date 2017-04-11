//From
function checkValidReq1(reqpay) {
  const firstChange = reqpay.entry[0].changes[0];

  if (reqpay.object === 'page' 
    && firstChange.field === 'feed' 
    && firstChange.value['item'] === 'photo' 
    && firstChange.value['verb'] === 'add') {
      return true;
    }
    return false;
}

//To
function checkValidReq2(reqpay) {
  const firstChange = reqpay.entry[0].changes[0];

  return (reqpay.object === 'page' 
    && firstChange.field === 'feed' 
    && firstChange.value['item'] === 'photo' 
    && firstChange.value['verb'] === 'add');
}

//Put the function to
server.route({
  method: 'POST',
  path:'/webhook/facebook', 
  handler: function (request, reply) {
    const reqpay = request.payload;
    
    // check if i valid request
    if(!checkValidReq(reqpay)) {
      return reply('not success');
    }

    // response back. code 200
    return reply('success');
  }
});