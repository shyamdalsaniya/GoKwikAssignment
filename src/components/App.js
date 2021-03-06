import React, { useEffect, useState } from "react";
import { Container, Header, Card, Image } from "semantic-ui-react";
import Form from "./Form";
import ThankyouPage from "./ThankyouPage";
import Gokwikjpg from "../gokwik.jpg";

const App = () => {
  const [isClaimed, setIsClaimed] = useState(true);

  useEffect(() => {
    const localValue = window.localStorage.getItem("phoneno");
    if (localValue) {
      setIsClaimed(true);
    } else {
      setIsClaimed(false);
    }
  }, [isClaimed]);
  return (
    <Container fluid textAlign="center">
      <Header as="h1">Gift Card</Header>
      <Header as="h4" className="p-0 m-0">
        Congratulations You won gift card
      </Header>
      <Card centered className="inner-card">
        <Image
          src="https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_14_1.jpg"
          wrapped
        />
        <Card.Content>
          <Card.Description>
            You have WON Paytm Gift Card of Rs200 for{" "}
            <b>Placing the order on Man Metter</b>
          </Card.Description>
        </Card.Content>
        {isClaimed ? <ThankyouPage /> : <Form setIsClaimed={setIsClaimed} />}
        <Card.Meta className="branding">
          Powered by <Image src={Gokwikjpg} size="small" />
        </Card.Meta>
      </Card>
    </Container>
  );
};

export default App;
