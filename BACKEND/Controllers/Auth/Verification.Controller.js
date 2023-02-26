const {tokenModel} = require("../../Models/Token.model");
const {authModel} = require("../../Models/Auth.model");

const AuthVerification = async (req, res) =>{
    try {
        let {authId, token} = req.params;
        let isToken = await tokenModel.findOne({
            authId,
            token
        });
        if(!isToken){
            return res.render("error")
        }

        await authModel.updateOne({_id : authId}, {isActive : true});

        await tokenModel.deleteOne({authId});

        res.render("index")

    } catch (error) {
        return res.render("error");
    }
}

module.exports = {
    AuthVerification
}