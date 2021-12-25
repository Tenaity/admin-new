import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { GiSnowflake1 } from "react-icons/gi";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import FeedBack from "../FeedBack";
import NewFeedBack from "../NewFeedBack";
import { useFeedback } from "../../hooks/useFeedback";
import CardRoom from "../BookHotel/CardRoom";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Main = () => {
  let { id } = useParams();
  const { data = {} } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/hotel/${id}/`,
    fetcher
  );
  const { data: rooms } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/room/${id}/all`,
    fetcher
  );

  const { handleEnter, inputValue, handleUserInput, listFeedback } =
    useFeedback();
  const countFeedback = data.feedbacks ? data.feedbacks.length : 0;

  return (
    <>
      <Box w="6xl" mx="auto" mt="10">
        <SimpleGrid spacing="10" columns={{ base: 3 }}>
          <Box bg="green.300" borderRadius="10">
            <Flex mt="20px">
              <Avatar size="lg" ml="3" />
              <Box ml="3">
                <Heading size="lg">{data.name}</Heading>
                <Text>{data.address}</Text>
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mt="2">
              <Button w="130px" variant="outline" bg="transparent" mr="10">
                Theo dõi
              </Button>
              <Button w="130px" variant="outline" bg="transparent">
                Chat
              </Button>
            </Flex>
          </Box>
          <Flex h="40" alignItems="center">
            <Box>
              <Flex alignItems="center" mb="4">
                <GiSnowflake1 />
                <Text ml="5px">Số phòng:</Text>
                <Text ml="5px">{data.totalRooms}</Text>
              </Flex>
              <Flex alignItems="center" mb="4">
                <GiSnowflake1 />
                <Text ml="5px">Số phòng trống: </Text>
                <Text ml="5px">{data.availableRooms}</Text>
              </Flex>
              <Flex alignItems="center" mb="4">
                <GiSnowflake1 />
                <Text ml="5px">Giá phòng: </Text>
                <Text ml="5px">{data.priceFrom} - </Text>
                <Text ml="5px">{data.priceTo}</Text>
              </Flex>
            </Box>
          </Flex>
          <Flex h="40" alignItems="center">
            <Box>
              <Flex alignItems="center" mb="4">
                <GiSnowflake1 />
                <Text ml="5px">Đánh giá:</Text>
                <Text ml="5px">{countFeedback}</Text>
              </Flex>
              <Flex alignItems="center" mb="4">
                <GiSnowflake1 />
                <Text ml="5px">Thành phố: </Text>
                <Text ml="5px">{data.city}</Text>
              </Flex>
              <Flex alignItems="center" mb="4">
                <GiSnowflake1 />
                <Text ml="5px">Số điện thoại: </Text>
                <Text ml="5px">{data.phone}</Text>
              </Flex>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>

      <Box>
        <Box w="6xl" mx="auto">
          <Box my="10">
            <Heading>Phòng của khách sạn</Heading>
            <Flex my="10">
              <Box mx="auto">
                <SimpleGrid columns={[2, null, 4]} spacing="40px">
                  {rooms?.map((room) => (
                    <CardRoom key={room.id} room={room} />
                  ))}
                </SimpleGrid>
              </Box>
            </Flex>
          </Box>
          <Box my="10">
            <Heading>Đánh giá khách sạn</Heading>
            <Box my="10" alignItems="center">
              <Tabs
                align="center"
                isManual
                variant="enclosed"
                colorScheme={"green"}
              >
                <TabList>
                  <Tab>Tất cả</Tab>
                  <Tab>5 sao</Tab>
                  <Tab>4 sao</Tab>
                  <Tab>3 sao</Tab>
                  <Tab>2 sao</Tab>
                  <Tab>1 sao</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {listFeedback.map((value, index) => {
                      return (
                        <FeedBack
                          vote={value.vote}
                          comment={value.comment}
                          key={index}
                        />
                      );
                    })}
                    <NewFeedBack
                      handleEnter={handleEnter}
                      handleUserInput={handleUserInput}
                      inputValue={inputValue}
                    />
                  </TabPanel>
                  <TabPanel>
                    {listFeedback.map((value, index) => {
                      if (value.vote === 5) {
                        return (
                          <FeedBack
                            vote={value.vote}
                            comment={value.comment}
                            key={index}
                          />
                        );
                      }
                    })}
                    <NewFeedBack
                      handleEnter={handleEnter}
                      handleUserInput={handleUserInput}
                      inputValue={inputValue}
                    />
                  </TabPanel>
                  <TabPanel>
                    {listFeedback.map((value, index) => {
                      if (value.vote === 4) {
                        return (
                          <FeedBack
                            vote={value.vote}
                            comment={value.comment}
                            key={index}
                          />
                        );
                      }
                    })}
                    <NewFeedBack
                      handleEnter={handleEnter}
                      handleUserInput={handleUserInput}
                      inputValue={inputValue}
                    />
                  </TabPanel>
                  <TabPanel>
                    {listFeedback.map((value, index) => {
                      if (value.vote === 3) {
                        return (
                          <FeedBack
                            vote={value.vote}
                            comment={value.comment}
                            key={index}
                          />
                        );
                      }
                    })}
                    <NewFeedBack
                      handleEnter={handleEnter}
                      handleUserInput={handleUserInput}
                      inputValue={inputValue}
                    />
                  </TabPanel>
                  <TabPanel>
                    {listFeedback.map((value, index) => {
                      if (value.vote === 2) {
                        return (
                          <FeedBack
                            vote={value.vote}
                            comment={value.comment}
                            key={index}
                          />
                        );
                      }
                    })}
                    <NewFeedBack
                      handleEnter={handleEnter}
                      handleUserInput={handleUserInput}
                      inputValue={inputValue}
                    />
                  </TabPanel>
                  <TabPanel>
                    {listFeedback.map((value, index) => {
                      if (value.vote === 1) {
                        return (
                          <FeedBack
                            vote={value.vote}
                            comment={value.comment}
                            key={index}
                          />
                        );
                      }
                    })}
                    <NewFeedBack
                      handleEnter={handleEnter}
                      handleUserInput={handleUserInput}
                      inputValue={inputValue}
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Main;
