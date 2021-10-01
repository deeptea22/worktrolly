const { getTasks } = require("./lib");
const { getOrgUseAppKey } = require("../organization/lib");

exports.getTasks = function(request, response) {
    const orgDomain = request.body.data.orgDomain;
    const teamId = request.body.data.teamId;
    const sprintNumber = request.body.data.sprintNumber;
    const status = 200;
    const promise1 = getTasks(orgDomain, teamId, sprintNumber).then((task) => {
        if (task == undefined) {
            console.log("No Tasks Available");
            result = { data: { status: "Error", taskData: undefined } }
        } else {
            taskData = task;
            result = { data: { status: "Ok", taskData: task } }
        }
    }).catch((err) => {
        console.log("error");
    });
    Promises = [promise1];
    return Promise.all(Promises).then(() => {
            return response.status(status).send(result);
        })
        .catch((error) => {
            result = { data: error };
            console.error("Error Creating Task", error);
            return response.status(status).send(result);
        });
}