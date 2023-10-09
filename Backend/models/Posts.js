
module.exports =(sequelize, DataTypes)=>{
    const Post=sequelize.define("Post",{
            Post_ID:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
                allowNull:false,
                validate: {
                    notEmpty: true
                }    
            },
            Title:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            }    ,
            Description:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            Price:{
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },




    })
return Post
}