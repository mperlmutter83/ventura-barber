// TwiML fallback-call endpoint (Twilio voice webhook).
// Twilio requests voice webhooks via POST by default, so POST serves the TwiML too.
// The <Dial action="/fallback-call"> URL is ALSO POSTed when the dial ends, carrying
// DialCallStatus — answering that callback with the dial TwiML would redial unanswered
// calls in an endless loop, so it returns empty <Response/> instead.
// record="record-from-answer-dual": both legs recorded, starts at answer.
// Recordings land in Twilio console → Monitor → Recordings.

const TWIML = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial record="record-from-answer-dual" timeout="15" action="/fallback-call">
    <Number>+12722770272</Number>
  </Dial>
</Response>`;

const EMPTY_TWIML = `<?xml version="1.0" encoding="UTF-8"?>
<Response></Response>`;

function xmlResponse(body: string) {
  return new Response(body, {
    headers: { "Content-Type": "text/xml" },
  });
}

export async function GET() {
  return xmlResponse(TWIML);
}

export async function POST(request: Request) {
  const body = await request.text();
  if (body.includes("DialCallStatus")) {
    return xmlResponse(EMPTY_TWIML);
  }
  return xmlResponse(TWIML);
}
