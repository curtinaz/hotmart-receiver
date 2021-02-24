 exports.post = function (req, res, next) {

   fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
   if (err) return res.send("Write File error!")

   return res.redirect(`/instructors/${id}`)
   })

   res.status(201).send('Rota POST!');

}
  
 exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
 };
  
 exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
 };
  
 exports.get = (req, res, next) => {
    res.status(200).send('Rota GET!');
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
 };