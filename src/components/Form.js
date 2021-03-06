import React, { useEffect, useState } from "react";
import { Button, Card, Input } from "semantic-ui-react";

const Form = ({ setIsClaimed }) => {
  const [phoneNo, setPhoneNo] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const phoneRegx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (phoneRegx.test(phoneNo)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [phoneNo]);

  return (
    <Card.Content>
      <Card.Description>
        <Input
          size="large"
          type="number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          className="cus-input"
          placeholder="Enter your mobile no..."
        />
      </Card.Description>
      <Card.Meta>enter the same number used in Man Matters</Card.Meta>
      <Card.Description>
        <Button
          primary
          content="Wow! Get my Paytm Gift Card"
          icon="right arrow"
          labelPosition="right"
          disabled={buttonDisabled}
          onClick={() => {
            window.localStorage.setItem("phoneno", phoneNo);
            setIsClaimed(true);
          }}
        />
      </Card.Description>
    </Card.Content>
  );
};

export default Form;
