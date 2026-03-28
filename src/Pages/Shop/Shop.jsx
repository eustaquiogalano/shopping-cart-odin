import { useOutletContext } from "react-router";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import styles from "./Shop.module.css";

export default function Shop() {
  const { laptops, error, addLaptopToCart } = useOutletContext();

  console.log(laptops);

  return (
    <main className={styles.main}>
      <Grid templateColumns="repeat(3, 1fr)" gap="6" h="full">
        {laptops &&
          laptops.map((laptop) => {
            return (
              <Card maxW="sm" key={laptop.id}>
                <CardBody>
                  <Image
                    src={laptop.images[0]}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{laptop.title}</Heading>
                    <Text>{laptop.description}</Text>
                    <Text color="darkBrown" fontSize="2xl">
                      $ {laptop.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider bg="darkBrown" />
                {laptop.addedToCart && "Added to Cart"}
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      colorScheme="brown"
                      onClick={() => {
                        addLaptopToCart(laptop.id);
                      }}
                    >
                      Buy now
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="brown"
                      onClick={() => {
                        addLaptopToCart(laptop.id);
                      }}
                    >
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
      </Grid>
    </main>
  );
}
