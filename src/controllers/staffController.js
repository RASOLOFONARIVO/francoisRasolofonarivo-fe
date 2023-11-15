var staffModel = require('../models/staffModel');

async function getAllStaff() {
    try {
        return staffModel.getAllStaff();
    }
    catch (error) {
        console.log(error);
    }
}

async function getStaff(staffId) {
    try {
        return staffModel.getStaff(staffId);
    }
    catch (error) {
        console.log(error);
    }
}

async function addStaff(staff) {
    try {
        return staffModel.addStaff(staff);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllStaff: getAllStaff,
    getStaff : getStaff,
    addStaff : addStaff
}