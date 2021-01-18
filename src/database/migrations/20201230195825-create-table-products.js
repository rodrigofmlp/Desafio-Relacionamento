

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('products', { uid:{
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    name:{
      allowNull: false,
      type: Sequelize.STRING,
    },
    quantity:{
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    brand_uid:{
      allowNull: false,
      type: Sequelize.UUID,
      references:{
        model: 'brands',
        key: 'uid',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    created_at:{
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at:{
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('products');

  },
};
