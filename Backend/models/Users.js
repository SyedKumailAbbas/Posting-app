
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        User_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        User_Name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Gender: {
            type: DataTypes.STRING,
            alllowNull: false,
            validate: {
                notEmpty: true
            },
        },
        PhoneNo: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            unique: true
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            unique: true
        },
        Password: {
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
    return User
}