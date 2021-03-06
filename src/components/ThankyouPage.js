import React from "react";
import { Card, Feed } from "semantic-ui-react";

const ThankyouPage = () => {
  return (
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
          <Feed.Content>
            <Feed.Summary>Where qill i get gift card?</Feed.Summary>
            <Feed.Extra>
              You will recive it on Whatsapp on your mobile.
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image="https://www.pngkit.com/png/full/895-8954056_gift-card-icon-photo-giftcard-icon.png" />
          <Feed.Content>
            <Feed.Summary>When will I receive the gift card?</Feed.Summary>
            <Feed.Extra>
              Within 48 hours, when your Man Matters order is delivered
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image="https://p7.hiclipart.com/preview/379/46/457/computer-icons-clip-art-cancel-button.jpg" />
          <Feed.Content>
            <Feed.Summary>What if i cancel order?</Feed.Summary>
            <Feed.Extra>
              The voucher will not deliverd if you cancel the order.
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  );
};

export default ThankyouPage;
