"use server";

import nodemailer from "nodemailer";
import path from "path";

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

    // Resolve the absolute path to the logo
    const logoPath = path.join(process.cwd(), "public", "images", "logo.jpg");

    const mailOptions = {
        from: "prajapatabhay788@gmail.com",
        to: "prajapatabhay788@gmail.com",
        subject: `New Application: ${service} - ${name}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="cid:logo" alt="Catalyst Financial Services" style="width: 180px; height: auto;" />
                </div>
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
        attachments: [
            {
                filename: 'logo.jpg',
                path: logoPath,
                cid: 'logo'
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error: any) {
        console.error("Email Error:", error);
        // Include more details if it's a specific SMTP error
        return {
            success: false,
            error: error.message || "Failed to send email. Please try again or call us."
        };
    }
}
