import { useEffect } from "react";
import { player } from "../util/player";

import { getProblem, setProblem } from "../util/problem";
import { useRouter } from "next/router";
import { setGroupUUID, getGroupUUID } from "../util/player";

const Groups = () => {
    const router = useRouter();

    useEffect(() => {
        const f = async () => {
            const response = await fetch(`/api/groups/join/${player.uuid}`);
            if(!response.ok) {
                console.error("Unable to connect to group");
                return;
            }

            const response_json = await response.json();
            setGroupUUID(response_json.group);
            // Poll
            let p = undefined;
            let polls = 0;
            do {
                await new Promise(r => setTimeout(r, 100));
                p = await pollGroup(getGroupUUID())
                polls++;
            }
            while(p == undefined && polls < 100);

            setProblem(p);

            router.push("/code");
        }
        f();
    }, []);

    const pollGroup = async (uuid) => {
        const response = await fetch(`/api/groups/ready/${uuid}`);

        if (!response.ok) return false;
        const response_json = await response.json();

        if (response_json.error != undefined) {
            console.error("Error from server");
        }
        
        if (response_json.ready == true) {
            return response_json.problem;
        }

        return undefined;
    }

    return (
        <>

        </>
    );
}

export default Groups;