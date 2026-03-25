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

import useDataFetcher from "../../hooks/useDataFetcher";

import styles from "./Cart.module.css";

export default function Cart() {
  const { laptops } = useDataFetcher();

  return (
    <main className={styles.cartMain}>
      <div className={styles.cartList}>
        {laptops &&
          laptops.map((laptop) => {
            return (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                display="flex"
                flexShrink="0"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />

                <Stack flex="1">
                  <CardBody>
                    <Heading size="md">{laptop.title}</Heading>
                  </CardBody>

                  <CardFooter w="25%" display="flex" gap=".5rem">
                    <Button variant="solid" colorScheme="blue">
                      +
                    </Button>
                    <Input placeholder="0" textAlign="center"></Input>
                    <Button variant="solid" colorScheme="blue">
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
                  <StatLabel fontSize="1rem">Total Amount:</StatLabel>
                  <StatNumber>£0.00</StatNumber>
                </Stat>
              </Card>
            );
          })}
      </div>
      <div className={styles.cartTotalAmount}>
        <Button colorScheme="blue" w="30%" h="60%" fontSize="1.5rem">
          Checkout
        </Button>
        <Stat flex="0 0 auto">
          <StatLabel fontSize="1.5rem">Total Amount:</StatLabel>
          <StatNumber>£0.00</StatNumber>
          {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
        </Stat>
      </div>
    </main>
  );
}
