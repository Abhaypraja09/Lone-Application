"use server";

import { getMessages, deleteMessage as deleteMsgFromDB } from "@/lib/data";
import { cookies } from "next/headers";

export async function adminLogin(password: string) {
    if (password === "admin123") { // Simple hardcoded password for now
        const cookieStore = await cookies();
        cookieStore.set("admin_session", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 // 1 day
        });
        return { success: true };
    }
    return { success: false, error: "Invalid password" };
}

export async function adminLogout() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
}

export async function fetchAdminMessages() {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session || session.value !== "true") {
        throw new Error("Unauthorized");
    }
    return getMessages();
}

export async function deleteAdminMessage(id: string) {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session || session.value !== "true") {
        throw new Error("Unauthorized");
    }
    deleteMsgFromDB(id);
    return { success: true };
}
