exports.handler = async function (event, context) {
    if (event.body) {
        return {
            statusCode: 200,
            body: event.body,
        };
    }
    return {
        statusCode: 400,
        body: "",
    };

};