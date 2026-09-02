import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    const { name, email, authorized } = body;
    
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    if (!authorized) {
      return NextResponse.json(
        { error: 'You must confirm authorization to request an assessment.' },
        { status: 400 }
      );
    }

    // Mock network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // TODO: Integrate email service like Resend or SendGrid here
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Contact Form <contact@yourdomain.com>',
    //   to: ['your-email@example.com'],
    //   subject: `Security Assessment Request from ${name}`,
    //   html: `<p>New request from ${name} (${email})</p>`,
    // });

    return NextResponse.json(
      { message: 'Message sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
