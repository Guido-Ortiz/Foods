const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    healthScore: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    analyzedInstructions: {
      type: DataTypes.ARRAY(DataTypes.JSON), 
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {
    timestamps: false
  });
};
