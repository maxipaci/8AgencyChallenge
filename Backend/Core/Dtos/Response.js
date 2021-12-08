class Response{
    Success;
    Message;
    Data;

    constructor(success, message, data = {}){
        this.Success = success;
        this.Message = message;
        this.Data = data;
    }
}

module.exports = Response;