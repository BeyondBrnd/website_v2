import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { linkedinUrl, email, industry, goal, score, verdict, answers } = await req.json();

    resend.emails.send({
      from: 'BeyondBrnd <bharti@beyondbrnd.co>',
      to: ['bharti@beyondbrnd.co'],
      subject: `Score: ${score}/10${email ? ` — ${email}` : ''}`,
      html: `
        <h2>LinkedIn Score Result</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 12px;font-weight:600">Email:</td><td style="padding:6px 12px">${email || '—'}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">LinkedIn:</td><td style="padding:6px 12px">${linkedinUrl || '—'}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Industry:</td><td style="padding:6px 12px">${industry || '—'}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Goal:</td><td style="padding:6px 12px">${goal || '—'}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Score:</td><td style="padding:6px 12px">${score}/10</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Verdict:</td><td style="padding:6px 12px">${verdict || '—'}</td></tr>
        </table>
        ${answers ? `
        <h3>Assessment Answers</h3>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 12px;font-weight:600">Profile picture?</td><td style="padding:6px 12px">${answers.hasPhoto}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Keywords in headline?</td><td style="padding:6px 12px">${answers.hasKeywords}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Experience descriptions?</td><td style="padding:6px 12px">${answers.hasExperienceText}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Last post:</td><td style="padding:6px 12px">${answers.recency}</td></tr>
        </table>
        ` : ''}
      `,
    }).catch(() => {});

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: true });
  }
}
