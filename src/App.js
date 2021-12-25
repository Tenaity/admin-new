import React, { Fragment } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./styles.css";
import BookHotel from "./pages/BookHotel";
import RoomDetail from "./pages/RoomDetail";
import AppReducer from "./reducers/AppReducer";
import { useCallback, useEffect, useReducer } from "react";
import AppContext from "./components/AppContext";
import axios from "axios";
import Settings from "./pages/Settings";
import BookRestaurant from "./pages/BookRestaurant";
import RestaurantDetail from "./pages/RestaurantDetail";
import CarDetail from "./pages/CarDetail";
import BookCar from "./pages/BookCar";
import Invoice from "./pages/Invoice";
import SearchResult from "./pages/SearchResult";
import HotelDetail from "./pages/HotelDetail";
import HistoryBill from "./pages/HistoryBill";
import DashBoard from "./pages/DashBoard";
import CreateHotel from "./pages/HotelAdmin/CreateHotel";
import ListHotelAdmin from "./pages/HotelAdmin/ListHotelAdmin";
import EditHotel from "./pages/HotelAdmin/EditHotel";
import CreateRoom from "./pages/HotelAdmin/CreateRoom";
import ListRoomHotelAdmin from "./pages/HotelAdmin/ListRoomHotel";
import EditRoom from "./pages/HotelAdmin/EditRoom";
import ListUserAdmin from "./pages/UserAdmin/ListUserAdmin";
import CreateSelfVehicle from "./pages/SelfVehicleAdmin/CreateSelfVehicle";
import ListSelfVehicleAdmin from "./pages/SelfVehicleAdmin/ListSelfVehicleAdmin";
import EditSelfVehicle from "./pages/SelfVehicleAdmin/EditSelfVehicle";
import CreateDetailVehicle from "./pages/SelfVehicleAdmin/CreateDetailVehicle";
import ListDetailVehicleAdmin from "./pages/SelfVehicleAdmin/ListDetailVehicleAdmin";
import EditDetailVehicle from "./pages/SelfVehicleAdmin/EditDetailVehicle";
import CreateRestaurant from "./pages/RestaurantAdmin/CreateRestaurant";
import ListRestaurantAdmin from "./pages/RestaurantAdmin/ListRestaurantAdmin";
import EditRestaurant from "./pages/RestaurantAdmin/EditRestaurant";

const theme = extendTheme();
function Hotel() {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={path}>
          <BookHotel />
        </Route>
        <Route path={`${path}/:id`}>
          <HotelDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}
function HotelAdmin() {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}/list`}>
          <ListHotelAdmin />
        </Route>
        <Route path={`${path}/new`}>
          <CreateHotel />
        </Route>
        <Route path={`${path}/:id/edit`}>
          <EditHotel />
        </Route>
        <Route path={`${path}/:id/room/list`}>
          <ListRoomHotelAdmin />
        </Route>
        <Route path={`${path}/:id/room/new`}>
          <CreateRoom />
        </Route>
        <Route path={`${path}/room/:id/edit`}>
          <EditRoom />
        </Route>
      </Switch>
    </Fragment>
  );
}
function RestaurantAdmin() {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}/list`}>
          <ListRestaurantAdmin />
        </Route>
        <Route path={`${path}/new`}>
          <CreateRestaurant />
        </Route>
        <Route path={`${path}/:id/edit`}>
          <EditRestaurant />
        </Route>
      </Switch>
    </Fragment>
  );
}
function SelfVehicleAdmin() {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}/list`}>
          <ListSelfVehicleAdmin />
        </Route>
        <Route path={`${path}/new`}>
          <CreateSelfVehicle />
        </Route>
        <Route path={`${path}/:id/edit`}>
          <EditSelfVehicle />
        </Route>
        <Route path={`${path}/:id/detailVehicle/list`}>
          <ListDetailVehicleAdmin />
        </Route>
        <Route path={`${path}/:id/detailVehicle/new`}>
          <CreateDetailVehicle />
        </Route>
        <Route path={`${path}/:idVehicle/detailVehicle/:id/edit`}>
          <EditDetailVehicle />
        </Route>
      </Switch>
    </Fragment>
  );
}
function UserAdmin() {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}/list`}>
          <ListUserAdmin />
        </Route>
      </Switch>
    </Fragment>
  );
}
function Room() {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={`${path}/:id`}>
          <RoomDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}
function Restaurant() {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={path}>
          <BookRestaurant />
        </Route>
        <Route path={`${path}/:id`}>
          <RestaurantDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}
function Car() {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={path}>
          <BookCar />
        </Route>
        <Route path={`${path}/:id`}>
          <CarDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}
function Payment() {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}/:id`}>
          <Invoice />
        </Route>
      </Switch>
    </Fragment>
  );
}
function Search() {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}`}>
          <SearchResult />
        </Route>
      </Switch>
    </Fragment>
  );
}
const App = () => {
  const initialState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const checkCurrentUser = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const option = {
        method: "get",
        url: `https://pbl6-travelapp.herokuapp.com/users/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
      if (response) {
        const userName = response.data.name;
        dispatch({ type: "CURRENT_USER", payload: { userName } });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);
  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/car">
            <Car />
          </Route>
          <Route path="/restaurant">
            <Restaurant />
          </Route>
          <Route path="/hotel">
            <Hotel />
          </Route>
          <Route path="/room">
            <Room />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/invoice">
            <Payment />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/historybills">
            <HistoryBill />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/hoteladmin">
            <HotelAdmin />
          </Route>
          <Route path="/restaurantadmin">
            <RestaurantAdmin />
          </Route>
          <Route path="/selfvehicleadmin">
            <SelfVehicleAdmin />
          </Route>
          <Route path="/users">
            <UserAdmin />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </AppContext.Provider>
    </ChakraProvider>
  );
};

export default App;
