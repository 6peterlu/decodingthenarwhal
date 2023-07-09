import { FormEvent, useState } from "react";
import jsonp from "jsonp";

const MAILCHIMP_URL =
  "https://draftzero.us21.list-manage.com/subscribe/post?u=a55e1fc43149a5a4f4df3914a&amp;id=3f3fff1d44&amp;f_id=00162ae7f0";

export default function Mailchimp() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const path = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}`;
    const url = path.replace("/post?", "/post-json?");
    sendData(url);
  }

  function sendData(url: string) {
    console.log("sending data to", url);
    //   this.setState({ status: "sending" });
    jsonp(url, { param: "c" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={({ target }) => setEmail(target.value)} value={email} />
      <button type="submit">submit</button>
    </form>
  );
}
