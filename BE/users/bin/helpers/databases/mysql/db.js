const validate = require('validate.js');
const wrapper = require('../../utils/wrapper');
const pool = require('./connection');

class DB {
  constructor(config) {
    this.config = config;
  }

  async findMany(table) {
    let db = await pool.getConnection(this.config);
    if(validate.isEmpty(db)){
      db = await pool.createConnectionPool(this.config);
    }
    const recordset = () => {
      return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
          if (err) {
            let errorMessage;
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
              errorMessage = 'Database connection was closed.';
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
              errorMessage = 'Database has too many connections.';
            }
            if (err.code === 'ECONNREFUSED') {
              errorMessage = 'Database connection was refused.';
            }
            connection.release();
            reject(wrapper.error(errorMessage));
          }
          else {
            connection.query(`SELECT * FROM ${table}`, (err, result) => {
              if (err) {
                connection.release();
                reject(wrapper.error(err.message));
              }
              else {
                connection.release();
                resolve(wrapper.data(result));
              }
            });
          }
        });
      });
    };
    const result = await recordset().then(result => {
      return result;
    }).catch(err => {
      return err;
    });
    return result;
  }

  async findManyPesan(table, userID) {
    let db = await pool.getConnection(this.config);
    if(validate.isEmpty(db)){
      db = await pool.createConnectionPool(this.config);
    }
    const recordset = () => {
      return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
          if (err) {
            let errorMessage;
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
              errorMessage = 'Database connection was closed.';
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
              errorMessage = 'Database has too many connections.';
            }
            if (err.code === 'ECONNREFUSED') {
              errorMessage = 'Database connection was refused.';
            }
            connection.release();
            reject(wrapper.error(errorMessage));
          }
          else {
            connection.query(`SELECT * FROM ${table} WHERE userID = ${userID}`, (err, result) => {
              if (err) {
                connection.release();
                reject(wrapper.error(err.message));
              }
              else {
                connection.release();
                resolve(wrapper.data(result));
              }
            });
          }
        });
      });
    };
    const result = await recordset().then(result => {
      return result;
    }).catch(err => {
      return err;
    });
    return result;
  }

  async findOne(table, id) {
    let db = await pool.getConnection(this.config);
    if(validate.isEmpty(db)){
      db = await pool.createConnectionPool(this.config);
    }
    const recordset = () => {
      return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
          if (err) {
            let errorMessage;
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
              errorMessage = 'Database connection was closed.';
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
              errorMessage = 'Database has too many connections.';
            }
            if (err.code === 'ECONNREFUSED') {
              errorMessage = 'Database connection was refused.';
            }
            connection.release();
            reject(wrapper.error(errorMessage));
          }
          else {
            connection.query(`SELECT * FROM ${table} WHERE id = '${id}'`, (err, result) => {
              if (err) {
                connection.release();
                reject(wrapper.error(err.message));
              }
              else {
                connection.release();
                resolve(wrapper.data(result));
              }
            });
          }
        });
      });
    };
    const result = await recordset().then(result => {
      return result;
    }).catch(err => {
      return err;
    });
    return result;
  }

  async findOneUsername(table, username) {
    let db = await pool.getConnection(this.config);
    if(validate.isEmpty(db)){
      db = await pool.createConnectionPool(this.config);
    }
    const recordset = () => {
      return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
          if (err) {
            let errorMessage;
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
              errorMessage = 'Database connection was closed.';
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
              errorMessage = 'Database has too many connections.';
            }
            if (err.code === 'ECONNREFUSED') {
              errorMessage = 'Database connection was refused.';
            }
            connection.release();
            reject(wrapper.error(errorMessage));
          }
          else {
            connection.query(`SELECT * FROM ${table} WHERE username = '${username}'`, (err, result) => {
              if (err) {
                connection.release();
                reject(wrapper.error(err.message));
              }
              else {
                connection.release();
                resolve(wrapper.data(result));
              }
            });
          }
        });
      });
    };
    const result = await recordset().then(result => {
      return result;
    }).catch(err => {
      return err;
    });
    return result;
  }

  async findOnePesan(table, id, userID) {
    let db = await pool.getConnection(this.config);
    if(validate.isEmpty(db)){
      db = await pool.createConnectionPool(this.config);
    }
    const recordset = () => {
      return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
          if (err) {
            let errorMessage;
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
              errorMessage = 'Database connection was closed.';
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
              errorMessage = 'Database has too many connections.';
            }
            if (err.code === 'ECONNREFUSED') {
              errorMessage = 'Database connection was refused.';
            }
            connection.release();
            reject(wrapper.error(errorMessage));
          }
          else {
            connection.query(`SELECT * FROM ${table} WHERE userID = '${userID}' AND id = ${id}`, (err, result) => {
              if (err) {
                connection.release();
                reject(wrapper.error(err.message));
              }
              else {
                connection.release();
                resolve(wrapper.data(result));
              }
            });
          }
        });
      });
    };
    const result = await recordset().then(result => {
      return result;
    }).catch(err => {
      return err;
    });
    return result;
  }

  async postOne(table, data) {
    let db = await pool.getConnection(this.config);
    if(validate.isEmpty(db)){
      db = await pool.createConnectionPool(this.config);
    }
    const recordset = () => {
      return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
          if (err) {
            let errorMessage;
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
              errorMessage = 'Database connection was closed.';
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
              errorMessage = 'Database has too many connections.';
            }
            if (err.code === 'ECONNREFUSED') {
              errorMessage = 'Database connection was refused.';
            }
            connection.release();
            reject(wrapper.error(errorMessage));
          }
          else {
            connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
              if (err) {
                connection.release();
                reject(wrapper.error(err.message));
              }
              else {
                connection.release();
                resolve(wrapper.data(result));
              }
            });
          }
        });
      });
    };
    const result = await recordset().then(result => {
      return result;
    }).catch(err => {
      return err;
    });
    return result;
  }

  async updateOne(table, data, id) {
    let db = await pool.getConnection(this.config);
    if(validate.isEmpty(db)){
      db = await pool.createConnectionPool(this.config);
    }
    const recordset = () => {
      return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
          if (err) {
            let errorMessage;
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
              errorMessage = 'Database connection was closed.';
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
              errorMessage = 'Database has too many connections.';
            }
            if (err.code === 'ECONNREFUSED') {
              errorMessage = 'Database connection was refused.';
            }
            connection.release();
            reject(wrapper.error(errorMessage));
          }
          else {
            connection.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id], (err, result) => {
              if (err) {
                connection.release();
                reject(wrapper.error(err.message));
              }
              else {
                connection.release();
                resolve(wrapper.data(result));
              }
            });
          }
        });
      });
    };
    const result = await recordset().then(result => {
      return result;
    }).catch(err => {
      return err;
    });
    return result;
  }

  async deleteOne(table, id) {
    let db = await pool.getConnection(this.config);
    if(validate.isEmpty(db)){
      db = await pool.createConnectionPool(this.config);
    }
    const recordset = () => {
      return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
          if (err) {
            let errorMessage;
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
              errorMessage = 'Database connection was closed.';
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
              errorMessage = 'Database has too many connections.';
            }
            if (err.code === 'ECONNREFUSED') {
              errorMessage = 'Database connection was refused.';
            }
            connection.release();
            reject(wrapper.error(errorMessage));
          }
          else {
            connection.query(`DELETE FROM ${table} WHERE id = ${id}`, (err, result) => {
              if (err) {
                connection.release();
                reject(wrapper.error(err.message));
              }
              else {
                connection.release();
                resolve(wrapper.data(result));
              }
            });
          }
        });
      });
    };
    const result = await recordset().then(result => {
      return result;
    }).catch(err => {
      return err;
    });
    return result;
  }

}

module.exports = DB;
