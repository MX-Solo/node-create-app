const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/database.js');

const Comment = sequelize.define("Comment" , {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      user: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Text:{
          type : DataTypes.STRING,
          allowNull: false
      },
      completed : {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull:true,
      }
})




module.exports = Comment;