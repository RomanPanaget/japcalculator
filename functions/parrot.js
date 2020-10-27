exports.handler = async function (event, context) {
    try {
        const requestBody = JSON.parse(event.body);
        const message = requestBody.message;
        return {
            statusCode: 200,
            body: JSON.stringify({ message: message }),
        };
    } catch (e) {
        return {
            statusCode: 400,
            body: JSON.stringify({}),
        };
    }
};