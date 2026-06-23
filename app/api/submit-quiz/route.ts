import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { industry, goal, email } = await req.json();

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    resend.emails.send({
      from: 'BeyondBrnd <bharti@beyondbrnd.co>',
      to: ['bharti@beyondbrnd.co'],
      subject: `New lead: ${email}`,
      html: `
        <h2>New Form Submission</h2>
        <table>
          <tr><td><strong>Industry:</strong></td><td>${industry || '—'}</td></tr>
          <tr><td><strong>Goal:</strong></td><td>${goal || '—'}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
        </table>
      `,
    }).catch(() => {});

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: true });
  }
}
