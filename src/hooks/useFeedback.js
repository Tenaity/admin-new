import axios from "axios";
import { useParams } from "react-router-dom";
import AppContext from "../components/AppContext";
import { useState, useContext, useEffect } from "react";
export const useFeedback = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const userId = state?.user?.userId;
  const path = window.location.pathname.slice(1);
  const service = path.slice(0, path.indexOf("/"));
  const [inputValue, setInputValue] = useState("");
  const [listFeedback, setListFeedback] = useState([]);

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const fetchFeedback = async () => {
    try {
      const option = {
        method: "get",
        url: `https://pbl6-travelapp.herokuapp.com/feedback/${service}/${id}`,
      };
      const response = await axios(option);
      setListFeedback(response.data);
      console.log("res", response);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
  useEffect(() => {
    fetchFeedback();
  }, []);
  const handleEnter = async (event) => {
    if (event.keyCode === 13) {
      setInputValue("");
      try {
        const token = localStorage.getItem("token");
        const hotelOption = {
          method: "post",
          url: `https://pbl6-travelapp.herokuapp.com/feedback/hotel/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            service: "hotel",
            vote: "4",
            comment: event.target.value,
            idUser: userId,
            idHotel: id,
          },
        };
        const resOption = {
          method: "post",
          url: `https://pbl6-travelapp.herokuapp.com/feedback/restaurant/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            service: "restaurant",
            vote: "4",
            comment: event.target.value,
            idUser: userId,
            idRestaurant: id,
          },
        };
        const carOption = {
          method: "post",
          url: `https://pbl6-travelapp.herokuapp.com/feedback/selfvehicle/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            service: "selfvehicle",
            vote: "4",
            comment: event.target.value,
            idUser: userId,
            idSelfVehicle: id,
          },
        };
        if (service === "hotel") {
          const response = await axios(hotelOption);
          fetchFeedback();
          console.log("res", response);
        } else {
          if (service === "restaurant") {
            const response = await axios(resOption);
            fetchFeedback();
            console.log("res", response);
          } else {
            const response = await axios(carOption);
            fetchFeedback();
            console.log("res", response);
          }
        }
      } catch (err) {
        console.log("err", err.response.data.message);
      }
    }
  };

  return {
    handleEnter,
    handleUserInput,
    listFeedback,
    inputValue,
  };
};
