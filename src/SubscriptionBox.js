import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Text, TextInput } from "grommet";

import styled from "styled-components";

const Header = styled(Text)`
  display: block;
`;

const SubscriptionForm = ({ subscribe, status, message }) => {
  const [subscribeLabel, setSubscribeLabel] = React.useState("+");
  const [emailEntered, setEmailEntered] = React.useState("");
  const [buttonOutlineColor, setButtonOutlineColor] = React.useState("#829399");
  React.useEffect(() => {
    let displayedMessage = message;
    if (message) {
      const htmlTagIndex = message.indexOf("<");
      if (htmlTagIndex !== -1) {
        displayedMessage = message.slice(0, htmlTagIndex);
      }
    }
    if (status === "sending") {
      setSubscribeLabel("sending...");
    } else if (status === "error") {
      setSubscribeLabel(`failed: ${displayedMessage}`);
      setButtonOutlineColor("red");
    } else if (status === "success") {
      setSubscribeLabel("success!");
      setButtonOutlineColor("green");
    }
  }, [status, message]);
  return (
    <Box flex="grow" direction="column-reverse">
      <Box direction="row" width="medium">
        <TextInput
          value={emailEntered}
          onChange={event => setEmailEntered(event.target.value)}
          size="small"
          focusIndicator={false}
          placeholder="email"
        />
        <Button
          label={subscribeLabel}
          onClick={() => {
            subscribe({ EMAIL: emailEntered });
          }}
          color={buttonOutlineColor}
        />
      </Box>
      <Header size="small" color="#829399">
          want notifications for new articles?
        </Header>
    </Box>
  );
};

SubscriptionForm.propTypes = {
  subscribe: PropTypes.func.isRequired,
  status: PropTypes.string,
  message: PropTypes.string
};

const SubscriptionBox = () => {
  const mailchimpURL =
    "https://decodingthenarwhal.us4.list-manage.com/subscribe/post?u=27db9ff9430445cfdfa900027&amp;id=ffcd44861e";
  return (
    <MailchimpSubscribe
      url={mailchimpURL}
      render={({ subscribe, status, message }) => (
        <SubscriptionForm
          subscribe={subscribe}
          status={status}
          message={message}
        />
      )}
    />
  );
};

export default SubscriptionBox;
