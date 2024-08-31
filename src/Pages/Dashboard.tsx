import { useState, useEffect } from "react";
import ParticlesBackground from "../Components/ParticlesBackground";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { DocumentData } from "firebase/firestore";

function Dashboard() {

    const [userData, setUserData] = useState<DocumentData | null>(null);
    const [loading, setLoading] = useState(true);

    async function getUserdata() {
        const uid = localStorage.getItem("userID");

        if (!uid) {
            console.log("No user ID found in localStorage");
            setLoading(false);
            return;
        }

        const docRef = doc(db, "users", uid);

        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserData(docSnap.data());
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching document:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUserdata();
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen text-white">Loading...</div>;
    }

    return (
        <main className="h-[85vh] flex flex-col mt-[80px] w-full text-white items-center px-4 sm:px-6 pb-16">
            <section className=" flex h-full flex-col w-full items-center mt-6 sm:mt-8">
                <div className=" relative z-[-1] w-full max-w-lg">
                    <ParticlesBackground />
                </div>
                <div className=" w-full h-full  bg-opacity-80 p-6 rounded-lg shadow-lg mt-4 sm:mt-6">
                    {userData ? (
                        <div className="h-full w-full text-center">
                            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-red-600">Welcome, {userData.name || "User"}!</h1>
                            <div className="text-left space-y-2 h-full w-full flex justify-evenly items-start flex-col text-xl">
                                <p><span className="font-semibold text-red-600"><b>Email</b>:</span> {userData.email || "N/A"}</p>
                                <p><span className="font-semibold text-red-600"><b>Contact</b></span> {userData.contactNumber || "N/A"}</p>
                                <p><span className="font-semibold text-red-600"><b>College Name</b> :</span> {userData.collegeName || "N/A"}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-red-400">No user data available</p>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Dashboard;
