import twilio from "twilio";

const accountSid = process.env.SID;
const authToken = process.env.AUTHTOKEN;
const client = twilio(accountSid, authToken);
async function makeCall(to) {
  try {
    const call = await client.calls.create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: to,
      from: "+17754299142"
    });
    console.log(`Call initiated with SID: ${call.sid}`);
    return call;
  } catch (error) {
    console.log("Error making call:", error);
  }
}
export default makeCall;
