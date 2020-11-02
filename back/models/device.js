module.exports = (sequelize, DataTypes) => {
    const Device = sequelize.define('Device', {
        siteCode: {
            type: DataTypes.STRING(30),
            aloowNull: false,
            unique: true
        },
        topic: {
            type: DataTypes.STRING(30),
            aloowNull: false
        }
    }, {
        charset: 'utf8',
        callate: 'utf8_general_ci',
    });
    Device.associate = (db) => { };
    return Device;
}