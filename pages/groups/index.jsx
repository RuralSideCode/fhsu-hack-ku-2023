import { useEffect } from "react";
import { io } from "socket.io-client";

const Groups = () => {
    useEffect(() => {
        fetch(`/api/groups/join/`).finally(() => {
            const socket = io();

            socket.on("hi", () => console.log("hi"));
        });
    }, []);

    return (
        <>

        </>
    );
}

export default Groups;