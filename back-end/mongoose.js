const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://armphanu:devtool1234@armphanu-5564.2rjb0.mongodb.net/kmitl', {
  useNewUrlParser: true,
}).then(()=>{
    
}).catch((eer)=>{
    console.log('someting wrong', eer)
})