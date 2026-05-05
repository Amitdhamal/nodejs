const maintainanceGaurd = (res,res,next) =>{
    let subscribedUserIdArr = [111,52,30,69]
    const allowSubscriptionDate =  false
    if(subscribedUserIdArr.has(res.params.id)){
        allowSubscriptionDate = true
    }

    if(allowSubscriptionDate){
        next()
    }
    else{
        res.send('please subscribe to acces this page')
    }
}