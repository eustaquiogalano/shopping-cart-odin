import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Image,
  Input,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";

export default function Cart() {
  const { laptops, totalPrice, incrementQuantity, decrementQuantity } =
    useOutletContext();

  return (
    <main className={styles.cartMain}>
      <div className={styles.cartList}>
        {laptops &&
          laptops.map((laptop) => {
            return (
              laptop.addedToCart && (
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  display="flex"
                  flexShrink="0"
                  p="1rem"
                  key={laptop.id}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={laptop.images[1]}
                    alt="Caffe Latte"
                  />

                  <Stack flex="1">
                    <CardBody>
                      <Heading size="md">{laptop.title}</Heading>
                      <p>${laptop.price}</p>
                    </CardBody>

                    <CardFooter display="flex" gap=".5rem">
                      <Button
                        variant="solid"
                        colorScheme="brown"
                        onClick={() => {
                          incrementQuantity(laptop.id);
                        }}
                      >
                        +
                      </Button>
                      <Input
                        placeholder={laptop.quantity}
                        textAlign="center"
                        w="20%"
                        type="number"
                        colorScheme="brown"
                      />
                      <Button
                        variant="solid"
                        colorScheme="brown"
                        onClick={() => {
                          decrementQuantity(laptop.id);
                        }}
                      >
                        -
                      </Button>
                    </CardFooter>
                  </Stack>

                  <Stat
                    flex="0 0 auto"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="20%"
                  >
                    <StatLabel fontSize="1rem">Total Price:</StatLabel>
                    <StatNumber>${laptop.price * laptop.quantity}</StatNumber>
                  </Stat>
                </Card>
              )
            );
          })}
      </div>
      <div className={styles.cartTotalAmount}>
        <Button colorScheme="brown" w="30%" h="60%" fontSize="1.5rem">
          Checkout
        </Button>
        <Stat flex="0 0 auto">
          <StatLabel fontSize="1.5rem">Total Amount:</StatLabel>
          <StatNumber>£{totalPrice || 0}</StatNumber>
          {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
        </Stat>
      </div>
    </main>
  );
}
