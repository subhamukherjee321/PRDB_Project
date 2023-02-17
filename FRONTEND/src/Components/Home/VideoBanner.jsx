import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const VideoBanner = () => {
  return (
    <Grid my={"2rem"} px={"5rem"} templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem>
      <video autoPlay muted loop>
          <source
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_rm_fD7akAnocaPtKSMuBP_card_thumbnail_25.mp4?v=4145698817273637495"
            type="video/mp4"
          />
        </video>
      </GridItem>
      <GridItem>
      <video autoPlay muted loop>
          <source
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_E5O_Qsp0eX18ZzXlX_qxR_card_thumbnail_21.mp4?v=11159966407685850420"
            type="video/mp4"
          />
        </video>
      </GridItem>
      <GridItem>
      <video autoPlay muted loop>
          <source
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_yF_-HMwDwKyGNkK2fatFX_card_thumbnail_25.mp4?v=13180683800387934649"
            type="video/mp4"
          />
        </video>
      </GridItem>
      <GridItem>
      <video autoPlay muted loop>
          <source
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_kAt-G6XxtDoUuG4in7uEa_card_thumbnail.mp4?v=2721903566091864242"
            type="video/mp4"
          />
        </video>
      </GridItem>
      <GridItem>
      <video autoPlay muted loop>
          <source
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_J5jruxliHDOaP6CargKes_card_thumbnail.mp4?v=7823576618366193591"
            type="video/mp4"
          />
        </video>
      </GridItem>
      <GridItem w="100%" bg="blue.500"></GridItem>
    </Grid>
  );
};

export default VideoBanner;
