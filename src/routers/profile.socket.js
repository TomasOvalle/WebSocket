import usersManager from "../data/fs/UsersManager.fs.js"


export default async (socket) => {
    console.log(socket.id);
    socket.emit("users", await usersManager.read());
    socket.on("register", async (data) => {
        await usersManager.create(data);
        socket.emit("users", await usersManager.read());
    });
};