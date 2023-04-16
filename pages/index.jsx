import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
    const router = useRouter();

    useEffect(() => {
        const f = async () => router.push("/login");
        f();
    }, []);

    return (
        <>
        </>
    );
}

export default Index;