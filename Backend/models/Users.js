
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        uid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        gender: {
            type: DataTypes.STRING,
            alllowNull: false,
            validate: {
                notEmpty: true
            },
        },
        phoneno: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isStrongPassword: function (value) {
                    //defining here our custom validation 
                    //Password must contain at least one digit, one lowercase letter, and one uppercase letter
                    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
                        throw new Error(
                            'Password must contain at least one digit, one lowercase letter, and one uppercase letter.'
                        );
                    }

                },
                // args: [6, 255],
            }

        },

       


    })
    User.associate=(models)=>{
        User.hasMany(models.Post,{
            onDelete:"cascade"
        })
    }
    return User
}