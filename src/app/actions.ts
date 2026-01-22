"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData): Promise<{ success: boolean; error?: string }> {
    const name = formData.get("name") as string;
    const mobile = formData.get("mobile") as string;
    const service = formData.get("service") as string;
    const messageContent = formData.get("message") as string;

    // Send Email Notification
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "prajapatabhay788@gmail.com",
            pass: "ubtbuhcjfapqilwx",
        },
    });

    const mailOptions = {
        from: "prajapatabhay788@gmail.com",
        to: "scatalystfinancial@gmail.com",
        subject: `New Application: ${service} - ${name}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                <h2 style="color: #4f46e5; margin-bottom: 20px; text-align: center;">New Loan/Insurance Application</h2>
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <p><strong>Full Name:</strong> ${name}</p>
                    <p><strong>Mobile Number:</strong> ${mobile}</p>
                    <p><strong>Service Type:</strong> ${service}</p>
                    <p><strong>Message:</strong> ${messageContent || "N/A"}</p>
                </div>
                <div style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 12px; color: #64748b; text-align: center;">
                    <p>&copy; 2025 Catalyst Financial Services. Udaipur, Rajasthan.</p>
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Email Error:", error);
        return { success: false, error: "Failed to send email. Please try again or call us." };
    }
}
