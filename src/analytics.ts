let logged: boolean;
function sendAnalytics(data: string){
    console.log(data);
    logged = true;
}

sendAnalytics('the data');