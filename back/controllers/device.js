const deviceService = require('../service/device');
const siteService = require('../service/site');
const userService = require('../service/user');
const { verifyToken } = require('../utils/token');
const SensorData = require('../models/mongo/sensorData');

exports.getSensorData = async (req, res, next) => {
    try {
        let datas = [];
        await req.body.Devices.map(async (v) => {
            let data = await SensorData.findOne({ topic: v.topic }).sort({ createAt: -1 })
            datas.push(data)
        })
        console.log(datas)
    } catch (err) {
        console.log(err)
    }
}

exports.getAllHasUser = async (req, res, next) => {
    try {
        const tokenData = verifyToken(req.headers.authorization);

        const payload = {
            email: tokenData.email,
            nickname: tokenData.nickname
        }

        const findeOneIdByEmail = await userService.findOneIdByEmail(payload.email);

        payload.userId = findeOneIdByEmail.userId;

        const getAllDevice = await deviceService.getAllDevice(findeOneIdByEmail.userId);

        res.status(200).send(getAllDevice);
    } catch (err) {
        console.log(err)
    }
}

exports.createDevice = async (req, res, next) => {
    try {
        const tokenData = verifyToken(req.headers.authorization);

        const payload = {
            email: tokenData.email,
            nickname: tokenData.nickname,
            siteCode: req.body.siteCode,
            topic: req.body.topic
        }

        const findOneBySiteCode = await siteService.findOneBySiteCode(payload.siteCode);
        const findOneIdByEmail = await userService.findOneIdByEmail(payload.email);

        payload.userId = findOneIdByEmail.dataValues.userId

        const createDevice = await deviceService.createDevice(payload);
        res.status(200).send(createDevice);
    } catch (err) {
        next(err)
    }
}

exports.addDevice = async (req, res, next) => {
    try {
        const tokenData = verifyToken(req.headers.authorization);

        const payload = {
            email: tokenData.email,
            nickname: tokenData.nickname,
            deviceId: req.params.deviceId
        };

        const findOneByDeviceId = await deviceService.findOneByDeviceId(payload.deviceId);

        payload.siteCode = findOneByDeviceId.siteCode;
        payload.topic = findOneByDeviceId.topic;

        const findOneIdByEmail = await userService.findOneIdByEmail(payload.email);

        payload.userId = findOneIdByEmail.userId;

        const addDevice = await deviceService.addDevice(payload);

        return res.send(addDevice)
    } catch (err) {
        next(err)
    }
}