const db = require('../config/dbConfig');
const roomsDb = db.Rooms
exports.getRoomsList = (req, res) => {
    try {
        let id = req.params.id
        roomsDb.findAll()
            .then(result => {
                res.status(200).json({ message: 'get all Rooms list info successfully', status: 'success', floorsList: result })
            })
            .catch(error => {
                // log on console
                console.log(error);

                res.status(500).json({
                    message: "Error!",
                    error: error
                });
            });
    }
    catch (error) {
        return res.status(500).json({
            message: "Fail!",
            error: error.message
        });

    }

}
exports.createRoomController = (req, res) => {
    try {
        //room name roomid beads count

        let reqData = {
            RoomName: req.body.roomName,
            floorId: req.body.floorId,
            beadsCount: req.body.beads

        }
        roomsDb.create(reqData)
            .then(result => {
                res.status(200).json({ message: 'room created  successfully', status: 'success', })
            })
            .catch(error => {
                // log on console
                console.log(error);

                res.status(500).json({
                    message: "Error!",
                    error: error
                });
            });

    } catch (err) {
        return res.status(500).json({
            message: "Fail!",
            error: err.message
        });
    }
}