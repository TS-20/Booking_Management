const City = require('../model/City');

exports.getCities = async(req,res)=>{
   try{const page = parseInt(req.query.page) || 1;
   const limit =10;
   const cities= await City.find().skip((page-1)*limit).limit(limit);
   res.json(cities); 
} catch(err){
   res.status(500).json({error: 'Failed to fetch cities'});
}
   
};
//POST API
exports.createCity  = async(req,res)=>{
   if(user.role == "admin"){
   try{
      const newCity=new City(req.body);
      await newCity.save();
      res.status(201).json(newCity);
   }catch(err){
     res.status(400).json({error:'City creation is failed'});
   }
}
else {
   res.status(401).json({message: "Not Admin"})
}
};

//Get top 3 cities
exports.getTopCities=async(req,res)=>{
   try{
      const top=parseInt(req.query.top)||5;
      const cities = await City.find().sort({visitCount: -1}).limit(top);
      res.json(cities);
   } catch(err){
      res.status(500).json({error:'Failed to fetch top cities'});
   }
};

//API for updateCity PUT
exports.updateCity = async(req,res)=>{
   try{
     const city = await City.findByIdAndUpdate(req.params.id,req.body,{new:true});
     res.json(city); 
   }
   catch(err){
    res.status(400).json({error:'failed to update'});
   }
};
exports.deleteCity = async(req,res)=>{
   try{
await City.findByIdAndDelete(req.params.id);
res.json({message:'city deleted successfully'});
   }catch(err){
      res.status(400).json({error:'failed to delete the City'});
   }
};
//PATCH operation /api/city/id/thumbnail

exports.setThumbnail=async(req,res) =>{
   try{
      const {thumbnail}=req.body;
      const city= await City.findById(req.params.id);
      if(!city) return res.status(404).json({error:'City not Found'});
      city.thumbnail=thumbnail;
      await city.save();
      res.json(city);
   }catch(err){
       res.status(400).json({error:'Failed to set Thumbnail'});
   }
};