function createCourseRoute(app){
    app.post("/course/purchase",(req,res)=>{
res.json({
    message : "purchase"
   })
})

app.get("/courses/preview",(req,res)=>{
res.json({
    message : "signup endpoint"
   })
})
}
module.exports ={
    createCourseRoute: createCourseRoute
}