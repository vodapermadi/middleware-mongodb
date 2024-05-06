const axios = require('axios')

let cfgREQ = {
    method: "post",
    url: "",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': ''
    },
    data: ""
}

let cfgDB = {
    collection: "",
    database: "",
    dataSource: ""
}

/**
 * Fetches all documents from a specified collection in a MongoDB database.
 *
 * @param {Object} con - An object containing the necessary connection details.
 * @param {string} con.url - The URL of the MongoDB server.
 * @param {string} con.col - The name of the collection to fetch documents from.
 * @param {string} con.db - The name of the database.
 * @param {string} con.ds - The data source.
 * @param {string} con.key - The API key for authentication.
 * @param {Object} [option] - An optional parameter for additional options.
 *
 * @returns {Promise<string>} - A promise that resolves to a JSON string of the fetched documents.
 * If an error occurs during the fetch, the promise rejects with a JSON string of the error.
 */
const getData = async (con, option = null) => {
    let userCfgDB = {
        ...cfgDB,
        collection: con.col,
        database: con.db,
        dataSource: con.ds
    }

    if (option !== null) {
        userCfgDB = {
            ...userCfgDB,
            ...option
        }
    }

    let userCfgREQ = {
        ...cfgREQ,
        url: `${con.url}/find`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': con.key
        },
        data: userCfgDB
    }

    try {
        const {data} = await axios(userCfgREQ)
        return data.documents
    } catch (error) {
        return error
    }
}

/**
 * Inserts multiple documents into a specified collection in a MongoDB database.
 *
 * @param {Object} con - An object containing the necessary connection details.
 * @param {string} con.url - The URL of the MongoDB server.
 * @param {string} con.col - The name of the collection to insert the documents into.
 * @param {string} con.db - The name of the database.
 * @param {string} con.ds - The data source.
 * @param {string} con.key - The API key for authentication.
 * @param {Array} val - An array of documents to be inserted.
 *
 * @returns {Promise<Object>} - A promise that resolves to an object containing the result of the insertion.
 * If an error occurs during the insertion, the promise rejects with an error object.
 */
const insertMany = async(con,val) => {
    let userCfgDB = {
        ...cfgDB,
        collection: con.col,
        database: con.db,
        dataSource: con.ds,
        documents: val
    }

    let userCfgREQ = {
        ...cfgREQ,
        url: `${con.url}/insertMany`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': con.key
        },
        data: userCfgDB
    }

    try {
        const { data } = await axios(userCfgREQ)
        return data
    } catch (error) {
        return error
    }
}

const updateMany = async(con,val,fil) => {
    let userCfgDB = {
        ...cfgDB,
        collection: con.col,
        database: con.db,
        dataSource: con.ds,
        filter: fil,
        update:{
            "$set":val
        }
    }

    let userCfgREQ = {
        ...cfgREQ,
        url: `${con.url}/updateMany`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': con.key
        },
        data: userCfgDB
    }

    try {
        const { data } = await axios(userCfgREQ)
        return data
    } catch (error) {
        return error
    }
}

/**
 * Deletes multiple documents from a specified collection in a MongoDB database.
 *
 * @param {Object} con - An object containing the necessary connection details.
 * @param {string} con.url - The URL of the MongoDB server.
 * @param {string} con.col - The name of the collection to delete documents from.
 * @param {string} con.db - The name of the database.
 * @param {string} con.ds - The data source.
 * @param {string} con.key - The API key for authentication.
 * @param {Object} val - The filter object to match the documents to delete.
 *
 * @returns {Promise<string>} - A promise that resolves to a JSON string of the deleted documents.
 * If an error occurs during the deletion, the promise rejects with a JSON string of the error.
 */
const deleteMany = async(con,val) => {
    let userCfgDB = {
        ...cfgDB,
        collection: con.col,
        database: con.db,
        dataSource: con.ds,
        filter: val
    }

    let userCfgREQ = {
        ...cfgREQ,
        url: `${con.url}/deleteMany`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': con.key
        },
        data: userCfgDB
    }

    try {
        const { data } = await axios(userCfgREQ)
        return data
    } catch (error) {
        return error
    }
}

/**
 * Inserts a single document into a specified collection in a MongoDB database.
 *
 * @param {Object} con - An object containing the necessary connection details.
 * @param {string} con.url - The URL of the MongoDB server.
 * @param {string} con.col - The name of the collection to insert the document into.
 * @param {string} con.db - The name of the database.
 * @param {string} con.ds - The data source.
 * @param {string} con.key - The API key for authentication.
 * @param {Object} val - The document to be inserted.
 *
 * @returns {Promise<string>} - A promise that resolves to a JSON string of the inserted document.
 * If an error occurs during the insertion, the promise rejects with a JSON string of the error.
 */
const insertOne = async(con,val) => {
    let userCfgDB = {
        ...cfgDB,
        collection: con.col,
        database: con.db,
        dataSource: con.ds,
        document:val
    }

    let userCfgREQ = {
        ...cfgREQ,
        url: `${con.url}/insertOne`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': con.key
        },
        data: userCfgDB
    }

    try {
        const { data } = await axios(userCfgREQ)
        return data
    } catch (error) {
        return error
    }
}

const updateOne = async(con,val,fil) => {
    let userCfgDB = {
        ...cfgDB,
        collection: con.col,
        database: con.db,
        dataSource: con.ds,
        filter: fil,
        update: {
            "$set": val
        }
    }

    let userCfgREQ = {
        ...cfgREQ,
        url: `${con.url}/updateOne`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': con.key
        },
        data: userCfgDB
    }

    try {
        const { data } = await axios(userCfgREQ)
        return data
    } catch (error) {
        return error
    }
}

/**
 * Deletes a single document from a specified collection in a MongoDB database.
 *
 * @param {Object} con - An object containing the necessary connection details.
 * @param {string} con.url - The URL of the MongoDB server.
 * @param {string} con.col - The name of the collection to delete the document from.
 * @param {string} con.db - The name of the database.
 * @param {string} con.ds - The data source.
 * @param {string} con.key - The API key for authentication.
 * @param {Object} val - The filter object to match the document to delete.
 *
 * @returns {Promise<string>} - A promise that resolves to a JSON string of the deleted document.
 * If an error occurs during the deletion, the promise rejects with a JSON string of the error.
 */
const deleteOne = async(con,val) => {
    let userCfgDB = {
        ...cfgDB,
        collection: con.col,
        database: con.db,
        dataSource: con.ds,
        filter: val
    }

    let userCfgREQ = {
        ...cfgREQ,
        url: `${con.url}/deleteOne`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': con.key
        },
        data: userCfgDB
    }

    try {
        const { data } = await axios(userCfgREQ)
        return data
    } catch (error) {
        return error
    }
}

module.exports = {
    getData,
    insertOne,
    insertMany,
    deleteMany,
    deleteOne,
    updateOne,
    updateMany,
}