var config = require('../configs/dbconfig');
const sql = require('mssql');

async function getAllStaff() {
    try {
        let pool = await sql.connect(config);
        let allStaff = await pool.request().query("SELECT * from staff");
        return allStaff.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getStaff(staffId) {
    try {
        let pool = await sql.connect(config);
        let staff = await pool.request()
            .input('idStaff', sql.Int, staffId)
            .query("SELECT * from staff where id = @idStaff");
        return staff.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function addStaff(staff) {
    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('firstname', sql.NVarChar, staff.firstname)
            .input('lastname', sql.NVarChar, staff.lastname)
            .input('date_of_birth', sql.NVarChar, staff.date_of_birth)
            .input('address', sql.NVarChar, staff.address)
            .input('nic', sql.NVarChar, staff.nic)
            .input('phone_number', sql.Int, staff.phone_number)
            .query(`
                INSERT INTO "staff"
                ("firstname", "lastname", "date_of_birth","address", "nic","phone_number")
                VALUES (@firstname,@lastname, @date_of_birth, @address, @nic, @phone_number)`
            );
        return insertProduct.recordsets;
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