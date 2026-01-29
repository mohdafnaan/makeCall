import twilio from "twilio";

const accountSid = process.env.SID;
const authToken = process.env.AUTHTOKEN;
const client = twilio(accountSid, authToken);
async function makeCall(to, from) {
  try {
    const call = await client.calls.create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: to,
      from: from,
    });
    console.log(`Call initiated with SID: ${call.sid}`);
    return call;
  } catch (error) {
    console.log("Error making call:", error);
  }
}
export default makeCall;
